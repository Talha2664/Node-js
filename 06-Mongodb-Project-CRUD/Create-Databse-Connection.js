// Import MongoClient class from mongodb package
// MongoClient is used to connect Node.js with MongoDB
const { MongoClient } = require("mongodb");

// MongoDB server address
// 127.0.0.1 means localhost (your own computer)
// 27017 is the default MongoDB port
const url = "mongodb://127.0.0.1:27017";

// Create a new MongoDB client using the connection URL
// At this stage, MongoDB is NOT connected yet
const client = new MongoClient(url);

// Async function to connect with MongoDB
// async is used because database connection takes time
const dbConnection = async () => {
  // Connect to MongoDB server
  // await waits until the connection is successful
  await client.connect();
  // Select (or create) the MongoDB database named "university"
  const db = client.db("university");
  return db;
};

// Export the connection function so it can be used in other files
module.exports = dbConnection;
