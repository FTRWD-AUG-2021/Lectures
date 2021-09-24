const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: String,
    weight: Number,
    emotion: { type: String, default: 'happy' }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;