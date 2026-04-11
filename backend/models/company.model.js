import mongoose, { model, Schema } from "mongoose";

const companySchema = new Schema({
    name:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        maxlength:[10,"phone should be the maximum 10 digit"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email should be the unique"]
    },
    state:{
        type:String,
        required:[true, "city is required"],
    },
    companyCode:{
        type:String,
        required:[true, "company code is required"],
        unique:[true,"company code should be unique"]
    },
    gstNumber:{
        type:String,
        required:true,
        unique:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

export const Company = model('Company',companySchema)