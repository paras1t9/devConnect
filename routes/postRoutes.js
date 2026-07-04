const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createPost,
  getPosts,
  toggleLike,
  deletePost,
  createComment,
  getComments
} = require("../controllers/postController");

router.use(authMiddleware);

router.post("/", createPost);

router.get("/", getPosts);

router.patch("/:id/like", toggleLike);

router.delete("/:id", deletePost);

router.post("/:id/comments", createComment);

router.get("/:id/comments", getComments);

module.exports = router;