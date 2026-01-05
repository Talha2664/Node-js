// Import express framework
const express = require("express");

// Load environment variables from .env file
require("dotenv").config();

// Import checktoken middleware from another file
const { checktoken } = require("./2-CheckToken.js");

// Create express application
const app = express();

// Define a route with middleware
// checktoken will execute FIRST before the route logic
app.get("/news", checktoken, (req, res) => {

  // This response is sent ONLY if token is valid
  res.send({
    status: 1,
    name: "Talha",
    Greet: "Welcome to news Page",
    news: "The boy has jumped from the 4th floor of UOL university due to teacher pressure.",
  });
});

// Get PORT value from environment variables
// If PORT is not defined, use 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server Run Successfully on ${PORT} port`);
});
