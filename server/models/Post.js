const mongoose = require('mongoose');
const User = require('./User');
const { Schema } = mongoose;

const postSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Post = mongoose.model('Post', postSchema);
  
module.exports = Post;