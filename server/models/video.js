const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoShema = new Schema({
    title: String,
    url: String,
    description: String
}); 

module.exports = mongoose.model('video', videoShema, 'videos');

