import mongoose, { model, Schema } from "mongoose";

const employeeSchema = new Schema({
    fullname:{
        type:String,
        trim:true,
        required:[true,"fullname is required"]
    },
    employeeId:{
        type:String,
        required:[true,"employee Id is required"],
        unique:[true,"employeeId should be unique"]
    },
    phone:{
        type:String,
        required:true,
        minlength:[10,"phone no. should be of 10 digits"]
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true
    },
    address:{
        type:String,
        minlength:[3, "Address length should be of minimum 3 digit"],
        maxlength:[50, "Address should be of maximum length 50"]
    },
    joiningDate:{
        type:Date,
        required:true
    },
    employmentType:{
        type:String,
        enum:['full-time', 'part-time', 'contract'],
        default:'full-time'
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department',
        required:[true, "department name is required"]
    },
    designation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Designation',
        required:[true,"Desination is required"]
    },
    salaryStructure:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SalaryStructure',
        // required:true
    },
    bankDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'BankDetails',
        // required:true
    },
    documents:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Documents',
        // required:true
    },
    overtimeAllowed:{
        type:Boolean,
        default:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})


export const Employee = model('Employee', employeeSchema)