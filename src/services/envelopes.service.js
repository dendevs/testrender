import database from "../db/database.js";

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
const create = async ({ title, amount, at, data }) => {
  const envelope = await database.createEnvelope(title, amount, at, data);
  return envelope;
};

const getAll = () => {
  envelopes = database.getAllEnvelopes();
  console.log(envelopes);
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

// TODO export default
export const envelopeService = {
  create,
  getAll,
  getOne,
  update,
  remove,
  transfer,
};
