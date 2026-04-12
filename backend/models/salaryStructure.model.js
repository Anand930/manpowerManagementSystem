import mongoose, { model, Schema } from "mongoose";

const salaryStructureSchema = new Schema(
  {
    basicSalary: {
      type: Number,
      required: true,
    },

    overtimeRate: Number,

    allowances: {
      hra: {
        type: Number,
        required: true,
      },
      others:{
        type:Number,
        required:true,
        default:0
      }
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
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    attendenceBonus:{
        type:Number,
        required:true,
        default:0
    }
  },
  { timestamps: true },
);

export const SalaryStructure = model("SalaryStructure", salaryStructureSchema);
