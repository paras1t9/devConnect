import { Heart } from "lucide-react";

export default function PostCard({ post }) {
  const likeCount = post.likes.length;
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-slate-800">
            {post.author.name}
          </h2>

          <p className="text-sm text-slate-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="whitespace-pre-wrap text-slate-700">
        {post.content}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center gap-2 border-t pt-4 text-slate-500">
        <Heart size={18} />

        <span>
          {likeCount} {post.likes.length === 1 ? "Like" : "Likes"}
        </span>
      </div>
    </div>
  );
}