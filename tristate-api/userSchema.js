let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
