import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
const MONGODB_URI = `mongodb://localhost:27017/`;
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(
        `${MONGODB_URI}/${DB_NAME}}`
    )
        console.log(`\n MongoDB connected succesfully !!
            DB HOST: ${connectionInstance.connection.host}`);
        

    }
    catch(error){
        console.log("MONOGODB connection failed",error);
        process.exit(1)
    }
}
export default connectDB