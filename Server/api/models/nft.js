const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const NFTSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    nftToken: {
        type: String,
        required: true
    },
    repoId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }

});

const NFT = module.exports = mongoose.model('NFT', NFTSchema);

module.exports.getNFTById = function(id, callback) {
    NFT.findById(id, callback);
}


module.exports.getNFTByUserId = function(id, callback) {
    NFT.find({}, callback);
}

module.exports.getNFTByRepoId = function(id, callback) {
    NFT.find({"repoId": id}, callback);
}

module.exports.getNFTs = function(userId, callback) {
    NFT.find({ "userId": userId}, callback);
}

module.exports.addNFT = function(newNFT, callback) {
    newNFT.save(callback)
}
