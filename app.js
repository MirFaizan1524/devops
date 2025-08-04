const express = require('express');
const app = express();
require('dotenv').config();

// Middlewares to parse json
app.use(express.json());
app.use (express.urlencoded({ extended: true }));



// possible Routes

app.get('/',(req,res)=>{
   res.status(201).json({
    success:true,
    message:"Welcome to CI/CD pipelines by github workflows"
   })  


})

app.get('/api',(req,res)=>{
   res.status(201).json({
    success:true,
    message:"Your integration is completed"
   })  


})

module.exports = app;

