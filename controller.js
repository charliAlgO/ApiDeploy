const { handleOperator } = require("./helper");

function handlePost(req, res) {
  const { x, y, operation_type } = req.body;

  console.log(req.body);

  const result = handleOperator(operation_type, x, y);
  console.log(result);

  res
    .status(200)
    .json({ result, slackUsername: "codedSamurai", operation_type });
}

module.exports = {
  handlePost,
};
