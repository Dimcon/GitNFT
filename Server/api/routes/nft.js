// This is going to all of our users routes

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const NFT = require("../models/nft");


router.post("/addNFT",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        let newNFT = new NFT({
            id: req.body.id,
            nftToken: req.body.nftToken,
        });
        NFT.getNFTById(req.body.id,
            function(err, nft) {
                if (nft) {
                    res.status(401).send("NFT already exists!");
                }
                NFT.addNFT(
                    newNFT,
                    (err, nft) => {
                        if (err) {
                            res.status(401).send("NFT could not be saved");
                        } else {
                            res.json({ success: true, msg: "NFT created." });
                        }
                    });
            })
    });

// Get nfts
router.get(
    "/getNFTs",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        NFT.getNFTs((err, nft) => {
            res.json({ nft: nft });
        })
    }
);
module.exports = router;