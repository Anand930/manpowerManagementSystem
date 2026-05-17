import { SalarySlip } from "../models/salarySlip.model.js";

const addSalarySlip = async (req, res) => {
  try {
    const { employee, company, month, year, salary } = req.body;
    if ([employee, company, month, year].some((field) => typeof(field)==="String"?field.trim() === "":field==="")) {
      return res
        .status(500)
        .json({ message: "some required fields are missing" });
    }
    const existingSalarySlip = await SalarySlip.findOne({ employee, company });
    if (existingSalarySlip) {
      return res.status(409).json({
        message:
          "the salary slip already exists with given employee and company",
        existingSalarySlip,
      });
    }
    const createdSalarySlip = await SalarySlip.create({
      employee,
      company,
      month,
      year,
      salary,
    });
    if (createdSalarySlip) {
      await createdSalarySlip.populate(["company", "salary", "employee"]);
      return res
        .status(201)
        .json({ message: "new salary slip is created", createdSalarySlip });
    }
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while creating the salary slip ",
      error: error.message,
    });
  }
};

const getAllSalarySlip = async (req, res) => {
  try {
    const {company} = req.body
    const allSalarySlips = await SalarySlip.find({company}).populate([
      "company",
      "salary",
      "employee",
    ]);
    if (!allSalarySlips.length) {
      return res
        .status(404)
        .json({ message: "not any salary slips format found" });
    }
    return res.status(200).json({
      message: "all salary slips are fetched successfully",
      allSalarySlips,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while gettting all the salary slips",
      error: error.message,
    });
  }
};

const getSalarySlipById = async (req, res) => {
  try {
    const { id } = req.params;
    const salarySlipById = await SalarySlip.findById(id).populate(['employee','company','salary'])
    if (!salarySlipById) {
      return res
        .status(404)
        .json({ message: "no salary slip found with given id" });
    }
    return res.status(200).json({
      message: "salary slip found with given id successfully",
      salarySlipById
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while getting the salary slip",
      error: error.message
    });
  }
};

const updateSalarySlip = async (req, res) => {
  try {
    const { id } = req.params;
    const salarySlipToUpdate = await SalarySlip.findByIdAndUpdate(
      id,
      req.body,
    ).populate(["employee", "company", "salary"]);
    if (!salarySlipToUpdate) {
      return res
        .status(404)
        .json({ message: "salary slip to update not found" });
    }
    return res.status(200).json({
      message: "salary slip is updated successfully",
      salarySlipToUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while updating salary slip",
      error: error.message,
    });
  }
};

const deleteSalarySlip = async (req, res) => {
  try {
    const { id } = req.params;
    const salarySlipToDelete = await SalarySlip.findByIdAndUpdate(id, {
      isActive: false,
    });
    if (!salarySlipToDelete) {
      return res
        .status(404)
        .json({ message: "salary slip to delete not found" });
    }
    return res
      .status(200)
      .json({ message: "Salary Slip is deleted Successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while deleting the salary slip",
      error: error.message,
    });
  }
};

export {
  addSalarySlip,
  getAllSalarySlip,
  getSalarySlipById,
  updateSalarySlip,
  deleteSalarySlip,
};
