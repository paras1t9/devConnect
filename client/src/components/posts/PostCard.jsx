import {
  Heart,
  MessageCircle,
  Trash2,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";

import { useAuth } from "../../context/AuthContext";

export default function PostCard({ post, onLike }) {
  const { user } = useAuth();

  const likeCount = post.likes.length;

  const isOwner = post.author._id === user.id;
  const likedByCurrentUser = post.likes.some(
    (id) => id.toString() === user.id
  );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
            {post.author.name[0].toUpperCase()}
          </div>

          <div>
            <h2 className="font-semibold text-slate-800">
              {post.author.name}
            </h2>

            <p className="text-sm text-slate-500">
              {formatDistanceToNow(
                new Date(post.createdAt),
                {
                  addSuffix: true,
                }
              )}
            </p>
          </div>
        </div>

        {isOwner && (
          <button
            className="rounded-full p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      {/* Content */}
      <p className="mt-6 whitespace-pre-wrap leading-7 text-slate-700">
        {post.content}
      </p>

      {/* Footer */}
      <div className="mt-6 flex border-t pt-4">
        <button
          onClick={() => onLike(post._id)}
          className={`
    flex
    flex-1
    items-center
    justify-center
    gap-2
    rounded-lg
    py-2
    transition
    ${likedByCurrentUser
              ? "text-red-600 bg-red-50"
              : "text-slate-600 hover:bg-red-50 hover:text-red-600"
            }
  `}
        >
          <Heart
            size={18}
            fill={likedByCurrentUser ? "currentColor" : "none"}
          />

          <span>{likeCount}</span>
        </button>

        <button
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            py-2
            text-slate-600
            transition
            hover:bg-blue-50
            hover:text-blue-600
          "
        >
          <MessageCircle size={18} />

          <span>Comments</span>
        </button>
      </div>
    </div>
  );
}