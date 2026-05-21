import { envelopeService } from "../services/envelopes.service.js";

const create = (req, res) => {
  const envelope = envelopeService.create(req.body);
  res.json(envelope);
};

const getAll = (req, res) => {
  const envelopes = envelopeService.getAll();
  res.status(200).json(envelopes);
};

const getOne = (req, res) => {
  const envelope = envelopeService.getOne(req.id);

  if (!envelope) return res.status(404).json({ error: "Envelope not found" });

  res.status(200).json(envelope);
};

const update = (req, res) => {
  const envelope = envelopeService.update(req.params.id, req.body);

  if (!envelope) return res.status(404).json({ error: "Envelope not found" });

  res.json(envelope);
};

const remove = (req, res) => {
  const envelope = envelopeService.delete(req.id);

  if (!envelope) return res.status(404).json({ error: "Envelope not found" });

  res.json(envelope);
};

const transfer = (req, res) => {
  const envelopes = envelopeService.transfert(
    req.body.from,
    req.body.to,
    req.body.amount,
  );

  if (!envelopes) return res.status(404).json({ error: "Envelope not found" });

  res.json(envelopes);
};

export const envelopeController = {
  create,
  getAll,
  getOne,
  update,
  remove,
  transfer,
};
