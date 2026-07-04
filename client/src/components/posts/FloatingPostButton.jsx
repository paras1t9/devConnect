import { SquarePen } from "lucide-react";

export default function FloatingPostButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-8
        right-8
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-lg
        transition
        hover:scale-105
        hover:bg-blue-700
      "
    >
      <SquarePen size={28} />
    </button>
  );
} 