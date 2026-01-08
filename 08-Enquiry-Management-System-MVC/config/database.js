const mongoose = require("mongoose");

const dbConnection = () => {
  return mongoose.connect(process.env.DBURL)
    .then(() => {
      console.log("DB Connected Succesfully");
    })
    .catch((err) => {
      console.log("DB Connection Failed", err);
    });
};

module.exports = dbConnection;
