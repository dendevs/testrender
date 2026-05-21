import express from "express";
const router = express.Router();

import { envelopeController } from "../controllers/envelopes.controller.js";
import {
  validateEnvelopeId,
  validateEnvelopeCreate,
  validateEnvelopeUpdate,
} from "../middlewares/envelopes.middleware.js";

router.post("/", validateEnvelopeCreate, envelopeController.create);
router.get("/", envelopeController.getAll);
router.get("/:id", validateEnvelopeId, envelopeController.getOne);
router.put(
  "/:id",
  validateEnvelopeId,
  validateEnvelopeUpdate,
  envelopeController.update,
);
router.delete("/:id", validateEnvelopeId, envelopeController.remove);
router.post("/transfers", envelopeController.transfer);

export default router;
