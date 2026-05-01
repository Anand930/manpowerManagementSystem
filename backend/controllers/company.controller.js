import { Company } from "../models/company.model.js";


// adding a company
const addCompany = async(req,res)=>{
    try {
        const {companyName, location,phone,email,state,companyCode, gstNumber} = req.body;
    
        //checking if all fields are gotten
        if([companyName, location,phone,email, state, companyCode, gstNumber].some((field)=>field.trim()==="")){
            return res.status(400).json({message:"all fields are required"})
        }
    
        const company = await Company.create({companyName,location,phone,email,state,companyCode,gstNumber})

        if(!company){
            return res.status(500).json({message:"company not created"})
        }

        return res.status(200).json({message:"New company registered SuccessFully"})
    } catch (error) {
        console.log("Error occured while creating user ",error.message);
        return res.status(500).json({message:"something went wrong while creating the company"})
    }

}

// fetching all the companies
const getAllCompanies = async(req,res) =>{
    try {
        const allCompanies = await Company.find({})
        if(!allCompanies){
            return res.status(500).json({message:"cannot get all companies"})
        }
        return res.status(200).json({message:"all companies fetched", allCompanies})
    } catch (error) {
        console.log("something went wrong while fetching all companies ", error.message)
        return res.status(500).json({message:"all companies fetch request failed"})
    }
}

const getSingleCompany = async(req,res)=>{
    try {
        const {id} = req.body
    
        const company = await Company.findOne({_id:id})
    
        if(!company){
            return res.status(400).json({message:"company not found"})
        }
        return res.status(200).json({message:"successfully fetched the company ", company})
    } catch (error) {
        console.log("something went wrong while fetching the company by id",error.message);
        return res.status(500).json({message:"company fetch request failed"})
    }
}

const updateCompany = async(req,res) =>{
    try {
        const {id} = req.params
        const getCompany = await Company.findByIdAndUpdate({_id:id},{$set:req.body.company},{new:true,runValidators:true})
        if(!getCompany){
            return res.status(400).json({message:"company not found with given id"})
        }
        
        return res.status(201).json({message:"Company get updated Successfully"})
    } catch (error) {
        console.log("Errror occured while updating the company ", error.message);
        return res.status(500).json({message:"company details updation failed ", error:error.message})
    }
}

const deleteCompany = async(req,res) =>{
    try {
        const {id} = req.params;
        const getCompany = await Company.findByIdAndDelete({_id:id})
        if(!getCompany){
            return res.status(404).json({message:"company not found with given id"})
        }
        return res.status(200).json({message:"company has been deleted successfully"})
    } catch (error) {
        console.log("failed to delete the company ", error.message)
        return res.status(500).json({message:"company not deleted", error:error.message})
    }
}




export {addCompany, getAllCompanies, getSingleCompany,updateCompany, deleteCompany}