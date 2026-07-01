import { Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ toggleSidebar }) {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar}>
          <Menu size={24} />
        </button>

        <h1 className="text-xl font-bold">
          DevConnect
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span>{user?.name}</span>

        <button className="text-red-600 font-medium">
          Logout
        </button>
      </div>
    </header>
  );
}