# Dream Dates Backend

This is the backend for the Dream Dates application, providing APIs for experiences, categories, flowers, form submissions, and reviews.
Visit the live api: [Dreamy Dates API](https://dreamydates-7102c8296fc9.herokuapp.com).

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./Assets/api_1.png">
  <source media="(prefers-color-scheme: light)" srcset="./Assets/api_1.png">
  <img alt="Dreamy Dates Website" srcset="./Assets/api_1.png">
</picture>



## Table of Contents

- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
  - [Experiences](#experiences)
  - [Categories](#categories)
  - [Flowers](#flowers)
  - [Form Submissions](#form-submissions)
  - [Reviews](#reviews)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./Assets/data_1.png">
  <source media="(prefers-color-scheme: light)" srcset="./Assets/data_1.png">
  <img alt="Dreamy Dates Website" srcset="./Assets/data_1.png">
</picture>

## Getting Started

### Prerequisites

- Node.js
- npm
- MySQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dream-dates-backend.git
   cd dream-dates-backend
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root of the project and add your database configuration:
   ```bash
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
4. Run database migrations:
   ```bash
   npx knex migrate:latest
### Endpoints
### Experiences
- Get all experiences
- URL: '/experiences'
- Method: 'GET'
- Description: Retrieves all experiences from the database.
- Response:
   ```bash
   [
  {
    "id": 1,
    "title": "Experience Title",
    "description": "Experience Description",
    "imageUrl": "https://example.com/image.jpg",
    ...
  },
  ...
  ]
### Get experience by ID
- Get experience by ID
- URL: /experiences/:id
- Method: GET
- Description: Retrieves a specific experience by its ID, along with social links and contact information.
- Response:

``````
     {
  "experience": {
    "id": 1,
    "title": "Experience Title",
    "description": "Experience Description",
    ...
  },
  "socialLinks": [
    {
      "id": 1,
      "platform": "Facebook",
      "url": "https://facebook.com"
    },
    ...
  ],
  "contactInfo": [
    {
      "id": 1,
      "phone": "+1234567890",
      "email": "contact@example.com"
    },
    ...
  ]
  }
```````

### Categories
- Get all categories
- URL: /categories
- Method: GET
- Description: Retrieves all categories from the database.
- Response:
``````
[
  {
    "id": 1,
    "name": "Category Name"
  },
  ...
]
```````
### Flowers
- Get all flowers
- URL: /flowers
- Method: GET
- Description: Retrieves all flowers from the database.
- Response:
````
[
  {
    "id": 1,
    "name": "Flower Name",
    "imageUrl": "https://example.com/flower.jpg"
  },
  ...
]
````

### Form Submissions
- Submit a form
- URL: /form_submissions
- Method: POST
- Description: Handles form submissions and saves the data to the database.
- Request Body:
``````
{
  "firstname": "John",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "This is a message."
}
```````
- Response:
``````
{
  "message": "Form submission successful"
}
```````

### Reviews
- Get all reviews
- URL: /reviews
- Method: GET
- Description: Retrieves all reviews from the database.
- Response:
````
[
  {
    "id": 1,
    "name": "Reviewer Name",
    "email": "reviewer@example.com",
    "professional": 5,
    "comments": "This is a comment.",
    "platform": "Website",
    "avatar": "https://example.com/avatar.jpg",
    ...
  },
  ...
]
`````
### Submit a review
- URL: /reviews
- Method: POST
- Description: Handles review submissions and saves the data to the database.
-Request Body:
```
{
  "name": "Reviewer Name",
  "email": "reviewer@example.com",
  "professional": 5,
  "comments": "This is a comment."
}
```
### Response:
```
{
  "message": "Review submission successful"
}
```

# Nodemailer Integration
We have integrated Nodemailer for email notifications. Now, every time a user submits a form on our site, their information is not only stored in our database but also triggers an email notification directly to our team.

## How It Works
When a form submission occurs, an email is sent using Nodemailer with the details provided in the form. This ensures that we stay updated with user inquiries in real-time.


### Configuring Nodemailer
1. Install Nodemailer:
```
npm install nodemailer
```
2. Update your .env file with your email credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-notification-email@gmail.com
```
3. Configure the Nodemailer transporter in your server code:
```
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

```
4. Send an email notification on form submission:
```
app.post('/form_submissions', checkApiKey, async (req, res) => {
  try {
    const { firstname, email, phone, message } = req.body;
    await db('form_submissions').insert({ firstname, email, phone, message });

    // Send notification email using Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
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

```

### Database Setup
Run the following commands to set up the database tables:
```
npx knex migrate:latest
```
This will create the necessary tables as defined in the migrations folder.

## Running the Application
To start the server, run:
```
npm run dev
```
The server will be running at http://localhost:3001