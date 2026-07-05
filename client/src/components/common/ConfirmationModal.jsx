export default function ConfirmationModal({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <span className="text-2xl">🗑️</span>
        </div>

        {/* Title */}
        <h2 className="mt-5 text-center text-xl font-semibold text-slate-800">
          {title}
        </h2>

        {/* Message */}
        <p className="mt-3 text-center text-slate-500">
          {message}
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-2
              transition
              hover:bg-slate-100
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="
              rounded-xl
              bg-red-600
              px-5
              py-2
              font-medium
              text-white
              transition
              hover:bg-red-700
            "
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}