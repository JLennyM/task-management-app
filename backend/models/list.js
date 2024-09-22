const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
  // Fix the timestamps option here   
  timestamps: { createdAt: true, updatedAt: true },  // Ensures timestamps are added correctly
});

const List = mongoose.model("List", listSchema);

module.exports = List;
