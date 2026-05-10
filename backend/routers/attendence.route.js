import express from "express";
import { markAttendence,getAttendenceSummary,getEmployeeAttendence,updateAttendence,deleteAttendence } from "../controllers/attendence.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.js";

const router = express.Router()


router.route('/markattendence').post(verifyJwt,markAttendence)
router.route('/getemployeeattendence').get(verifyJwt,getEmployeeAttendence)
router.route('/getattendencesummary').get(verifyJwt,getAttendenceSummary)
router.route('/updateattendence').post(verifyJwt,updateAttendence)
router.route('/deleteattendence').post(verifyJwt,deleteAttendence)

export default router


