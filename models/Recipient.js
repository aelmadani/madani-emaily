const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// Because its a Subdocument collection:
module.exports = recipientSchema;
//mongoose.model("recipients", recipientSchema);
