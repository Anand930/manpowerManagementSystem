import express from "express";
import {
  addSalaryStructure,
  deleteSalaryStructure,
  getAllSalaryStructure,
  getSalaryStructureById,
  updateSalaryStructure,
} from "../controllers/salaryStructure.controller";
import { verifyJwt } from "../middleware/verifyJwt";

const router = express.Router();

router.route("/addsalarystructure").post(verifyJwt, addSalaryStructure);
router.route("/getallsalarystructure").get(verifyJwt, getAllSalaryStructure);
router
  .route("/getsalarystructurebyid/:id")
  .get(verifyJwt, getSalaryStructureById);
router.route("/updatesalarystructure").put(verifyJwt, updateSalaryStructure);
router.route("/deletesalarystructure").delete(verifyJwt, deleteSalaryStructure);
