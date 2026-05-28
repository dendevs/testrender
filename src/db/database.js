import { Client } from "pg";

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const initDb = async () => {
  try {
    await client.connect();
    createEnvelopeTable();
    console.log("connected to db ✅");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const createEnvelopeTable = async () => {
  const res = await client.query(
    `CREATE TABLE IF NOT EXISTS envelopes ( 
      id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
      title TEXT NOT NULL,
      amount INTEGER NOT NULL,
      at TIMESTAMPTZ DEFAULT NOW(),
      data TEXT
  )`,
    [],
  );
  return res;
};

const createEnvelope = async (title, amount, at, data) => {
  const res = await client.query(
    `INSERT INTO envelopes ( title, amount, at, data ) 
     VALUES ($1, $2, $3, $4) 
     RETURNING *`,
    [title, amount, at, data],
  );
  return res.rowCount > 0 ? res.rows[0] : null;
};

const getAllEnvelopes = async () => {
  const res = await client.query(`SELECT * FROM envelopes;`);

  console.log(res);
};

const database = {
  initDb,
  createEnvelopeTable,
  createEnvelope,
  getAllEnvelopes,
};

export default database;
