import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

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
        unique:true,
        validate:{
            validator:function(value){
                return value.match(/^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
            },
            message:"Enter proper email"
        }
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6,"Minimum six characters are required"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Confirm your password"],
        minLength:[6,"Minimum six characters are required"],
        validate:{
            validator:function(value){
                return this.password===value
            },
            message:"Password doesn't matching"
        }
    },
    role:{
        type:String,
        default:"user"
    }
},
{timestamps:true} //for CreatedAt and updatedAt status
)

//middleware are functions and they are also called
//  pre hooks--they run before mongoose query--they are on schema level
authSchema.pre("save",async function(next){
    if(this.isModified('password')){
        //Hash the password 
        this.password=await bcrypt.hash(this.password,10)
        this.confirmPassword=undefined
        next()
    }else{
        throw new Error("Error during hashing the password")
    }
})

authSchema.methods.comparePassword=async function(EnteredPassword){
    try{
        return await bcrypt.compare(EnteredPassword,this.password)
    }catch(err){
        throw new Error("Error in comparing password..!")
    }
}

let User=mongoose.model("User",authSchema)

export default User;