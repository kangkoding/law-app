import { Link } from "react-router-dom";
import { FileText, BookOpen, History, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallModal, setShowInstallModal] = useState(false);

  const menus = [
    {
      path: "/dokumen",
      label: "Dokumen",
      icon: <FileText size={28} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      path: "/artikel",
      label: "Artikel",
      icon: <BookOpen size={28} />,
      color: "bg-green-100 text-green-600",
    },
    {
      path: "/history",
      label: "History",
      icon: <History size={28} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      path: "/profile",
      label: "Profil",
      icon: <User size={28} />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallModal(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User response:", outcome);
    setDeferredPrompt(null);
    setShowInstallModal(false);
  };

  const handleClose = () => {
    setShowInstallModal(false);
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <p className="text-gray-600 text-sm">
        Akses cepat ke layanan hukum yang tersedia.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            to={menu.path}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md transition"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${menu.color}`}
            >
              {menu.icon}
            </div>
            <p className="text-gray-800 font-medium">{menu.label}</p>
          </Link>
        ))}
      </div>

      {/* Modal Install */}
      {showInstallModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-6 w-80 text-center shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Pasang Aplikasi</h2>
            <p className="text-sm text-gray-600 mb-4">
              Tambahkan aplikasi ini ke layar utama agar lebih mudah diakses
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleInstallClick}
                className="px-4 py-2 bg-[#8B0000] text-white rounded-lg"
              >
                Install
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Nanti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
