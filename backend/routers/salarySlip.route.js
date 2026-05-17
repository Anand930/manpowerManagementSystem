import express from "express";
import {
  addSalarySlip,
  getAllSalarySlip,
  getSalarySlipById,
  updateSalarySlip,
  deleteSalarySlip,
} from "../controllers/salarysSlip.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.js";

const router = express.Router();

router.route("/addsalaryslip").post(verifyJwt, addSalarySlip);
router.route("/getallsalaryslip").get(verifyJwt, getAllSalarySlip);
router.route("/getsalaryslip/:id").get(verifyJwt, getSalarySlipById);
router.route("/updatesalaryslip/:id").put(verifyJwt, updateSalarySlip);
router.route("/deletesalaryslip/:id").delete(verifyJwt, deleteSalarySlip);

export default router;
