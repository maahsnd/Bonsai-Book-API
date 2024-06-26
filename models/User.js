const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  profilePhoto: { type: String, maxLength: 200 },
  bio: { type: String, maxLength: 400 },
  bonsai: [{ type: Schema.Types.ObjectId, ref: "Bonsai", required: true }],
});

module.exports = mongoose.model("User", UserSchema);
