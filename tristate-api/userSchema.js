let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({ email: String, password: String });
const User = mongoose.model("post", UserSchema);
module.exports = User;
