import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!content.trim()) return;

    await onSubmit(content);

    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 border-t pt-4"
    >
      <textarea
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="
          w-full
          resize-none
          rounded-xl
          border
          border-slate-300
          p-3
          outline-none
          transition
          focus:border-blue-500
        "
      />

      <div className="mt-3 flex justify-end">
        <button
          type="submit"
          className="
            rounded-xl
            bg-blue-600
            px-5
            py-2
            font-medium
            text-white
            transition
            hover:bg-blue-700
          "
        >
          Post
        </button>
      </div>
    </form>
  );
}