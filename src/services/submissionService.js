const submissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submission) {
    const submission = this.submissionRepository.createSubmission(submission);
    if (!submission) {
      // TODO: Add proper error handling
      throw new Error("Submission failed");
    }

    const response = await submissionProducer(submission);

    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;
