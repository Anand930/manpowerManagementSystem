import express from 'express'
import { addCompany, deleteCompany, getAllCompanies, getSingleCompany, updateCompany } from '../controllers/company.controller.js'


const router = express.Router()

router.route('/addcompany').post(addCompany)
router.route('/getallcompany').get(getAllCompanies)
router.route('/getsinglecompany/:id').get(getSingleCompany)
router.route('/updatecompany/:id').patch(updateCompany)
router.route('/deletecompany/:id').delete(deleteCompany)

export default router