const express = require("express");
const app = express();

// app.use("/route", rH1, rH2, [rH3, rH4], rH5);

app.use(
  "/user",
  (req, res, next) => {
    // route handler 1
    // The above function is known as route handler
    console.log("Response 1");
    next();
    // res.send("Handling the route user 1");
  },
  (req, res, next) => {
    // route handler 2
    console.log("Response 2");
    // res.send("Handling the route user 2");
    next();
  },
  (req, res, next) => {
    // route handler 2
    console.log("Response 3");
    // res.send("Handling the route user 3");
    next();
  },
  (req, res, next) => {
    // route handler 2
    console.log("Response 4");
    res.send("Handling the route user 4");
    // next();
  },
);

const port = 3000;
app.listen(port, () => {
  console.log("Server started successfully");
});
