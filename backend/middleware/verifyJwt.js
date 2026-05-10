import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'


const verifyJwt = async(req, res, next) =>{
    const token = req?.cookies?.accessToken || req.header('Authorization').replace("Bearer ","")
    if(!token){
        return res.status(401).json({message:"unathorized access, Token not found"})
    }

    const decode = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
    const user = User.findById(decode._id)

    if(!user){
        return res.status(401).json({message:"invalid token"})
    }
    req.user = user
    next()
}




export {verifyJwt}