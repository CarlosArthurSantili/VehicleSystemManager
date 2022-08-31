import express from "express";

import {
  getEmployees,
  createEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employee.js";

const router = express.Router();

router.get("/", getEmployees);

router.post("/", createEmployee);

router.get("/:id", getEmployee);

router.delete("/:id", deleteEmployee);

router.patch("/:id", updateEmployee);

export default router;
