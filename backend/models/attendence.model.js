import mongoose, { model, Schema } from "mongoose";

const attendenceSchema = new Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee',
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:["present", "absent","half-day","leave"]
    },
    overTime:{
        type:Number,
        default:0
    }
})


export const Attendence = model('Attendence',attendenceSchema)