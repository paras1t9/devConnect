import { NavLink } from "react-router-dom";

export default function Sidebar({ isSidebarExpanded }) {
  return (
    <aside>
      <nav>
        <NavLink to="/dashboard">
          {isSidebarExpanded ? "🏠 Dashboard" : "🏠"}
        </NavLink>

        <NavLink to="/profile">
          {isSidebarExpanded ? "👤 Profile" : "👤"}
        </NavLink>

        <NavLink to="/about">
          {isSidebarExpanded ? "ℹ About" : "ℹ"}
        </NavLink>
      </nav>
    </aside>
  );
}