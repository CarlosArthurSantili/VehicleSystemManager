import express from "express";

import {
  getCompra,
  getCompras,
  comprarCombustivel,
} from "../controllers/compraCombustivel.js";

const router = express.Router();

router.get("/:id", getCompra);

router.get("/", getCompras);

router.patch("/:id", comprarCombustivel);

export default router;
