import http, { createServer } from 'http';
import dotenv from 'dotenv';
import { create } from 'domain';
dotenv.config();
const app=createServer()
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`the server hoisted succesfully http://localhost:${PORT}`);
    
})