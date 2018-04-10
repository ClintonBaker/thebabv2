import mongoose from 'mongoose';

const ThingSchema = new mongoose.Schema({
  name: String,
  link: String,
  description: String,
  tags: String,
  comments: [
    {
      author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        username: String
      },
      comment: String
    }
  ]
});

module.exports = mongoose.model('Thing', ThingSchema);
