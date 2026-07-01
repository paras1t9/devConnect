function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-3
        text-slate-800
        placeholder:text-slate-400
        outline-none
        transition
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-200
        ${className}
      `}
    />
  );
}

export default Input;