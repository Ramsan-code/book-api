// console.log("ef");
import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookdb");
    console.log(" mongodb Connected! ");
  } catch (error) {
    console.error("error connection!", error);
  }
};

connectDB();

const app = express();
const PORT = 2000;

app.use(express.json());

app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("HI! EXPRESS");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
