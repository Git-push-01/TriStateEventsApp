let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({ email: String, password: String });
module.exports = mongoose.model("post", postSchema);
