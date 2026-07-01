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
      className={`border-r bg-white transition-all duration-300 ${isExpanded ? "w-64" : "w-20"
        }`}
    >
      <nav className="flex flex-col gap-3 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center rounded-xl px-4 py-3 transition-all ${isActive
                  ? "bg-blue-600 text-whitefont-semibold shadow"
                  : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={25} />

              {isExpanded && (
                <span className="ml-4 font-medium">
                  {item.name}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}