//require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config(
    {path: './env'}
)

connectDB()
/*
const app=express();

// connectDB();
 ;(async()=>{
    try {

        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on('error',(err)=>{
            console.log(err);
            process.exit(1);
        });
        app.listen(process.env.PORT,()=>{
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
 })()*/