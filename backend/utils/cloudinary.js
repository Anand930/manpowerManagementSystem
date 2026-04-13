import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'


cloudinary.config({
    cloud_name:"cloudinaryfileupload",
    api_key:928563592583723,
    api_secret:"6M4Hb2uJ0Z9M7xS2Xo_fhOM5zqY"
})





const uploadOnCloudinary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded successfully on cloudinary", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation failed
        console.log("Error occured while uploading files on cloudinary ", error)
    }  
}

export {uploadOnCloudinary}