const mongoose = require("mongoose");

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:cluster_namaste_node@namastenode.9ictrgl.mongodb.net/devTinder" /* will to only helloWorld Database */,
    { family: 4 },
  ); // return Promise > successfully or unsuccessfull
};

// mongoose.connect(
//   "mongodb+srv://namastedev:Pw7r94hEr4bR4f7D@namastenodejs.6mfego4.mongodb.net/",
// ); // return Promise > successfully or unsuccessfull

module.exports = connectDB;
