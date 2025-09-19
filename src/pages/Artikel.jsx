import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Artikel() {
  const articles = [
    { id: 1, title: "Panduan Hukum untuk UMKM", date: "10 Sep 2025" },
    { id: 2, title: "Tips Membuat Kontrak Kerja", date: "5 Sep 2025" },
    { id: 3, title: "Legalitas Startup Digital", date: "1 Sep 2025" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Artikel</h1>
      <p className="text-gray-600 text-sm">
        Edukasi hukum sederhana untuk UMKM & Startup
      </p>

      <div className="space-y-3">
        {articles.map((a) => (
          <Link
            key={a.id}
            to={`/artikel/${a.id}`}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-lg">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-800">{a.title}</p>
                <p className="text-xs text-gray-500">{a.date}</p>
              </div>
            </div>
            <span className="text-sm text-green-600 font-medium">Baca</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
