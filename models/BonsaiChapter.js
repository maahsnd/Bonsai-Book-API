const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BonsaiChapterSchema = new Schema({
  photoUrl: { type: String, maxLength: 200, required: true },
  bonsai: { type: Schema.Types.ObjectId, ref: "Bonsai", required: true },
  date: { type: Date, default: Date.now, required: true },
  caption: { type: String, maxLength: 400, required: true },
});

module.exports = mongoose.model("BonsaiChapter", BonsaiChapterSchema);
