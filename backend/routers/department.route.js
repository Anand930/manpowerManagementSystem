import express from 'express'
import {addDepartment, deleteDepartment, getDepartment, updateDepartment} from '../controllers/department.controller.js'
import {verifyJwt} from '../middleware/verifyJwt.js'

const router = express.Router()


router.route('/adddepartment').post(verifyJwt,addDepartment)
router.route('/getdepartment').get(verifyJwt,getDepartment)
router.route('/updatedepartment/:id').put(verifyJwt,updateDepartment)
router.route('/deletedepartment/:id').delete(verifyJwt,deleteDepartment)


export default router