import express from "express";

import { abastecer } from "../controllers/vehicle.js";

const router = express.Router();

router.post("/", abastecer);

export default router;
