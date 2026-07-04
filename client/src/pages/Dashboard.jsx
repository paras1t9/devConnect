import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import { getPosts, createPost } from "../services/api";

import FloatingPostButton from "../components/posts/FloatingPostButton";
import CreatePostModal from "../components/posts/CreatePostModal";
import Feed from "../components/posts/Feed";

export default function Dashboard() {
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    const token = localStorage.getItem("token");

    const { response, data } = await getPosts(token);

    if (!response.ok) {
      console.error(data.message);
      return;
    }

    setPosts(data.posts);
  }

  async function handleCreatePost(content) {
    const token = localStorage.getItem("token");

    const { response, data } = await createPost(content, token);

    if (!response.ok) {
      alert(data.message);
      return;
    }

    // We'll replace this with optimistic updates later.
    await loadPosts();

    setIsModalOpen(false);
  }

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-3xl font-bold">
          Welcome back, {user?.name}!
        </h1>

        <p className="text-slate-500">
          Look at what your fellow developers have posted today!
        </p>
      </div>

      {/* Feed */}
      <Feed posts={posts} />

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreatePost}
      />

      {/* Floating Action Button */}
      <FloatingPostButton
        onClick={() => setIsModalOpen(true)}
      />
    </div>
  );
}