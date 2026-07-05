import { useEffect, useState } from "react";
import { getComments, createComment, deleteComment } from "../../services/api";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import ConfirmationModal from "../common/ConfirmationModal";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  useEffect(() => {
    loadComments();
  }, []);

  async function loadComments() {
    const token = localStorage.getItem("token");

    const { response, data } = await getComments(postId, token);

    if (!response.ok) {
      console.error(data.message);
      return;
    }

    setComments(data.comments);
    setLoading(false);
  }
  async function handleCreateComment(content) {
    const token = localStorage.getItem("token");

    const { response, data } = await createComment(
      postId,
      content,
      token
    );
    console.log(content);

    if (!response.ok) {
      console.error(data.message);
      return;
    }

    setComments((prev) => [...prev, data.comment]);

  }
  function requestDelete(commentId) {
    setSelectedCommentId(commentId);
    setIsDeleteModalOpen(true);
  }
  async function confirmDelete() {
    if (!selectedCommentId) return;

    const token = localStorage.getItem("token");

    const { response, data } =
      await deleteComment(
        selectedCommentId,
        token
      );

    if (!response.ok) {
      console.error(data.message);
      return;
    }

    setComments((prevComments) =>
      prevComments.filter(
        (comment) =>
          comment._id !== selectedCommentId
      )
    );

    setSelectedCommentId(null);

    setIsDeleteModalOpen(false);
  }

  return (
    <div className="mt-4 border-t border-slate-200 pt-4">
      <h3 className="mb-4 text-lg font-semibold text-slate-700">
        Comments
      </h3>

      {loading ? (
        <p className="text-slate-500">
          Loading comments...
        </p>
      ) : comments.length === 0 ? (
        <p className="text-slate-500">
          No comments yet. Be the first one to comment!
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentCard
              key={comment._id}
              comment={comment}
              onDelete={requestDelete}
            />
          ))}
        </div>
      )}

      <CommentForm onSubmit={handleCreateComment} />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        title="Delete Comment"
        message="Are you sure you want to delete this comment? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={() => {
          setSelectedCommentId(null);
          setIsDeleteModalOpen(false);
        }}
      />
    </div>
  );
}