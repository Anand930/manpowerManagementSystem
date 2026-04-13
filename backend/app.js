import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import userRoute from './routers/user.route.js'

export const app = express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))




app.use(express.json())  
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser())




app.use('/api/user', userRoute)