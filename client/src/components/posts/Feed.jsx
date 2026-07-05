import PostCard from "./PostCard";

export default function Feed({ posts, onLike, onDelete }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-700">
          No posts yet
        </h2>

        <p className="mt-2 text-slate-500">
          Be the first developer to share something
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}