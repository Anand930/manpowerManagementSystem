import mongoose, {  model, Schema } from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";



const userSchema = new Schema({
    fullname:{
        type:String,
        required:[true,"fullname is required"],
        minlength:[3, "fullname must be of minimum 3 characters"],
        maxlength:[50, "fullname should not be of the more than 50 digits"]
    },
    username:{
        type:String,
        required:true,
        unique:[true,"username should be unique for every user"]
    },
    profileImage:{
        type:String,
        required:[true,"profile Image is required"]
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:[true, "email should be unique"]
    },
    password:{
        type:String,
        required:[true, "password is required"],
        minlength:[8, "password should be of the minimum 8 characters"]
    },
    phone:{
        type:String,
        required:[true, "phone no. is required"],
        unique:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isVerified:{
        type:Boolean,
        default:false        
    }
},{timestamps:true})


userSchema.pre("save", async function(){
    if(!this.isModified('password')) return 
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        id:this._id,
        email:this.email,
        username:this.username
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY} )
}


userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        id:this._id,
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY} )
}

export const User =  model('User',userSchema)