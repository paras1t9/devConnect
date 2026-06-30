import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const { user } = useAuth();

  return (
    <header>
      <div>
        <button onClick={toggleSidebar}>☰</button>
        <Link to={"/dashboard"}>
          <h1>DevConnect</h1>
        </Link>
      </div>

      <div>
        <span>{user?.name}</span>
        <button>Logout</button>
      </div>
    </header>
  );
}