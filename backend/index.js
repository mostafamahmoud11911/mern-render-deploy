import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './router/user.js'
import cors from 'cors'
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/auth", authRoute);

app.use("/", (req, res) => {
  res.send("Try deploy!");
});






app.listen(5500, () => {
  connect();
  console.log("server is running");
});
