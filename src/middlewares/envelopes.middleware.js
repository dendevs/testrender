function validateEnvelopeId(req, res, next) {
  const { id } = req.params;

  req.id = null;

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidRegex.test(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  req.id = id;
  next();
}

function validateEnvelopeCreate(req, res, next) {
  const { title, amount } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ error: "title is required and must be a string" });
  }

  if (amount === undefined || typeof amount !== "number") {
    return res
      .status(400)
      .json({ error: "amount is required and must be a number" });
  }

  next();
}

function validateEnvelopeUpdate(req, res, next) {
  const allowedFields = ["title", "amount"];
  const bodyKeys = Object.keys(req.body);

  const invalidFields = bodyKeys.filter((key) => !allowedFields.includes(key));

  if (invalidFields.length) {
    return res.status(400).json({
      error: `Invalid fields: ${invalidFields.join(", ")}`,
    });
  }

  next();
}

export { validateEnvelopeId, validateEnvelopeCreate, validateEnvelopeUpdate };
