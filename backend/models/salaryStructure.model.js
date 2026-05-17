import mongoose, { model, Schema } from "mongoose";

const salaryStructureSchema = new Schema(
  {
    name:{
      type:String,
      required:true,
      unique:true
    },
    basicSalary: {
      type: Number,
      required: true,
    },

    overtimeAllowed: {
      type: Boolean,
      default: true,
    },

    overtimeRate: { 
      type: Number, 
      default: 0 
    },

    allowances: {
      hra: {
        type: Number,
        default: 0,
      },
      others: {
        type: Number,
        default: 0,
      },
    },

    epfDeduction: {
      type: Number,
      required: true,
    },
    esiDeduction: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    attendenceBonus: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const SalaryStructure = model("SalaryStructure", salaryStructureSchema);
