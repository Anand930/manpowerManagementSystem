import { Employee } from "../models/employee.model.js";

const addEmployee = async (req, res) => {
  try {
    const {
      fullname,
      employeeId,
      phone,
      email,
      address,
      joiningDate,
      employementType,
      company,
      department,
      designation,
    } = req.body;
    if (
      [
        fullname,
        employeeId,
        phone,
        email,
        address,
        joiningDate,
        employementType,
        company,
        department,
        designation,
      ].some((field) => field.trim() === "")
    ) {
      return res
        .status(400)
        .json({ message: "all fields are required and not should be empty" });
    }
    const createdEmployee = await Employee.create({
      fullname,
      employeeId,
      phone,
      email,
      address,
      joiningDate,
      employementType,
      department,
      designation,
      company,
    });

    if (!createdEmployee) {
      return res.status(500).json({ message: "Employee not created" });
    }
    await createdEmployee.populate(["company", "department", "designation"]);
    return res.status(201).json({
      message: "new Employee is created successfully",
      newEmployee: createdEmployee,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wron while crating a new employee",
      error: error.message,
    });
  }
};

const getEmployees = async (req, res) => {
  try {
    const {
      company,
      designation,
      department,
      page = 1,
      limit = 10,
      isActive,
    } = req.query;
    let filter = {};
    if (department) {
      filter.department = department;
    }
    if (designation) {
      filter.designation = designation;
    }
    if (company) {
      filter.company = company;
    }
    if (isActive !== undefined) {
      filter.isActive = isActive;
    }

    const employees = await Employee.find(filter)
      .populate("company")
      .populate("department")
      .populate("designation")
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalEmployees = await Employee.countDocuments(filter);

    res.status(200).json({
      totalEmployees,
      currentPage: Number(page),
      totalPages: Math.ceil(totalEmployees / limit),
      employees,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while getting all the employees",
      error: error.message,
    });
  }
};

const getSingleEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id).populate([
      "company",
      "department",
      "designation",
      "salaryStructure",
    ]);

    if (!employee) {
      return res
        .status(404)
        .json({ message: "employee not found with given Id" });
    }
    return res.status(200).json({ message: "employee fetched", employee });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "employee not fetched", error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updateEmployee) {
      return res.status(404).json({
        message: "employee not found",
      });
    }
    res
      .status(200)
      .json({ message: "employee updated successfully", updatedEmployee });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "employee not updated", error: error.message });
  }
};

const updateEmployeeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    const employee = await Employee.findByIdAndUpdate(
      id,
      { isActive },
      { new: true },
    );

    if (!employee) {
      return res.status(404).json({ message: "employee not found" });
    }
    return res
      .status(200)
      .json({ message: "employee updated Successfully", employee });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "employee not updated", error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true },
    );
    if (!employee) {
      return res.status(404).json({ message: "employee not found" });
    }
    return res.status(200).json({ message: "employee deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "employee not deleted", error: error.message });
  }
};

const searchEmployee = async (req, res) => {
  try {
    const { q } = req.query;
    const employees = await Employee.find({
      $or: [
        { fullname: { $regex: q, $option: "i" } },
        { employeeId: { $regex: q, $option: "i" } },
        { phone: { $regex: q, $option: "i" } },
      ],
    });

    if (!employees) {
      return res.status(404).json({ message: "no employees found" });
    }
    return res.status(200).json({ message: "fetched employees", employees });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while searching employee",
      error: error.message,
    });
  }
};

export {
  addEmployee,
  getEmployees,
  getSingleEmployee,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
};
