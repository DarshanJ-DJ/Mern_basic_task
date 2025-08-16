import React from 'react'
import { useState } from 'react'
import axios from '../axios/index.js'

const Login = () => {
    let[login,setLogin]=useState({
        email:"",
        password:""
    })
    let handleChange=(e)=>{
            let{name,value}=e.target
            setLogin({...login,[name]:value})
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let res=await axios.post("/login",login)
            console.log(res.data)
            setLogin('')
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Email:<input type="email" name='email' onChange={handleChange}/><br />
        Password:<input type="password" name='password' onChange={handleChange}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
