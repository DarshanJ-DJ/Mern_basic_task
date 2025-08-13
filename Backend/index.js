import http from 'http'
import app from './App.js';

let PORT=3000
let server=http.createServer(app)

server.listen(PORT,()=>{
    console.log(`server is on port ${PORT}`);  
})