// Import express framework
const express = require("express");

// Import database connection function
const dbConnection = require("./Create-Databse-Connection");

// Create express application
const app = express();

/*
========================
 FETCH DATA API
========================
*/

// GET API to fetch all students data
app.get("/Fetch-data", async (req, res) => {

  // Connect to database
  let db = await dbConnection();

  // Get "Students" collection from database
  let studentCollection = db.collection("Students");

  // Fetch all documents from Students collection
  let FetchedData = await studentCollection.find().toArray();

  // Response object sent to frontend
  let frontEndResponse = {
    status: 1,
    msg: "Data Fetched Successfully",
    FetchedData
  };

  // Send response to client
  res.send(frontEndResponse);
});

// Start server on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});