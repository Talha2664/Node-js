// Import express framework
const express = require("express");

// Import database connection function
const dbConnection = require("./Create-Databse-Connection");

// Create express application
const app = express();

// Middleware to read JSON data sent from frontend
app.use(express.json());

/*
========================
 INSERT DATA API
========================
*/

// POST API to insert student data into database
app.post("/insert-data", async (req, res) => {

  // Connect to database
  let db = await dbConnection();

  // Get "Students" collection from database
  let studentCollection = db.collection("Students");

  // Read student name and age from request body
  let { sName, sAge } = req.body;

  // Create object to store in database
  let obj = { sName, sAge };

  // Insert data into Students collection
  let insertData = await studentCollection.insertOne(obj);

  // Response object sent to frontend
  let frontEndResponse = {
    status: 1,
    msg: "Data insert Successfully",
    insertData
  };

  // Send response to client
  res.send(frontEndResponse);
});

// Start server on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
