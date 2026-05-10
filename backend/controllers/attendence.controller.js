import { Attendence } from "../models/attendence.model.js";

const markAttendence = async (req,res) => {
    try {
        const {companyId,employeeId,date,status,overTimeHours} = req.body
        const existing = await Attendence.findOne({employee:employeeId, date: new Date(date)})
        // checking whether the attendence is already marked or not 
        if(existing){
            return res.status(400).json({message:"attendence is already marked"})
        }
        
        const attendence = await Attendence.create({
            employee:employeeId,
            company:companyId,
            date,
            status,
            overTimeHours
        })
        if(attendence){
            return res.status(201).json({message:"attendence is marked successfully", attendence})
        }
    
    } catch (error) {
        return res.status(500).json({message:"something went wrong while adding the attendence"})
    }
}

const getEmployeeAttendence = async(req,res) =>{
    try {
        const {employeeId} = req.params
        const {month, year} = req.query

        const filter = {employee:employeeId}

        if(month&&year){
            const start = new Date(year, month-1,1)
            const end = new Date(year, month,0)
            filter.date = {$gte:start,$lte:end}
        }

        const attendence = await Attendence.find(filter).sort({date:1})

        return res.status(200).json({message:"attendence fetched successfully", attendence})
    } catch (error) {
        return res.status(500).json("Something went wrong while getting the employee attendece data")
    }
}


const getAttendenceSummary = async(req,res) =>{
    try {
        const {employeeId} = req.params
        const {month,year} = req.query

        const start = new Date(year, month-1,1)
        const end = new Date(year,month, 0)

        const data = await Attendence.aggregate([
            {
                $match:{
                    employee:new mongoose.Schema.Types.ObjectId(employeeId),
                    date:{$gte:start, $lte:end}
                }
            },
            {
                $groups:{
                    _id:null,
                    presentDays:{
                        $sum:{$cond:[{$eq:['$status',"present"]},1,0]}
                    },
                    absentDays:{
                        $sum:{$cond:[{$eq:['$status',"absent"]},1,0]}
                    },
                    halfDays:{
                        $sum:{$cond:[{$eq:['$status',"half"]},1,0]}
                    },
                    leaveDays:{
                        $sum:{$cond:[{$eq:['$status',"leave"]},1,0]}
                    },
                    totalOvertime:{$sum:"$overtimeHours"}
                }
            }
        ])
        return res.status(200).json({message:"got the attendence summary ", data:data[0]||{}})
    } catch (error) {
        return res.status(500).json({message:"something went wrong while fetching the attendence summary ", error:error.message})
    }
} 


const updateAttendence = async(req,res)=>{
    try {
        const {id} = req.params

        const updated = await attendence.findByIdAndUpdate(id,req.body,{new:true})

        if(!updated){
            return res.status(404).json({message:"attendence not found"})
        }
        return res.status(200).json({message:"attendence updated successfully ", updated})
    } catch (error) {
        return res.status(500).json({message:"attendence not updated ", error:error.message})
    }
}

const deleteAttendence = async(req,res) =>{
    try {
        const {id} = req.params
        const deleted = await attendence.findByIdAndDelete(id)
    
        if(!deleted){
            return res.status(404).json({message:"attendence not deleted"})
        }
    
        return res.status(200).json({message:"attendence deleted successfully"})
    } catch (error) {
        return res.status(500).json({message:"something went wrong while deleting the attendence ", error:error.message})
    }
}


export {markAttendence, getEmployeeAttendence,getAttendenceSummary, updateAttendence,deleteAttendence}