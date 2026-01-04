// Creating a Simple HTTP Server with Routing in Node.js

// Import the built-in HTTP module of Node.js
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Route for Home Page
  // If user visits: http://localhost:8000/
  if (req.url == "/") {
    // Send simple text response
    res.end("Welcome to Backend ");
  }

  // Route for News API
  // If user visits: http://localhost:8000/news
  if (req.url == "/news") {

    // Create an object containing data (API response)
    const obj = {
      status: 1, // status shows success
      data: [
        {
          name: "talha",
          age: 23,
        },
        {
          name: "yasir",
          age: 24,
        },
      ],
    };

    // Convert JavaScript object into JSON string
    // and send it as response
    res.end(JSON.stringify(obj));
  }
});

// Start the server on port 8000
server.listen(8000, () => {
  // Message shown in terminal when server starts
  console.log("Server running on port 8000");
});
