const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false
  }
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
