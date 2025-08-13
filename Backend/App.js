import express from 'express'
import router from './Routes/auth.routes.js';
import DbConnect from './DB/index.js';

DbConnect()

let app=express()

app.use("/api/v1/auth",router)


export default app;