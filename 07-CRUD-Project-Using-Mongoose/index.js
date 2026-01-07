// ==================== IMPORTS ====================
const express = require("express");             // Express framework for Node.js
const mongoose = require("mongoose");           // Mongoose library to work with MongoDB
const enquiryModel = require("./models/Enquiry-Model"); // Mongoose model for enquiries
require("dotenv").config();                     // Load environment variables from .env file

// ==================== APP INITIALIZATION ====================
const app = express();

// Middleware to parse JSON body from incoming requests
app.use(express.json());

// ==================== POST: Insert a New Enquiry ====================
app.post("/insert-enquiry", async (req, res) => {
  // Get data sent by user from request body
  let { name, email, phoneno, message } = req.body;

  // Create a new document (in-memory object) using the model
  let insertEnquiry = new enquiryModel({
    name,
    email,
    phoneno,
    message,
  });

  // Save the document to MongoDB (async operation)
  let SavedEnquiry = await insertEnquiry.save();

  // Send response back to frontend
  res.send({
    status: 1,
    message: "Data inserted Successfully",
    SavedEnquiry, // Saved document with _id
  });
});

// ==================== PUT: Update an Existing Enquiry ====================
app.put("/update-enquiry/:id", async (req, res) => {
  // Get the id of the enquiry from URL
  let paramsId = req.params.id;

  // Get updated data from request body
  let { name, email, phoneno, message } = req.body;

  // Create an object with updated fields
  let updateObj = {
    name,
    email,
    phoneno,
    message,
  };

  // Update the document in MongoDB
  // ❗ Important: Using $set is recommended to avoid replacing the whole document
  let updatEnquiry = await enquiryModel.updateOne(
    { _id: paramsId }, 
    { $set: updateObj } // <-- Use $set to only update these fields
  );

  // Send response back to frontend
  res.send({
    status: 1,
    message: "Data updated Successfully",
    updatEnquiry, // Result of update operation
  });
});

// ==================== GET: Fetch All Enquiries ====================
app.get("/find-enquiry", async (req, res) => {
  // Fetch all documents from enquiry collection
  let findEnquiry = await enquiryModel.find();

  // Send response to frontend
  res.send({
    status: 1,
    message: "Data Fetched Successfully",
    findEnquiry, // Array of all enquiries
  });
});

// ==================== DELETE: Delete an Enquiry ====================
app.delete("/delete-enquiry/:id", async (req, res) => {
  // Get the id of the enquiry to delete from URL
  let paramsId = req.params.id;

  // Delete document with the given _id
  let deleteEnquiry = await enquiryModel.deleteOne({ _id: paramsId });

  // Send response back to frontend
  res.send({
    status: 1,
    message: "Data Deleted Successfully",
    deleteEnquiry, // Result of delete operation
  });
});

// ==================== DATABASE CONNECTION & SERVER START ====================
mongoose.connect(process.env.DBURL) // Connect to MongoDB using URL in .env
  .then(() => {
    console.log("DB Connected Successfully");

    // Start Express server after DB connection
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT} port`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });
