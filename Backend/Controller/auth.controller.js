import User from '../Models/auth.model.js'
// Register page
let register=async(req,res,next)=>{
    let {username,email,password,confirmPassword}=req.body
    try{
    let existingUser=await User.findOne({email})
    if(existingUser){
        res.status(400).json({message:"user already exists. Please login..!"})
        return
    }
        let newUser=await User.create({
            username,
            email,
            password,
            confirmPassword
        })
        res.status(200).json(newUser)  
    }catch(err){
        console.log(err);
        res.status(500).json(err.message)
    }
}
//Login Page
let login=async(req,res,next)=>{
    let {email,password}=req.body
    try{
        let existUser=await User.findOne({email})
        if(!existUser){
            res.status(400).json({message:"User not exist..! Please Signup"})
            return
        }
        let isMatching= await existUser.comparePassword(password)
        if(!isMatching){
            res.status(400).json({message:"Invalid password..! Try again"})
        }
        res.status(200).json("Login successful..!")
    }catch(err){
        // console.log(err);
        res.status(500).json({message:err.message})
    }
}

export{
    register,login
}