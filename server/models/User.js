const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
// const Order = require("./Order");

const userSchema = new Schema({
  companyName: {
    type: String,
    trim: true,

    unique: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  // orders: [Order.schema],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// SET UP PRE-SAVE MIDDLEWARE TO CREATE PASSWORD
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// COMPARE THE INCOMING PASSWORD WITH THE HASHED PASSWORD
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
