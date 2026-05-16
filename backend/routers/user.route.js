import express from 'express'
import { loginUser, logOutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js'
import { upload } from '../middleware/multer.middleware.js'

const router = express.Router()


router.route('/register').post(upload.fields([{name:"profileImage",maxCount:1}]),registerUser)
router.route('/login').post(loginUser)
router.route('/refreshToken').post(refreshAccessToken)
router.route('/logout').get(refreshAccessToken,logOutUser)





export default router


