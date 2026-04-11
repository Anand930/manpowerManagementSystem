import mongoose, { model, Schema } from "mongoose";


const salaryStructureSchema = new Schema({
    basicSalary:{
        type:Number,
        required:true
    },
    overtimeRate:Number,
    hra:{
        type:Number,
        required:true
    },
    epfDeduction:{
        type:Number,
        required:true
    },
    esiDeduction:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    }
    
},{timestamps:true})



export const SalaryStructure = model('SalaryStructure', salaryStructureSchema)