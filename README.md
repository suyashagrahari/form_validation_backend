# Backend - User Registration API with MongoDB

This is the backend for the User Registration app built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**. It handles user registration by accepting data from the frontend and storing it in the MongoDB database. It also provides an endpoint to fetch all user data.

## Features

- **User Registration**: Allows users to submit their personal and account details via a POST request. The data is validated and stored in MongoDB.
- **Fetch User Data**: Provides an endpoint to fetch all registered users from the database.
- **MongoDB Integration**: Stores user data in MongoDB using **Mongoose** for schema management.
- **Error Handling**: Includes proper error handling for database operations and API requests.
- **CORS Enabled**: Allows cross-origin requests from the frontend.

## Technologies Used

- **Express**: Web framework for Node.js for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: Middleware for enabling cross-origin requests.
- **dotenv**: Loads environment variables from a `.env` file.
- **Nodemon**: Development tool for auto-restarting the server on code changes.

## Installation

To set up the backend, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/assignment-backend.git
   cd assignment-backend
   ```

2. **Install Dependencies**

Install the required dependencies using npm or yarn:
npm install
or
yarn install

3. **Setup Environment Variables**

Create a .env file in the root directory and add the following environment variable for MongoDB connection:

MONGODB_URI=your-mongodb-uri-here
PORT=3001

4. **Run the Development Server**

Start the server with:
npm run dev
or
yarn dev

The API will be running on http://localhost:3001.

**API Endpoints**
POST /api/users/registration: Registers a new user with the provided data and stores it in MongoDB.
Request Body:
{
"personalInfo": {
"firstName": "John",
"lastName": "Doe",
"email": "john.doe@example.com",
"occupation": "Software Engineer",
"companyDetails": {
"companyName": "Tech Corp",
"position": "Developer"
},
"additionalEmails": ["john.alt@example.com"]
},
"accountDetails": {
"username": "johndoe",
"password": "securepassword123",
"preferences": {
"notifications": true,
"twoFactorAuth": false
},
"accountType": "Premium",
"securityQuestions": [
{
"question": "What is your pet's name?",
"answer": "Fluffy"
}
]
},
"preferences": {
"theme": "dark",
"notifications": true,
"language": "en",
"accessibility": true
}
}

GET /api/users: Retrieves a list of all registered users.

**Folder Structure**
backend/
├── controllers/ # Controller functions for handling API requests
│ ├── userController.js # Handles user registration and fetching users
├── models/ # Mongoose models for MongoDB collections
│ ├── User.js # User schema and model
├── routes/ # API routes for user-related operations
│ ├── userRoutes.js # User registration and data routes
├── config/ # Configuration files
│ ├── database.js # MongoDB connection setup
├── .env # Environment variables (MongoDB URI)
├── package.json # NPM configuration
├── index.js # Main server file
└── nodemon.json # Nodemon configuration
