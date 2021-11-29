const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Mongoose User schema
const GithubInstallationSchema = mongoose.Schema({
    installationId: {
        type: String,
        required: true
    },
    userKey: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    accessTokenUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

const Repo = module.exports = mongoose.model('GithubInstallation', GithubInstallationSchema);


module.exports.getRepoById = function(id, callback) {
    Repo.findById(id, callback);
}

module.exports.getRepos = function(callback) {
    Repo.find({}, callback);
}

module.exports.addRepo = function(newRepo, callback) {
    newRepo.save(callback)
}
