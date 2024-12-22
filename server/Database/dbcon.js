import mongoose from "mongoose";
import colors from "colors"

const dbConnection = async()=>{
    const ConnectionString = 'mongodb://localhost:27017/studentDB';
    try{
        await mongoose.connect(ConnectionString)
        console.log("Database Connected Successfully".bgGreen)
    }
    catch(error){
        console.log("Error in the DB Connection".bgRed)
        console.log(`${error.message}`.bgCyan)
    }

}

export default dbConnection