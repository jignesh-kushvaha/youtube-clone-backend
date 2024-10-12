import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async function(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connected successfully");
        console.log("connectionInstance ",connectionInstance.connection.host);
    } catch (error) {
        console.error("Error in connecting to Databased: ", error.message);
        process.exit(1);
    }
}

export default connectDB;