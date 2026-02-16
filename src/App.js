const express = require("express");

const app = express();

// Request Handler
// app.use("/world", (req, res) => {
//   res.send("Namaste from Dashboard");
// });
// app.use("/hello", (req, res) => {
//   res.send("Hello hello hello");
// });
// app.use("/test", (req, res) => {
//   res.send("Hello World from server");
// });

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Ajay", lastName: "Prakash" });
});

app.post("/user", (req, res) => {
  // Saving  Data to the Database
  res.send("Data successfully saved to the database");
});

// This will match all the HTTP methods API Calls to /test
app.use("/test", (req, res) => {
  res.send("Namaste Ajay");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server successfully listening on port ${port}`);
});
