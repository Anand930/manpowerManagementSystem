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
      employementType
    });
  
    if(!createdUser){
      return res.status(500).json({message:"Employee not created"})
    }
    return res.status(201).json({message:"new Employee is created successfully", newEmployee:createdEmployee})
  } catch (error) {
    return res.status(500).json({message:"Something went wron while crating a new employee", error:error.message})
  }
};
