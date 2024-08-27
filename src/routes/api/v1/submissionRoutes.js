const {
  createSubmission,
} = require("../../../controllers/submissionController");

async function submissionRoutes(fastify, options) {
  fastify.post("/", createSubmission);
}

module.exports = submissionRoutes;

// roll - name - subj_mark (num, grade) - total
