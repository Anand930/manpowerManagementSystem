import { Department } from "../models/department.model.js";


const addDepartment = async(req,res) =>{
    try {
        const {name,company} = req.body;
        if(!name||!company){
            return res.status(400).json({message:"all field are required"})
        }
        const existingDepartment = await Department.findOne({company,name})
        if(existingDepartment){
            return res.status(409).json({message:"department already exists with the given name"})
        }
    
        const createdDepartment = await Department.create({name,company})
        await createdDepartment.populate('company')
    
        return res.status(201).json({message:"new department is created successfully", createdDepartment})
    
    } catch (error) {
        return res.status(500).json({message:"something went wrong while creating the new department", error:error.message})
    }}


const getDepartment = async(req, res) =>{
    try {
        const {company} = req.body
        if(!company){
            return res.status(404).json({message:"company is required"})
        }
        const allDepartments = await Department.find({company})
    
        if(!allDepartments.length){
            return res.status(404).json({message:"not any department exist for this particular company"})
        }
    
        return res.status(200).json({message:"all depatments fetched", allDepartments})
    
    } catch (error) {
        return res.status(500).json({message:"something went wrong while fetching the departments", error:error.message})
    }
}

const updateDepartment = async(req,res) =>{
    try {
        const {id} = req.params
        const updatedDepartment = await Department.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
        return res.status(200).json({message:"department updated successfull",updatedDepartment})
    } catch (error) {
        return res.status(500).json({message:"something went wrong while updating the department",error:error.message})
    }
}

const deleteDepartment = async(req,res) =>{
    try {
        const {id} = req.params
        const deletedDepartment = await Department.findByIdAndUpdate(id,{isActive:false},{new:true})
        return res.status(200).json({message:"department is deleted successfully", deleteDepartment})
    } catch (error) {
        return res.status(500).json({message:"something went wrong while deleting the department", error:error.message})
    }
}

export {addDepartment,updateDepartment,getDepartment,deleteDepartment}