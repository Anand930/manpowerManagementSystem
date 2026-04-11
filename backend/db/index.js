import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
export const dbConnect = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log('mongodb connection failed ', error);        
    }
}