// This is going to all of our users routes

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const Repo = require("../models/repo");
const NFT = require("../models/nft");
// const {GithubInstallationRequest} = require("../dto/github-installation-request");
// const githubUtil = new (require("../services/github-util"))


router.post("/addRepo",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        let newRepo = new Repo({
            id: req.body.id,
            repoName: req.body.name,
        });
        Repo.getRepoById(req.body.id,
            function(err, repo) {
                if (repo) {
                    res.status(401).send("Repository already exists!");
                }
                Repo.addRepo(
                    newRepo,
                    (err, repo) => {
                        if (err) {
                            res.status(401).send("Repository could not be saved");
                        } else {
                            res.json({ success: true, msg: "Repository created." });
                        }
                    });
            })
    });

// Get repos
router.get(
    "/getRepos",
    // passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        Repo.getReposByUserId(req.user.id, (err, repos) => {
            res.json({ repos: repos });
        })
    }
);

router.get("/redirect", async (req, res, next) => {
    console.log('redirect')
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 5000)
    })
    Repo.getReposByInstallationId(req.query.installation_id, async function (err, repos) {
        for (let repo of repos) {
            repo.userId = req.query.state
            await repo.save()
            NFT.getNFTByRepoId(repo.id, async function (err, nfts) {
                for (let nft of nfts) {
                    nft.userId = req.query.state
                    await nft.save()
                }
            })
        }
        return res.redirect("/repos");
    })
    // const repos = Repo.find()
    // const request = new GithubInstallationRequest(req.query);
    //
    // if (request.setupAction === "install") {
    //     try {
    //         await githubUtil.authenticateApplication(request);
    //         res.redirect("https://");
    //         return;
    //     } catch (error) {
    //         httpUtil.handleError(error, res);
    //     }
    // } else {
    //     httpUtil.handleError(
    //         new Error400(
    //             `We do not have an implementation for ${request.setupAction}`
    //         ),
    //         res
    //     );
    // }
});

router.post("/webhook", async (req, res, next) => {
    // console.log('webhook', req.headers['x-github-event'], req.body);
    const event = req.headers["x-github-event"];

    if (event === "installation") {
        switch (req.body.action) {
            case "created": {
                const repos = req.body.repositories
                for (const repo of repos) {
                    const dbRepo = new Repo({
                        userId: 'null',
                        userKey:  req.body.installation.account.login,
                        repoId: repo.id,
                        name: repo.full_name,
                        url:  req.body.installation.repositories_url,
                        isPrivate: repo.private,
                        installationId: req.body.installation.id,
                        createdAt: new Date()
                    })
                    await dbRepo.save();
                    const dbNft = new NFT({
                        userId: 'null',
                        repoId: dbRepo.id,
                        nftToken: dbRepo.name,
                        createdAt: new Date()
                    })
                    await dbNft.save();
                }
                return res.json({ status: "Successfully created" });
            }
            case "deleted": {
                // TODO: Delete github repo
                Repo.getReposByInstallationId(req.query.installation_id, async function (err, repos) {
                    for (let repo of repos) {
                        repo.userId = req.query.state
                        await repo.remove()
                        // NFT.getNFTByRepoId(repo.id, function (err, nfts) {
                        //     for (let nft of nfts) {
                        //         nft.userId = req.query.state
                        //         // nft.remove()
                        //     }
                        // })
                    }
                })
                return res.json({ status: "Successfully deleted" });
            }
            default: {
                return res.status(405).send("request error");
            }
        }
        return;
    }

    if (event === "push") {
        const githubInstallation = await githubUtil.getGithubInstallation(
            req.body.installation.id
        );
        const branch = req.body.ref.split("/").slice(-1).pop();

        // -> One DB request
        const spaceUsers = await SpaceUser.findAll({
            where: { userId: githubInstallation.userId },
        });
        // -> Two DB request
        const spaces = await Space.findAll({
            where: {
                id: {
                    [Op.in]: spaceUsers.map((spaceUser) => {
                        return spaceUser.spaceId;
                    }),
                },
            },
        });
        // -> Three DB request
        const clusters = await Cluster.findAll({
            where: {
                id: {
                    [Op.in]: spaces.map((space) => {
                        return space.clusterId;
                    }),
                },
            },
        });
        // -> FOR
        for (const cluster of clusters) {
        }
    }

    if (event === "installation_repositories") {
        switch (req.body.action) {
            case "added": {
                try {
                    const githubInstallation = await githubUtil.getGithubInstallation(
                        req.body.installation.id
                    );
                    console.log("install", githubInstallation);
                    await githubUtil.addGithubRepos(
                        githubInstallation,
                        req.body.repositories_added,
                        req.body.installation.account.html_url
                    );
                    return res.json(
                        new ApiResponse({ status: "Repo successfully added" })
                    );
                } catch (error) {
                    return httpUtil.handleError(error, res);
                }
            }
            case "removed": {
                try {
                    await githubUtil.removeRepos(
                        req.body.installation.id,
                        req.body.repositories_removed
                    );
                    return res.json(
                        new ApiResponse({ status: "Repo successfully removed" })
                    );
                } catch (error) {
                    return httpUtil.handleError(error, res);
                }
            }
            default: {
                return httpUtil.handleError(
                    new Error400(
                        `We do not have an implementation for installation event, ${req.body.action}`
                    ),
                    res
                );
            }
        }
    }
});




module.exports = router;
