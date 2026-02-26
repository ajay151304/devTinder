const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

// first param is Model Name(User), 2nd param is Schema(userSchema)

/* const UserModel = mongoose.model("User", userSchema); // return object (constructor function)
// module.exports = UserModel;
*/

module.exports = mongoose.model("User", userSchema);
