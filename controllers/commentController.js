const Comment = require("../models/Comment");
const Post = require("../models/Post");

async function deleteComment(req, res) {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }
    if (!comment.author.equals(req.user.userId)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }
    await comment.deleteOne();
    return (
      res.status(200).json({
        success: true,
        message: "Comment deleted successfully"
      })
    )
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server Error"
    })
  }
}

module.exports = {
  deleteComment
}