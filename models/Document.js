const mongoose = require('mongoose');
const documentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: String,
    description: String,
    title: String

});
/*
const documentSchema = new Schema({
    _id: { type: Number, required: true },
    author: { type: String, required: true },
    description: { type: String, required: false },
    title: { type: String, required: true }
});
*/

const Document = mongoose.model("Documents", documentSchema);

module.exports = Document;