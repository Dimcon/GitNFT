const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Mongoose User schema
const RepoSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    installationId: {
        type: String,
        required: true
    },
    userKey: {
        type: String,
        required: true
    },
    repoId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    isPrivate: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }

});

const REPO = module.exports = mongoose.model('Repo', RepoSchema);


module.exports.getRepoById = function(id, callback) {
    REPO.findById(id, callback);
}

module.exports.getRepos = function(callback) {
    REPO.find({}, callback);
}

module.exports.getReposByUserId = function(userId, callback) {
    REPO.find({ "userId": userId}, callback);
}


module.exports.getReposByInstallationId = function(installationId, callback) {
    REPO.find({ "installationId": installationId}, callback);
}


module.exports.addRepo = function(newRepo, callback) {
    newRepo.save(callback)
}
