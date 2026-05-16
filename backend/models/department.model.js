import mongoose, { model } from "mongoose";

const departmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"department name is required"]
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },
    HeadOfDepartment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    isActive:{
        type:Boolean,
        default:true
    }

},{timestamps:true})


export const Department = model('Department', departmentSchema)