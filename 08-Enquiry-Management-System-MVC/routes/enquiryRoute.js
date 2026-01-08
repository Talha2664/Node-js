const express = require("express");
const { insertEnquiry } = require("../controllers/enquiryController");

const enquiryRoutes = express.Router();

enquiryRoutes.post("/insert-enquiry",insertEnquiry)


module.exports = enquiryRoutes