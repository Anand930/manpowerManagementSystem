import mongoose, { model, Schema } from "mongoose";

const designationSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    description:{
        type:String
    },
    isActive:{
      type:Boolean,
      default:false
    }
})


export const Designation = model('Designation', designationSchema)