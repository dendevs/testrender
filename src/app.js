import express from "express";
import envelopeRouter from "./routes/envelopes.route.js";

const app = express();

app.use(express.json());

app.use("/envelopes", envelopeRouter);

export default app;
