import { useState } from "react";
import { X } from "lucide-react";

export default function CreatePostModal({
  isOpen,
  onClose,
  onCreate
}) {
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!content.trim()) return;

    await onCreate(content);

    setContent("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Create a Post
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <textarea
            rows={6}
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            placeholder="What's on your mind?"
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-300
              p-4
              outline-none
              transition
              focus:border-blue-500
            "
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border
                px-5
                py-2
                transition
                hover:bg-slate-100
              "
            >
              Cancel
            </button>

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
      </div>
    </div>
  );
}