import express from 'express'
import { addEmployee, deleteEmployee, getEmployees, getSingleEmployee, searchEmployee, updateEmployee } from '../controllers/employee.controller.js'
import { verifyJwt } from '../middleware/verifyJwt.js'

const router = express.Router()

router.route('/addemployee').post(verifyJwt,addEmployee)
router.route('/getallemployees').get(verifyJwt,getEmployees)
router.route('/getsingleemployee/:id').get(verifyJwt,getSingleEmployee)
router.route('/updateemployee/:id').put(verifyJwt,updateEmployee)
router.route('/deleteemployee/:id').delete(verifyJwt,deleteEmployee)
router.route('/searchemployee').post(verifyJwt,searchEmployee)

export default router