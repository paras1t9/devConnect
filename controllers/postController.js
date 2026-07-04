const Post = require("../models/Post");
const Comment = require("../models/Comment");

async function createPost(req, res) {
  try {
    const { content } = req.body;
    if (!content || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "Content is required.",
      });
    }
    console.log(req.user);
    const post = await Post.create({
      author: req.user.userId,
      content,
    });
    await post.save();
    return res.status(201).json({
      success: true,
      message: "Post created successfully.",
      post,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function getPosts(req, res) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNumber = Math.max(1, Number(page) || 1);
    const limitNumber = Math.min(50, Math.max(1, Number(limit) || 10));
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .populate("author", "name");

    return res.status(200).json({
      success: true,
      posts,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function toggleLike(req, res) {
  try {
    const postId = req.params.id;
    const userId = req.user.userId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const alreadyLiked = post.likes.some((id) =>
      id.equals(userId)
    );

    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (id) => !id.equals(userId)
      );
    } else {
      post.likes.push(userId);
    }

    await post.save();

    return res.status(200).json({
      success: true,
      message: alreadyLiked
        ? "Post unliked successfully"
        : "Post liked successfully",
      post,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (!post.author.equals(req.user.userId)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }
    await post.deleteOne();
    return (
      res.status(200).json({
        success: true,
        message: "Post deleted successfully"
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

async function createComment(req, res) {
  try {
    const postId = req.params.postId;
    const { content } = req.body;
    if (!content || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "Content is required.",
      });
    }
    const foundPost = await Post.findById(postId);
    if (!foundPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const comment = await Comment.create({
      post: postId,
      author: req.user.userId,
      content
    })
    await comment.populate("author", "name _id");
    res.status(201).json({
      success: true,
      comment
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function getComments(req, res) {
  try {
    const postId = req.params.id;
    const foundPost = await Post.findById(postId);
    if (!foundPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const comments = await Comment.find({
      post: postId
    })
      .sort({ createdAt: 1 })
      .populate("author", "name");
    return res.status(200).json({
      success: true,
      comments
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  createPost,
  getPosts,
  toggleLike,
  deletePost,
  createComment,
  getComments
};