import { Designation } from "../models/designation.model.js";

const addDesignation = async (req, res) => {
  try {
    const { name, company, department, description } = req.body;
    if ([name, company, department].some((item) => item.trim() === "")) {
      return res.status(400).json({
        message: "Designation Name, Company Name and Department are required",
      });
    }
    const existedDesignation = await Designation.findOne({ name });
    if (existedDesignation) {
      return res.status(409).json({ message: "designation already exist" });
    }
    const createdDesignation = await Designation.create({
      name,
      company,
      department,
      description,
    });
    if (createdDesignation) {
      await createdDesignation.populate(["company", "department"]);
      return res.status(200).json({
        message: "new designation is created successfully",
        createdDesignation,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Something went wrong while creating new designation",
        error: error.message,
      });
  }
};

const getDesignation = async (req, res) => {
  try {
    const allDesignations = await Designation.find().populate([
      "company",
      "department",
    ]);
    if (!allDesignations.length) {
      return res.status(404).json({ message: "not any designation found" });
    }
    return res
      .status(200)
      .json({ message: "all Desination fetched", allDesignations });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "something went wrong while fetching the designation",
        error: error.message,
      });
  }
};

const changeDesignationStatus = async(req,res)=>{
  try {
    const { id } = req.params;
    const activatedDesignation = await Designation.findByIdAndUpdate(id, {
      isActive: true
    });
    if (activatedDesignation) {
      return res
        .status(200)
        .json({ message: "designation is activated successfully" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "seomthing went wrong while deleting the designation", error:error.message });
  }
}

const deleteDesignation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDesignation = await Designation.findByIdAndUpdate(id, {
      isActive: false
    });
    if (deletedDesignation) {
      return res
        .status(200)
        .json({ message: "designation is deleted successfully" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "seomthing went wrong while deleting the designation", error:error.message });
  }
};

export { addDesignation, getDesignation, deleteDesignation, changeDesignationStatus };
