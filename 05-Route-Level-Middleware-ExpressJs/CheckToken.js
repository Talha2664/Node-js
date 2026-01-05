// Store the correct token value
let token = "12345";

// Middleware function to check token
const checktoken = (req, res, next) => {

  // Check if token is missing or empty in query
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "Please Fill the Token",
    });
  }

  // Check if token value is incorrect
  if (req.query.token !== token) {
    return res.send({
      status: 0,
      msg: "Please Enter the correct Token",
    });
  }

  // If token is correct, move to next function (route)
  next();
};

// Export middleware so it can be used in other files
module.exports = { checktoken };
