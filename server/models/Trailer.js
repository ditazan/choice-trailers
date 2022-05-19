const mongoose = require("mongoose");

const { Schema } = mongoose;

const trailerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  idNum: {
    type: String,
    required: false,
  },
  description: {
    type: String,
  },
  filter: [
    {
      type: Schema.Type.ObjectId,
      ref: "Fitler",
      required: true,
    },
  ],
  image: {
    type: String,
  },
});

const Trailer = mongoose.model("Traiiler", trailerSchema);

module.exports = Trailer;
