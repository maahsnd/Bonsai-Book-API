const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BonsaiSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  bonsaiChapters: [
    { type: Schema.Types.ObjectId, ref: "BonsaiChapter", required: true },
  ],
  hardiness_zone: { type: String, maxLength: 200, required: true },
  height: { type: String, maxLength: 200, required: true },
  width: { type: String, maxLength: 200, required: true },
  nebari: { type: String, maxLength: 200, required: true },
  style: { type: String, maxLength: 200, required: true },
  species: { type: String, maxLength: 200, required: true },
});

module.exports = mongoose.model("BonsaiChapter", BonsaiSchema);
