const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const voteSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
  party: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model("Vote", voteSchema);
