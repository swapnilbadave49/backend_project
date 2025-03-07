import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async()=>{

    try {
       const instance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected to MongoDB ${DB_NAME}`);
        console.log(`\n MOngodb is connected!! DB HOST: ${instance.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;