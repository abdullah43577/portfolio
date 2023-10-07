const Blog = require('../model/Blog');

const test = (req, res) => {
  res.status(200).send('Hello World');
};

const send_mail = (req, res) => {
  try {
    // handle sending email here
  } catch (err) {
    // handle errors
  }
};

const upload_blog_post = async (req, res) => {
  try {
    const { title, body } = req.body;

    if (!title || !body) return res.status(400).json({ status: 'Error, bad request', message: `please make sure you're uploading a valid title (string) and body` });

    const blog = new Blog({ title, body });
    await Blog.save();

    res.status(201).json({ blog });
  } catch (err) {
    res.status(500).json({ message: 'Error creating a new blog post', err });
  }
};

const get_blog_post = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ status: 'Error, bad request', message: 'please make sure the id of the corresponding blog is correctly filled!' });

    const blog = await Blog.findById({ id });

    if (!blog) return res.status(401).json({ message: "couldn't find the corresponding blog post" });

    res.status(200).json({ blog });
  } catch (err) {
    res.status(500).json({ message: 'Error getting blog post', err });
  }
};

const get_all_blogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});

    if (!blogs) return res.status(400).json({ message: 'Error fetching blogs' });

    res.status(200).json({ blogs });
  } catch (err) {
    res.status(500).json({ message: 'Error getting blogs', err });
  }
};

module.exports = { test, send_mail, upload_blog_post, get_blog_post, get_all_blogs };
