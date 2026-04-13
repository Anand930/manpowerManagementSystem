import { Company } from "../models/company.model.js";

const addCompany = async(req,res)=>{
    try {
        const {name, location,phone,email,state,companyCode, gstNumber} = req.body;
    
        //checking if all fields are gotten
        if([name, location,phone,email, state, companyCode, gstNumber].some((field)=>field.trim()==="")){
            return res.status(400).json({message:"all fields are required"})
        }
    
        const company = await Company.create({name,location,phone,email,state,companyCode,gstNumber})

        if(!company){
            return res.status(500).json({message:"company not created"})
        }

        return res.status(200).json({message:"New company registered SuccessFully"})
    } catch (error) {
        console.log("Error occured while creating user ",error.message);
        return res.status(500).json({message:"something went wrong while creating the company"})
    }

}


export {addCompany}