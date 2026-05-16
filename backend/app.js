import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import userRoute from './routers/user.route.js'
import companyRoute from './routers/company.route.js'
import attendenceRoute from "./routers/attendence.route.js"
import employeeRoute from './routers/employee.route.js'
import departmentRoute from './routers/department.route.js'

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
app.use('/api/company',companyRoute)
app.use('/api/attendence',attendenceRoute)
app.use('/api/employee',employeeRoute)
app.use('/api/department', departmentRoute)