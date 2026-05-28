import express from "express";
const router = express.Router();

import { envelopeController } from "../controllers/envelopes.controller.js";
import {
  validateEnvelopeId,
  validateEnvelopeCreate,
  validateEnvelopeUpdate,
} from "../middlewares/envelopes.middleware.js";

/**
 * @openapi
 * /envelopes:
 *   post:
 *     summary: Create an envelope
 *     tags:
 *       - Envelopes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - at
 *               - data
 *             properties:
 *               at:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-05-28T10:00:00.000Z"
 *               data:
 *                 type: object
 *                 example:
 *                   test: "truc"
 *     responses:
 *       200:
 *         description: Envelope created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Invalid input
 */
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
