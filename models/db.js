 
const mongoose = require("mongoose");

const CONNECTION_URL = "mongodb+srv://nidhipawar:nidhipawar123@cluster0.lfsvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require("./userModel");
