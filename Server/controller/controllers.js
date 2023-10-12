require('dotenv').config();
const Blog = require('../model/Blog');
const nodemailer = require('nodemailer');

const test = (req, res) => {
  res.status(200).json({ message: 'Hello World' });
};

const send_mail = async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ message: 'Error, bad request', status: 'please make sure you fill all the fields' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `${subject}`,
      html: `<h1>Message from ${fullName}</h1> <p>Email:${email}</p> <br/> ${message}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Error sending message', err });
      } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).json({ message: 'Message sent successfully', info });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Error sending message', err });
  }
};

const upload_blog_post = async (req, res) => {
  try {
    const { thumbnail, title, body } = req.body;

    if (!thumbnail || !title || !body) return res.status(400).json({ status: 'Error, bad request', message: `please make sure you're uploading a valid title (string) and body` });

    // upload thumbnail to cloudinary

    const blog = new Blog({ thumbnail, title, body });
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
