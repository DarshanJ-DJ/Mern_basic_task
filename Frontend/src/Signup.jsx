import React from 'react'
import { useState } from 'react'
import axios from '../axios/index.js'
import { Link } from 'react-router-dom'

const Signup = () => {
    let[signup,setSignup]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassowrd:""
    })
    let handleChange=(e)=>{
        let {name,value}=e.target
        setSignup({...signup,[name]:value})
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let res=await axios.post("/register",signup)
            setSignup(res.data)
            console.log(res.data);
            
        }catch(err){
            console.log(err.message);    
        }

    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
       Username:<input type="text" name='username' placeholder='enter the username' onChange={handleChange}/><br />
       Email:<input type="email" name='email' placeholder='enter the email' onChange={handleChange}/><br />
       Password:<input type="text" name='password' placeholder='enter the password'onChange={handleChange}/><br />
       ConfirmPassword:<input type="password" name='confirmPassword' onChange={handleChange}/>
       <button type='submit'>Signup</button>
       <p>Already have account..<button><Link to='/login'>Login</Link></button></p>
      </form>
    </div>
  )
}

export default Signup
