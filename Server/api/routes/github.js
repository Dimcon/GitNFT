// This is going to all of our users routes

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const User = require("../models/user");
const Post = require("../models/post");


// Routes to handle posts. GET and POST
// Submit new posts
router.post("/newPost",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
    });

// Delete posts


module.exports = router;
