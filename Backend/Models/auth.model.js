import mongoose from "mongoose";

let authSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        trim:true,
        minLength:[4,"Minimum 4 characters should required"]
    },  
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6,"Minimum six characters are required"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Confirm your password"],
        minLength:[6,"Minimum six characters are required"]
    },
    role:{
        type:String,
        default:"user"
    }
},
{timestamps:true} //for CreatedAt and updatedAt status
)

let User=mongoose.model("User",authSchema)

export default User;