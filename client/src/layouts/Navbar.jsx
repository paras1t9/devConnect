import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 transition hover:bg-slate-100"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-2xl font-bold tracking-tight text-slate-800">
          DevConnect
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <span className="font-medium text-slate-700">
            {user?.name}
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg px-3 py-2 text-red-600 transition hover:bg-red-50 hover:text-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}