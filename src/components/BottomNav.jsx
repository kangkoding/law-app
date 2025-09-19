import { Link, useLocation } from "react-router-dom";
import { Home, FileText, BookOpen, History, User } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const menus = [
    { path: "/", label: "Home", icon: <Home size={22} /> },
    { path: "/dokumen", label: "Dokumen", icon: <FileText size={22} /> },
    { path: "/artikel", label: "Artikel", icon: <BookOpen size={22} /> },
    { path: "/history", label: "History", icon: <History size={22} /> },
    { path: "/profile", label: "Profil", icon: <User size={22} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg flex justify-around py-2">
      {menus.map((menu) => {
        const active = location.pathname === menu.path;
        return (
          <Link
            key={menu.path}
            to={menu.path}
            className={`flex flex-col items-center text-xs ${
              active ? "text-orange-600 font-semibold" : "text-gray-500"
            }`}
          >
            {menu.icon}
            <span>{menu.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
