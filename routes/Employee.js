import express, { Router } from "express";
import { store_employee, getEmployee, deleteEmployee, updateEmployee, findEmployee } from "../controller/Employee.js";
const router = express.Router();

router.post("/createEmployee", store_employee);
router.get("/getEmployee", getEmployee);
router.get("/getEmployee/:id", findEmployee);
router.delete("/deleteEmployee/:id", deleteEmployee);
router.put("/updateEmployee/:id", updateEmployee);
export default router;