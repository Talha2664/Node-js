// Import Express framework
const express = require("express");

// Import your database connection function
const dbConnection = require("./Create-Databse-Connection");

// Import ObjectId to work with MongoDB document IDs
const { ObjectId } = require("mongodb");

// Create an Express app
const app = express();

// ================= DELETE STUDENT DATA ROUTE =================
// This route deletes a student document by its ID
app.delete("/delete-data/:id", async (req, res) => {
  // Get the student ID from URL parameters
  // Example: /delete-data/12345 → paramsId = "12345"
  let paramsId = req.params.id;

  // Connect to the MongoDB database
  let db = await dbConnection();

  // Get the "Students" collection
  let studentCollection = db.collection("Students");

  // Delete the document that matches the given _id
  let deleteData = await studentCollection.deleteOne({
    _id: new ObjectId(paramsId), // Convert string ID to MongoDB ObjectId
  });

  // Prepare response to send back to frontend
  let frontEndResponse = {
    status: 1,                  // Custom status to indicate success
    msg: "Data Delete Successfully", // Message for frontend
    deleteData,                 // Contains info about deletion result
  };

  // Send response back to frontend
  res.send(frontEndResponse);
});

// Start the server on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
