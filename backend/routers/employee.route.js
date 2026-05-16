import express from 'express'
import { addEmployee, deleteEmployee, getEmployees, getSingleEmployee, searchEmployee, updateEmployee } from '../controllers/employee.controller.js'

const router = express.Router()

router.route('/addemployee').post(addEmployee)
router.route('/getemployees').get(getEmployees)
router.route('/getsingleemployee').get(getSingleEmployee)
router.route('/updateemployee').put(updateEmployee)
router.route('/deleteemployee').delete(deleteEmployee)
router.route('/searchemployee').post(searchEmployee)

export default router