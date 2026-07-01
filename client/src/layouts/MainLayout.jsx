import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar toggleSidebar={toggleSidebar} />

      <main className="flex flex-1 overflow-hidden">
        <Sidebar isExpanded={isSidebarExpanded} />

        <section className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}