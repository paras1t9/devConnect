import { Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "../../context/AuthContext";

export default function CommentCard({
  comment,
  onDelete,
}) {
  const { user } = useAuth();

  const isOwner =
    comment.author._id === user.id;

  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      {/* Avatar */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
        {comment.author.name[0].toUpperCase()}
      </div>

      {/* Body */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">
              {comment.author.name}
            </p>

            <p className="text-xs text-slate-500">
              {formatDistanceToNow(
                new Date(comment.createdAt),
                {
                  addSuffix: true,
                }
              )}
            </p>
          </div>

          {isOwner && (
            <button
              onClick={() => onDelete(comment._id)}
              className="rounded-full p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>

        <p className="mt-2 text-slate-700">
          {comment.content}
        </p>
      </div>
    </div>
  );
}