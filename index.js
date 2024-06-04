require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const apiKey = process.env.API_KEY;

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email application-specific password
  }
});

// Middleware to check API key
const checkApiKey = (req, res, next) => {
  const userApiKey = req.headers['x-api-key'];
  if (userApiKey && userApiKey === apiKey) {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden: Invalid API Key' });
  }
};

// Root route to confirm server is running and serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define endpoint to get all experiences
app.get('/experiences', checkApiKey, async (req, res) => {
  try {
    const experiences = await db('experiences').select('*'); // Query all records from experiences table
    res.json(experiences); // Send records as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response if query fails
  }
});

// Define endpoint to get a specific experience by ID, along with social links and contact info
app.get('/experiences/:id', checkApiKey, async (req, res) => {
  try {
    const { id } = req.params; // Extract experience ID from request parameters
    const experience = await db('experiences').where({ id }).first(); // Query specific experience record
    const socialLinks = await db('social_links').select('*'); // Query all records from social_links table
    const contactInfo = await db('contact_info').select('*'); // Query all records from contact_info table

    if (experience) {
      res.json({ experience, socialLinks, contactInfo }); // Send combined data as JSON response
    } else {
      res.status(404).json({ error: 'Experience not found' }); // Send 404 response if experience not found
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response if query fails
  }
});

// Define endpoint to get all categories
app.get('/categories', checkApiKey, async (req, res) => {
  try {
    const categories = await db('categories').select('*'); // Query all records from categories table
    res.json(categories); // Send records as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response if query fails
  }
});

// Define endpoint to get all flowers
app.get('/flowers', checkApiKey, async (req, res) => {
  try {
    const flowers = await db('flowers').select('*'); // Query all records from flowers table
    res.json(flowers); // Send records as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response if query fails
  }
});

// Define endpoint to handle form submissions
app.post('/form_submissions', checkApiKey, async (req, res) => {
  try {
    const { firstname, email, phone, message } = req.body;
    await db('form_submissions').insert({ firstname, email, phone, message });

    // Send notification email using Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL, // Your notification email address
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission from ${firstname} (${email}).
      
      Phone: ${phone}
      Message: ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Form submission successful' });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: error.message });
  }
});

// Define endpoint to get all reviews
app.get('/reviews', checkApiKey, async (req, res) => {
  try {
    const reviews = await db('reviews').select('*');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Define endpoint to handle review submissions
app.post('/reviews', checkApiKey, async (req, res) => {
  try {
    const { name, email, professional, comments } = req.body;
    await db('reviews').insert({ 
      name, 
      email, 
      professional, 
      comments, 
      platform: 'Website',
      avatar: 'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717317138/DreamDate/iconavatar_qpt2h1.png' 
    });
    res.status(201).json({ message: 'Review submission successful' });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});

module.exports = app;
