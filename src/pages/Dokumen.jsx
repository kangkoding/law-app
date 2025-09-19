import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function Dokumen() {
  const documents = [
    { id: 1, title: "Draft Perjanjian Kerjasama", date: "10 Sep 2025" },
    { id: 2, title: "Surat Somasi", date: "5 Sep 2025" },
    { id: 3, title: "Kontrak Kerja Karyawan", date: "1 Sep 2025" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Dokumen</h1>
      <p className="text-gray-600 text-sm">Daftar dokumen hukum Anda</p>

      <div className="space-y-3">
        {documents.map((doc) => (
          <Link
            key={doc.id}
            to={`/dokumen/${doc.id}`}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-lg">
                <FileText size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-800">{doc.title}</p>
                <p className="text-xs text-gray-500">{doc.date}</p>
              </div>
            </div>
            <span className="text-sm text-blue-600 font-medium">Lihat</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
