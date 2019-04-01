const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  comment: String
});

module.exports = mongoose.model('Comment', CommentSchema);
