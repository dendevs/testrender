import { randomUUID } from "crypto";

let envelopes = [];

/* Utils */
const _envelopeIdExist = (envelopeId) => {
  const exist = envelopes.find((env) => env.id == envelopeId);
  return exist === -1 ? false : true;
};

const _getEnvelopeById = (envelopeId) => {
  let envelope = null;

  if (_envelopeIdExist(envelopeId))
    envelope = envelopes.find((env) => env.id == envelopeId);

  return envelope;
};

const _getEnvelopeIndexById = (envelopeId) => {
  let index = null;

  if (_envelopeIdExist(envelopeId))
    index = envelopes.findIndex((env) => env.id == envelopeId);

  return index;
};

/* Api */
const create = (data) => {
  const envelope = {
    id: randomUUID(),
    at: Date.now(),
    ...data,
  };

  envelopes.push(envelope);
  return envelope;
};

const getAll = () => {
  return envelopes;
};

const getOne = (envelopeId) => {
  return _getEnvelopeById(envelopeId);
};

const update = (envelopeId, data) => {
  let envelope = null;

  if (_envelopeIdExist(envelopeId)) {
    const index = _getEnvelopeIndexById(envelopeId);
    envelopes[index] = { ...envelopes[index], ...data };

    envelope = envelopes[index];
  }

  return envelope;
};

const remove = (envelopeId) => {
  let envelope = null;

  if (_envelopeIdExist(envelopeId)) {
    const index = _getEnvelopeIndexById(envelopeId);
    envelope = envelopes[index];

    envelopes = envelopes.filter(
      (envelopeItem) => envelopeItem.id != envelopeId,
    );
  }

  return envelope;
};

const transfer = (from, to, amout) => {
  let envelopes = [];

  //envelopes.push(
};

export const envelopeService = {
  create,
  getAll,
  getOne,
  update,
  remove,
  transfer,
};
