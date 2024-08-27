const Submission = require("../models/submissionModel");

const submissionRepository = {
  constructor() {
    this.submissionModel = Submission;
  },

  async createSubmission(submission) {
    const response = await this.submissionModel.create(submission);

    return response;
  },
};

module.exports = submissionRepository;
