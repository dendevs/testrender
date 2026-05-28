import { assert, test, beforeAll } from "vitest";
import "dotenv/config";
import database from "../../src/db/database.js";

beforeAll(async () => {
  await database.initDb();
});

test("create envelope", async () => {
  const title = "one test";

  const amount = 12;

  const at = new Date().toISOString();

  const data = {
    test: "truc",
  };

  const envelope = await database.createEnvelope(title, amount, at, data);

  assert.isObject(envelope);
  assert.property(envelope, "id");
  assert.isNumber(envelope.id);
});
