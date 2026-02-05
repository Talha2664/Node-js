// Import Express
const express = require("express");

// Create an Express app
const app = express();

// Middleware to parse JSON body
// This is required to read JSON sent in POST requests
app.use(express.json());

// =========================
// POST /login route
// Purpose: Accept username & password from JSON body
// Example body (JSON):
// {
//   "username": "talha",
//   "password": "talha123"
// }
// =========================
app.post("/login", (req, res) => {
  // Read username and password from req.body
  const userName = "talha123";
  const pass = "123";
  const { username, password } = req.body;

  // Send a simple response message
  if (username === userName && password === pass) {
    res.send("Login successful");
  } else {
    res.send("Invalid username or password");
  }
});

// =========================
// Start the server
// Listen on port 8000
// =========================
app.listen(8000, () => console.log("Server running on port 8000"));
