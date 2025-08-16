import express from 'express'
import router from './Routes/auth.routes.js';
import DbConnect from './DB/index.js';
import cors from 'cors'

DbConnect()
let app=express()
app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())
app.use("/api/v1/auth",router)


export default app;