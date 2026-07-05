import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import { getPosts, createPost } from "../services/api";
import { toggleLike } from "../services/api";
import { deletePost } from "../services/api";

import FloatingPostButton from "../components/posts/FloatingPostButton";
import CreatePostModal from "../components/posts/CreatePostModal";
import Feed from "../components/posts/Feed";
import ConfirmationModal from "../components/common/ConfirmationModal";

export default function Dashboard() {
  const { user } = useAuth();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedPostId, setSelectedPostId] = useState(null);

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

    //  replace this with optimistic updates later.
    await loadPosts();

    setIsModalOpen(false);
  }
  async function handleLike(postId) {
    const token = localStorage.getItem("token");

    const { response, data } = await toggleLike(postId, token);

    if (!response.ok) {
      console.error(data.message);
      return;
    }

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === data.post._id ? data.post : post
      )
    );
  }

  async function handleDelete(postId) {
    const token = localStorage.getItem("token");

    const { response, data } = await deletePost(postId, token);

    if (!response.ok) {
      console.error(data.message);
      return;
    }

    setPosts((prevPosts) =>
      prevPosts.filter((post) => post._id !== postId)
    );
  }
  async function requestDelete(postId) {
    setSelectedPostId(postId);
    setIsDeleteModalOpen(true);
  }
  async function confirmDelete() {
    if (!selectedPostId) return;

    await handleDelete(selectedPostId);

    setSelectedPostId(null);

    setIsDeleteModalOpen(false);
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
      <Feed
        posts={posts}
        onLike={handleLike}
        onDelete={requestDelete}
      />

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
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={() => {
          setSelectedPostId(null);
          setIsDeleteModalOpen(false);
        }}
      />
    </div>
  );
}