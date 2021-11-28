// This is going to all of our users routes

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const Repo = require("../models/repo");


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
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        Repo.getRepos((err, repos) => {
            res.json({ repos: repos });
        })
    }
);
module.exports = router;