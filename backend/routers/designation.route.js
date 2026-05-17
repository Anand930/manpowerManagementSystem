import express from "express";
import {
  addDesignation,
  changeDesignationStatus,
  deleteDesignation,
  getDesignation,
} from "../controllers/designation.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.js";

const router = express.Router();

router.route("/adddesignation").post(verifyJwt, addDesignation);
router.route("/getdesignation").get(verifyJwt, getDesignation);
router.route("/deletedesignation/:id").delete(verifyJwt, deleteDesignation);
router
  .route("/changedesignationstatus/:id")
  .put(verifyJwt, changeDesignationStatus);

export default router;
