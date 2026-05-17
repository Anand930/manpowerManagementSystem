import { SalaryStructure } from "../models/salaryStructure.model.js";

const addSalaryStructure = async (req, res) => {
  try {
    const {
      name,
      basicSalary,
      overtimeRate,
      allowances,
      epfDeduction,
      esiDeduction,
      company,
      attendenceBonus,
      overtimeAllowed,
    } = req.body;
    if (
      [name, basicSalary, epfDeduction, esiDeduction, company].some(
        (field) => typeof(field)==="String"?field.trim() === "":field==="",
      )
    ) {
      return res.status(404).json({ message: "all fields are required" });
    }

    const existingSalaryStructureFormat = await SalaryStructure.findOne({
      name,
    });
    if (existingSalaryStructureFormat) {
      return res.status(409).json({
        message: "salary structure formate already exist with given name",
      });
    }
    const newSalaryStructureFormat = await SalaryStructure.create({
      name,
      basicSalary,
      overtimeRate,
      allowances,
      epfDeduction,
      esiDeduction,
      company,
      attendenceBonus,
      overtimeAllowed,
    });
    if (newSalaryStructureFormat) {
      await newSalaryStructureFormat.populate("company");
      return res
        .status(200)
        .json({
          message: "new salary structure is created successfully",
          newSalaryStructureFormat,
        });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        message:
          "something went wrong while creating new salary structure format",
        error: error.message,
      });
  }
};

const getAllSalaryStructure = async (req, res) => {
  try {
    const {company} = req.body;
    const salaryStructures = await SalaryStructure.find({ company });
    if (!salaryStructures.length) {
      return res
        .status(404)
        .json({ message: "no salary structure format found" });
    }
    return res
      .status(200)
      .json({
        message: "salary structure format found successfully",
        salaryStructures,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        message:
          "something went wrong while getting the salary structure format",
          error:error.message
      });
  }
};

const updateSalaryStructure = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSalaryStructure = await SalaryStructure.findByIdAndUpdate(
      id,
      req.body
    ).populate('company');
    if (!updatedSalaryStructure) {
      return res
        .status(404)
        .json({ message: "salary structure format not found with given id" });
    }
    return res
      .status(200)
      .json(
        { message: "salary structure format is updated successfully",updatedSalaryStructure }        
      );
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "something went wrong while updating the salary structure",
        error: error.message,
      });
  }
};

const deleteSalaryStructure = async (req, res) => {
  try {
    const { id } = req.params;
    const salaryStructure = await SalaryStructure.findByIdAndUpdate(id, {
      isActive: false,
    });
    if (!salaryStructure) {
      return res
        .status(404)
        .json({ message: "salary structure format not found with given id" });
    }
    return res
      .status(200)
      .json({ message: "salary structure format is deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "something went wrong while updating the salary structure",
        error: error.message,
      });
  }
};

const getSalaryStructureById = async(req,res)=>{
    try {
        const {id} = req.params
        const salaryStucture = await SalaryStructure.findById({id})
        if(!salaryStucture){
            return res.status(404).json({message:"salary structure not found with given id"})
        }
        return res.status(200).json({message:"salary structure found successfully", salaryStucture})
    } catch (error) {
        return res.status(500).json({message:"something went wrong while getting salary structure", error:error.message})
    }
}


export {addSalaryStructure,updateSalaryStructure,deleteSalaryStructure, getAllSalaryStructure, getSalaryStructureById}
