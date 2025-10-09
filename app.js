// console.log("ef");
// import express from "express";
// const app = express();

import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/my_database");
    console.log(" mongodb Connected! ");
  } catch (error) {
    console.error("error connection!", error);
  }
};
connectDB();
