const express = require("express");
const dbConnection = require("./config/database");
const enquiryRoutes = require("./routes/enquiryRoute");
require("dotenv").config();

const app = express();

app.use(express.json());


app.use("/api-web",enquiryRoutes)


dbConnection().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server run on ${process.env.PORT} port successfully`);
  });
});
