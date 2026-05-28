import { assert, test, beforeAll } from "vitest";
import "dotenv/config";
import database from "../../src/db/database";
import { envelopeService } from "../../src/services/envelopes.service";

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

  const envelope = await envelopeService.create({ title, amount, at, data });

  assert.isObject(envelope);
  assert.property(envelope, "id");
  assert.isNumber(envelope.id);
});
