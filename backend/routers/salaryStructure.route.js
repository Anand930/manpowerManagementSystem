import express from "express";
import {
  addSalaryStructure,
  deleteSalaryStructure,
  getAllSalaryStructure,
  getSalaryStructureById,
  updateSalaryStructure,
} from "../controllers/salaryStructure.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.js";

const router = express.Router();

router.route("/addsalarystructure").post(verifyJwt, addSalaryStructure);
router.route("/getallsalarystructure").get(verifyJwt, getAllSalaryStructure);
router
  .route("/getsalarystructurebyid/:id")
  .get(verifyJwt, getSalaryStructureById);
router.route("/updatesalarystructure/:id").put(verifyJwt, updateSalaryStructure);
router.route("/deletesalarystructure/:id").delete(verifyJwt, deleteSalaryStructure);

export default router
