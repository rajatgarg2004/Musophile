const mongoose = require('mongoose');
const songsSchema = mongoose.Schema({
    title:String,
    src: String,
    imgL:String
});

module.exports = mongoose.model('Songs',songsSchema)
