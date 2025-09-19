import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Download, Edit, MessageSquare, X } from "lucide-react";

export default function DokumenDetail() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  // dummy data dokumen
  const documents = {
    1: {
      title: "Draft Perjanjian Kerjasama",
      content: "Isi draft perjanjian kerjasama antara dua pihak...",
      date: "10 Sep 2025",
    },
    2: {
      title: "Surat Somasi",
      content: "Isi surat somasi untuk penagihan pembayaran...",
      date: "5 Sep 2025",
    },
    3: {
      title: "Kontrak Kerja Karyawan",
      content: "Isi kontrak kerja karyawan dengan hak & kewajiban...",
      date: "1 Sep 2025",
    },
  };

  const doc = documents[id];

  if (!doc) {
    return (
      <div className="p-4">
        <p>Dokumen tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <Link to="/dokumen" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold text-gray-800">{doc.title}</h1>
      </div>

      <p className="text-sm text-gray-500">Tanggal: {doc.date}</p>

      {/* Isi Dokumen */}
      <div className="bg-white p-4 rounded-xl shadow text-gray-700 leading-relaxed text-sm">
        {doc.content}
      </div>

      {/* Tombol Aksi */}
      <div className="grid grid-cols-3 gap-3">
        <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-xl text-sm hover:bg-blue-700">
          <Download size={16} /> <span>Download</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-yellow-500 text-white py-2 rounded-xl text-sm hover:bg-yellow-600">
          <Edit size={16} /> <span>Edit</span>
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center space-x-2 bg-green-600 text-white py-2 rounded-xl text-sm hover:bg-green-700"
        >
          <MessageSquare size={16} /> <span>Konsultasi</span>
        </button>
      </div>

      {/* Modal Booking */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-11/12 max-w-md shadow-lg relative">
            {/* Tombol Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Booking Konsultasi
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Booking berhasil dikirim!");
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Pilih Advokat
                </label>
                <select className="w-full border rounded-lg p-2 text-sm">
                  <option>Advokat A - Hukum Bisnis</option>
                  <option>Advokat B - Hukum Perdata</option>
                  <option>Advokat C - Hukum Ketenagakerjaan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Pilih Tanggal
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Catatan (opsional)
                </label>
                <textarea
                  className="w-full border rounded-lg p-2 text-sm"
                  rows="3"
                  placeholder="Tuliskan kebutuhan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-green-700"
              >
                Konfirmasi Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
