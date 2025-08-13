import { login, register } from '../Controller/auth.controller.js'
import express from 'express'

let router=express.Router()

router.post("/register",register)

router.post("/login",login)

export default router