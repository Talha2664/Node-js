// Import Express framework
const express = require("express");

// Create Express application
const app = express();

// Built-in middleware
// Allows server to read JSON data from request body (POST/PUT)
app.use(express.json());

// Dummy token stored on server (for understanding purpose)
let Token = "12345";

// =========================
// Custom Middleware 1 =>(Token Check)
// This middleware runs BEFORE every route
// =========================
app.use((req, res, next) => {
  // Check if Token is missing or empty in query
  // Example URL: http://localhost:8000/news?Token=12345
  if (req.query.Token == "" || req.query.Token == undefined) {
    // If token is not provided, stop request here
    return res.send({
      status: 0,
      msg: "Fill the Token",
    });
  }

  // If token exists, move to next middleware / route
  next();
});

// =========================
// Custom Middleware 2 =>(Password Check)
// This middleware runs BEFORE every route
// =========================
let Password = "12345";
app.use((req, res, next) => {
  if (req.query.pass == "" || req.query.pass == undefined) {
    return res.send({
      status: 0,
      msg: "Fill the Password",
    });
  }
  if (req.query.pass !== Password) {
    return res.send({
      status: 0,
      msg: "Fill the Correct Password",
    });
  }
  next();
});

// =========================
// GET /news Route
// Accessible only if Token is provided
// =========================
app.get("/news", (req, res) => {
  res.send({
    status: 1,
    message: "News Page Data Accessed",
  });
});

// =========================
// Start Server on Port 8000
// =========================
app.listen(8000, () => {
  console.log("Server 8000 Run Successfully");
});

// We can make multiple middleware at a time
