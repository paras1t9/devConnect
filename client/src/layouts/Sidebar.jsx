import { NavLink } from "react-router-dom";
import { Home, Info } from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
  },
];

export default function Sidebar({ isExpanded }) {
  return (
    <aside
      className={`bg-white border-r transition-all duration-300 ${isExpanded ? "w-64" : "w-20"
        }`}
    >
      <nav className="flex flex-col p-4 gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />

              {isExpanded && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}