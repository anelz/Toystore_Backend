# ToyStore Backend Application
This is the backend server for the ToyStore application, built with Node.js, Express, and MongoDB.

# Project Setup
Prerequisites
Ensure you have Node.js and npm (Node Package Manager) installed on your system. You will also need MongoDB installed and running on your system, or you can use a cloud-hosted MongoDB instance.

# Node.js: Download and install Node.js.
MongoDB: You can install MongoDB locally or use MongoDB Atlas for a cloud-hosted solution. For a local GUI client, you can use MongoDB Compass.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/anelz/Toystore_Backend.git
cd Toystore_Backend
Install the necessary dependencies:
bash
Copy code
npm install
npm i nodemon
Environment Variables
Create a .env file in the root directory of the project by copying the .env.example file. This file should contain the MongoDB connection string and other environment variables:

makefile
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000


# Starting the Server
To start the server in development mode with automatic restarts, use the following command:

bash
Copy code
npm start
The server will start on the port specified in your .env file (default is 5000). You can access the API at http://localhost:5000.

# MongoDB Setup
To connect to MongoDB, you can use MongoDB Compass:

# Open MongoDB Compass.
Connect to your MongoDB instance using the MONGODB_URI from your .env file.
You can manage your database, collections, and documents within MongoDB Compass.
Project Structure
index.js: The entry point of the application where the Express server is initialized.
models/: Contains the MongoDB models defined using Mongoose.
routes/: Contains the route definitions for the API endpoints.
.env: Environment variables used by the application (not included in the repository).
.env.example: Example environment variable file.
Dependencies
This project uses the following main dependencies:

Express: A fast, unopinionated, minimalist web framework for Node.js.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
dotenv: Loads environment variables from a .env file into process.env.
Cors: Middleware to enable Cross-Origin Resource Sharing (CORS).
Nodemon: A utility that automatically restarts the server when file changes are detected.
License



