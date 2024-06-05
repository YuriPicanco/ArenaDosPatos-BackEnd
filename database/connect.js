const { connect } = require("mongoose");
const { config: dotenvConfig } = require("dotenv");

dotenvConfig();

connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDB ...");
  })
  .catch((err) => {
    console.log("Error:", err);
  });
