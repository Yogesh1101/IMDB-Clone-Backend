import express from "express";
import { getUserDetails } from "../controllers/userDetail.controller.js";

const router = express.Router();

// Get User Details
router.get("/userDetails", async (req, res) => {
  try {
    const user = await getUserDetails(req);
    res.status(200).json({ data: user });
  } catch (error) {
    // Sending the Error Response
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

export const userDetailRouter = router;
