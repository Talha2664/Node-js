// Import express framework
const express = require("express");

// Import checktoken middleware from CheckToken.js file
const { checktoken } = require("./CheckToken.js");

// Create express app
const app = express();

// Route with middleware
// checktoken will run BEFORE this route function
app.get("/news", checktoken, (req, res) => {

  // Send response if token is valid
  res.send({
    status: 1,
    name: "Talha",
    Greet: "Welcome to news Page",
    news: "The boy has jumped from the 4th floor of UOL university due to teacher pressure.",
  });
});

// Start server on port 8000
app.listen(8000, () => {
  console.log("Server Run Successfully");
});
