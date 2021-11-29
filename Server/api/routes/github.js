// This is going to all of our users routes

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const Repo = require("../models/repo");
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
        Repo.getRepos((err, repos) => {
            res.json({ repos: repos });
        })
    }
);

router.get("/redirect", async (req, res, next) => {
    console.log('redirect')
    // const request = new GithubInstallationRequest(req.query);
    //
    // if (request.setupAction === "install") {
    //     try {
    //         await githubUtil.authenticateApplication(request);
    //         res.redirect("https://codecapsules.io/teams");
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
                        userId: '61a51118e894262bf84d112e',
                        userKey:  req.body.installation.account.login,
                        repoId: repo.id,
                        name: repo.full_name,
                        url:  req.body.installation.repositories_url,
                        isPrivate: repo.private,
                        installationId: req.body.installation.id,
                        createdAt: new Date()
                    })
                    dbRepo.save();
                }
                // const githubInstallation = await githubUtil.createGithubInstallation(
                //     req.body.installation.id,
                //     req.body.installation.account.id,
                //     req.body.installation.access_tokens_url
                // );
                // await githubUtil.createGithubRepos(githubInstallation, req.body);
                // return res.json(new ApiResponse({ status: "Successfully created" }));
            }
            case "deleted": {
                // githubUtil.deleteApplication(req.body);
                // return res.json(new ApiResponse({ status: "Successfully deleted" }));
            }
            default: {
                // httpUtil.handleError(
                //     new Error400(
                //         `We do not have an implementation for installation event, ${req.body.action}`
                //     ),
                //     res
                // );
                return;
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
            const clusterApiToken = sign(
                {
                    id: "code-caps-api",
                },
                config.clusterApiTokenSecret
            );
            Axios.post(
                `${cluster.clusterApiEndpoint}/gitpush/webhook`,
                {
                    repoUrl: req.body.repository.html_url, // also try html_url.
                    branch,
                },
                {
                    headers: {
                        "x-api-token": clusterApiToken,
                    },
                }
            );
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
