const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getProfile
};