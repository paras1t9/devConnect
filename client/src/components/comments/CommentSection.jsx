import { useEffect, useState } from "react";
import { getComments } from "../../services/api";
import CommentForm from "./CommentForm";
import { createComment } from "../../services/api";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

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
          No comments yet.
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="flex gap-3 rounded-xl bg-slate-50 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                {comment.author.name[0].toUpperCase()}
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  {comment.author.name}
                </p>

                <p className="mt-1 text-slate-700">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <CommentForm
        onSubmit={handleCreateComment}
      />
    </div>
  );
}