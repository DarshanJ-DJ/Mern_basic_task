import mongoose from "mongoose";

async function DbConnect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1/authDB")
        console.log("db  connected");
        
    }catch(err){
        console.log("Can't connect",err);
        
    }
}

export default DbConnect;