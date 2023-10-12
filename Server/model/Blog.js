const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema); // creates a model from the schema

module.exports = Blog;
