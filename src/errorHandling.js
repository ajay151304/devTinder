const express = require("express");
const app = express();

app.get("/getUserData", (req, res) => {
  // Logic of DB call and get data
  throw new Error("sisisi");
  res.send("User Sata Sent");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("something went wrong");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
