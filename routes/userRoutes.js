const express = require("express");
const router = express.Router();

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

router.get(
  "/profile",
  authMiddleware,
  async (req, res) => {

    try {

      const user = await User.findById(
        req.user.userId
      ).select("-password");

      res.json(user);

    } catch (error) {

      res.status(500).json({
        message: "Server Error"
      });

    }
  }
);

router.get(
  "/me",
  authMiddleware,
  async (req, res) => {
    try {

      console.log(req.user);

      res.json({
        userId: req.user.userId
      });
    }
    catch {
      res.status(500).json({
        message: "Server Error"
      });
    }
  }
)

module.exports = router;