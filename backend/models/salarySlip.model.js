import mongoose, { model, Schema } from "mongoose";

const salarySlipSchema = new Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee',
        required:[true, "employee name is required"]
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:[true,"company name is required"]
    },
    month:{
        type:String,
        required:[true, "salary slip's month is required"]
    },
    year:{
        type:String,
        required:[true,"salary slip year is required"]
    },
    salary:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SalaryStructure'
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})


export const SalarySlip = model('SalarySlip',salarySlipSchema)