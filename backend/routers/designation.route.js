import express from 'express'
import { addDesignation, changeDesignationStatus, deleteDesignation, getDesignation } from '../controllers/designation.controller.js'

const router = express.Router()



router.route('/adddesignation').post(addDesignation)
router.route('/getdesignation').get(getDesignation)
router.route('/deletedesignation/:id').delete(deleteDesignation)
router.route('/changedesignationstatus/:id').put(changeDesignationStatus)



export default router