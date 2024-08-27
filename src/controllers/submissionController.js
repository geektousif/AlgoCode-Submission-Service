async function pingRequest(req, res) {
  const responnse = await this.submissionService.pingCheck();
  return res.send({ data: responnse });
}

// TODO: Add validation layer
async function createSubmission(req, res) {
  const responnse = await this.submissionService.addSubmission(req.body);
  return res
    .status(201)
    .json({
      error: {},
      data: responnse,
      success: true,
      message: "Submission created successfully",
    });
}

module.exports = { pingRequest, createSubmission };
