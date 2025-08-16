import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Routes,Route } from 'react-router-dom'
import Auth from './Auth'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App
