import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ArtikelDetail() {
  const { id } = useParams();

  const articles = {
    1: {
      title: "Panduan Hukum untuk UMKM",
      date: "10 Sep 2025",
      content: `UMKM sering menghadapi tantangan hukum seperti perizinan usaha, perjanjian dagang, hingga sengketa. Artikel ini memberikan panduan praktis agar UMKM dapat memahami dasar hukum dengan bahasa sederhana.`,
    },
    2: {
      title: "Tips Membuat Kontrak Kerja",
      date: "5 Sep 2025",
      content: `Kontrak kerja harus jelas mengenai hak dan kewajiban. Penting mencantumkan masa kerja, gaji, jam kerja, hingga klausul penyelesaian sengketa agar tidak ada salah paham.`,
    },
    3: {
      title: "Legalitas Startup Digital",
      date: "1 Sep 2025",
      content: `Startup digital wajib memperhatikan legalitas seperti pendirian PT, perlindungan data pribadi, dan hak kekayaan intelektual. Legalitas yang kuat akan mendukung pertumbuhan bisnis.`,
    },
  };

  const article = articles[id];

  if (!article) {
    return (
      <div className="p-4">
        <p>Artikel tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-3">
        <Link to="/artikel" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold text-gray-800">{article.title}</h1>
      </div>

      <p className="text-sm text-gray-500">Tanggal: {article.date}</p>

      <div className="bg-white p-4 rounded-xl shadow text-gray-700 leading-relaxed text-sm">
        {article.content}
      </div>
    </div>
  );
}
