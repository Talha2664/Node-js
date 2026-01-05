// Read TOKEN value from environment variables
let token = process.env.TOKEN;

// Middleware function to check token
const checktoken = (req, res, next) => {

  // Check if token is missing or empty in query string
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "Please Fill the Token",
    });
  }

  // Check if the provided token does not match the correct token
  if (req.query.token !== token) {
    return res.send({
      status: 0,
      msg: "Please Enter the correct Token",
    });
  }

  // Token is valid → allow request to go to route
  next();
};

// Export middleware so it can be used in other files
module.exports = { checktoken };
