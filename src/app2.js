const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.use("/user", userAuth, (req, res, next) => {
  res.send("USer Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted Successfully");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
