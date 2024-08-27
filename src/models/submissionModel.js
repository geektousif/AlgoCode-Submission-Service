const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User Id is required"],
  },
  problemId: {
    type: String,
    required: [true, "Problem Id is required"],
  },
  code: {
    type: String,
    required: [true, "Code is missing"],
  },
  language: {
    type: String,
    required: [true, "Language is missing"],
  },
  status: {
    type: String,
    // enum: ["Pending", "Accepted", "Wrong Answer", "Time Limit Exceeded", "Compilation Error", "Runtime Error"],
    enum: ["Pending", "Success", "WA", "TLE", "MLE", "RE"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Submission", submissionSchema);
