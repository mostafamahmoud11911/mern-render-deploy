import express from "express";
import user from "../schema/user.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const body = req.body;
  const newUser = new user(body);

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await user.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
