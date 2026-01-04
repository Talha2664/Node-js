// Import Express module
const express = require("express");

// Create an Express app
const app = express();

// =========================
// 1.Home Route
// Route: GET /
// Purpose: Show welcome message for home page
// =========================
app.get("/", (req, res) => {
  res.send({ status: 1, message: "Welcome to Express Home Page" });
});

// =========================
// 2.News Route
// Route: GET /news
// Purpose: Show welcome message for news page
// =========================
app.get("/news", (req, res) => {
  res.send({ status: 1, message: "Welcome to Express News Page" });
});

// =========================
// 3.Query Parameters
// Route: GET /search?brand=xyz&size=xl
// Purpose: Read query parameters from URL
// Example URL: /search?brand=adidas&size=xl
// Access: req.query.brand, req.query.size
// =========================
app.get("/search", (req, res) => {
  res.send(
    `You search for ${req.query.brand} and the size is ${req.query.size}`
  );
});

// =========================
// 4.Dynamic Route
// Route: GET /products/:id
// Purpose: Read dynamic value from URL path
// Example URL: /products/5
// Access: req.params.id
// =========================
app.get("/products/:id", (req, res) => {
  res.send(`You search for product no ${req.params.id} and its found`);
});

// =========================
// 5.Start the Server
// Listen on port 8000
// =========================
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
