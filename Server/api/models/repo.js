const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Mongoose User schema
const RepoSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    repoName: {
        type: String,
        required: true
    },
    githubId: {
        type: String,
        required: true
    },
    GithubToken: {
        type: String,
        required: true
    }

});

const Repo = module.exports = mongoose.model('Repo', RepoSchema);

// This file acts as a user service.
//  We abstract the addUser and compare password functions which
// use bcrypt

// https://www.npmjs.com/package/bcrypt

module.exports.getRepoById = function(id, callback) {
    Repo.findById(id, callback);
}

module.exports.getRepos = function(callback) {
    Repo.find({}, callback);
}

module.exports.addRepo = function(newRepo, callback) {
    newRepo.save(callback)
}
