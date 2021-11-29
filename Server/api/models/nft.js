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
    createdAt: {
        type: Date,
        required: true
    }

});

const Repo = module.exports = mongoose.model('NFT', NFTSchema);



module.exports.getNFTById = function(id, callback) {
    Repo.findById(id, callback);
}

module.exports.getNFTs = function(callback) {
    Repo.find({}, callback);
}

module.exports.addNFT = function(newNFT, callback) {
    newNFT.save(callback)
}
