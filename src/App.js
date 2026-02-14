const express = require("express");

const app = express();

// Request Handler
app.use("/world", (req, res) => {
  res.send("Namaste from Dashboard");
});
app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});
app.use("/test", (req, res) => {
  res.send("Hello World from server");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server successfully listening on port ${port}`);
});
