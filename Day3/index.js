import express from 'express';
import dotenv from 'dotenv';
// console.log(express);

dotenv.config();

const app=express();

app.use(express.json());

app.get('/api/users',(req,res)=>{
    res.status(200).json({
        message:"welcome to express js"
    })
})

const post=process.env.PORT || 3000;
app.listen(post,()=>{
    console.log(`server is runnning http://localhost:${post}`);
    
})


