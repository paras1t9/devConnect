const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createComment,
  getComments,
  deleteComment,
} = require("../controllers/commentController");

router.use(authMiddleware);
router.delete("/:commentId", deleteComment);

module.exports = router;