import mongoose, { Schema, model } from "mongoose";

const documentSchema = new Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: [true, "employee name is required to save the document"],
  },
  aadhaar: {
    aadhaarNo: {
      type: String,
      match: [/^\d{12}$/, "Aadhaar must be 12 digits"],
    },
    image: {
      type: String,
    },
  },
  pan: {
    panNo: {
      type: String,
      match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"],
    },
    image: String,
  },
  passbook: {
    accountNo: {
      type: String,
      minlength: [9, "minlength should be 9 for passbook"],
      maxlength: [20, "maxlength should be 20 for passbook"],
    },
    ifscCode: {
      type: String,
      match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"]
    },
    image: String,
  },
  others: [
    {
      documentName: {
        type: String,
        trim: true,
      },
      documentNo: String,
      documentImage: String,
    },
  ],
},{timestamps:true});

export const Document = model("Document", documentSchema);
