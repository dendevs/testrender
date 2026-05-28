import "dotenv/config";
import express from "express";
import database from "./db/database.js";
import { swaggerDocs } from "./configs/swagger.js";
import envelopeRouter from "./routes/envelopes.route.js";

database.initDb();

const app = express();

app.use(express.json());

swaggerDocs(app);

app.use("/envelopes", envelopeRouter);

export default app;
