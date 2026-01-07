// Import Express framework
const express = require("express");

// Import your database connection function
const dbConnection = require("./Create-Databse-Connection");

// Import ObjectId to work with MongoDB document IDs
const { ObjectId } = require("mongodb");

// Create an Express app
const app = express();

// Middleware to parse JSON data from request body
// Without this, req.body will be undefined
app.use(express.json());

// ================= UPDATE STUDENT DATA ROUTE =================
// This route updates a student's data by their ID
app.put("/update-data/:id", async (req, res) => {
  // Get the student ID from URL parameters
  let paramsId = req.params.id;

  // Destructure the values from request body
  // Example: req.body = { sName: "Ali", sAge: 22 }
  let { sName, sAge } = req.body;

  // Create an empty object to hold fields to update
  let obj = {};

  // Add sName to obj if it exists in the request
  if (sName) {
    obj.sName = sName;
  }

  // Add sAge to obj if it exists in the request
  // Note: for numbers, you might want to check !== undefined to allow age 0
  if (sAge) {
    obj.sAge = sAge;
  }

  // Connect to the MongoDB database
  let db = await dbConnection();

  // Get the "Students" collection
  let studentCollection = db.collection("Students");

  // Update the student document by ID
  // $set updates only the fields present in obj
  let updateData = await studentCollection.updateOne(
    { _id: new ObjectId(paramsId) }, // Filter: find document by ID
    { $set: obj }                    // Update: set only the fields in obj
  );

  // Prepare the response to send back to frontend
  let frontEndResponse = {
    status: 1,
    msg: "Data Update Successfully",
    updateData, // contains info about how many documents were modified
  };

  // Send response to frontend
  res.send(frontEndResponse);
});

// Start the server on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
