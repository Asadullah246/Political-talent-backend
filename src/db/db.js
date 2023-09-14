const mongoose = require("mongoose");
const dbURL=process.env.DATABASE_URL 
if (!dbURL) {
    console.error("Mongo URL not set in env file");
    return new Error("Mongo URL not set in env file");
  }

mongoose.connect(
    dbURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    },
    (error) => {
      if (error) {
        console.error(`FAILED to connect using mongoose. ${error}`);
      } else {
        console.info("Connected to DB server");
      }
    }
  );

  module.exports = mongoose;
