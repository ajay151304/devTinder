const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const port = 7777;

// Create an API to insert data into database
app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sharvan",
    lastName: "Prakash",
    emailId: "sharvan25@gmail.com",
    password: "sharvan123",
  };
  // Creating a new instance of the User Model
  const user = new User(userObj);

  try {
    // user.save() the data into Database
    await user.save(); // return a Promisfe
    console.log("User Added Successfully");
    res.end("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

//
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
    console.error(err.message);
  });
