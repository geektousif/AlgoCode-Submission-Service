const submissionQueue = require("../queues/submissionQueue");

module.exports = async function (payload) {
  await submissionQueue.add("SubmissionJob", payload);
  console.log("successfully added job in submission queue");
};
