const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  PrnNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  Name: {
    type: String,
  },
  Class: {
    type: String,
  },
  City: {
    type: String,
  },
  Profile_Photo: {
    type: String,
  },
  PhoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports=Student