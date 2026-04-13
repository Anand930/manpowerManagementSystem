import express from 'express'
import { addCompany } from '../controllers/company.controller.js'


const router = express.Router()

router.route('/addcompany').post(addCompany)


export default router