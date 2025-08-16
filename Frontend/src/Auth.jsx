import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div>
      <button><Link to='/login'>LOGIN</Link></button>
      <button><Link to='/signup'>SIGNUP</Link></button>
    </div>
  )
}

export default Auth
