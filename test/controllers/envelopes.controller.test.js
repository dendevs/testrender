import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "../../src/app.js";

describe("POST /envelopes", () => {
  test("should create an envelope", async () => {
    const res = await request(app)
      .post("/envelopes/")
      .send({
        at: new Date().toISOString(),
        title: "title test",
        amount: 12,
        data: { test: "truc" },
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(typeof res.body.id).toBe("number");
  });
});
