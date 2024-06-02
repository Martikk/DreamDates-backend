require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');

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

// Define endpoint to get all experiences
app.get('/experiences', async (req, res) => {
  try {
    const experiences = await db('experiences').select('*'); // Query all records from experiences table
    res.json(experiences); // Send records as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response if query fails
  }
});

// Define endpoint to get a specific experience by ID, along with social links and contact info
app.get('/experiences/:id', async (req, res) => {
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
app.get('/categories', async (req, res) => {
  try {
    const categories = await db('categories').select('*'); // Query all records from categories table
    res.json(categories); // Send records as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response if query fails
  }
});

// Define endpoint to get all flowers
app.get('/flowers', async (req, res) => {
  try {
    const flowers = await db('flowers').select('*'); // Query all records from flowers table
    res.json(flowers); // Send records as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response if query fails
  }
});

// Define endpoint to handle form submissions
app.post('/form_submissions', async (req, res) => {
  try {
    const { firstname, email, phone } = req.body;
    await db('form_submissions').insert({ firstname, email, phone });
    res.status(201).json({ message: 'Form submission successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});

module.exports = app; 
