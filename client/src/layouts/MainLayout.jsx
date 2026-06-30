import { useState } from "react";

export default function MainLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };
  return (
    <div className="app-layout">
      <Navbar
        toggleSidebar={toggleSidebar} />

      <main className="main-content">
        <Sidebar
          isExpanded={isSidebarExpanded} />
        <Outlet />
      </main>
    </div>
  )
}