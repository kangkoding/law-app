import { useState } from "react";

export default function Konsultasi() {
  const advokatList = [
    {
      id: 1,
      nama: "Advokat A",
      bidang: "Hukum Bisnis & Kontrak",
      pengalaman: "10 tahun",
      rating: "⭐ 4.8",
    },
    {
      id: 2,
      nama: "Advokat B",
      bidang: "Hukum Ketenagakerjaan",
      pengalaman: "7 tahun",
      rating: "⭐ 4.6",
    },
    {
      id: 3,
      nama: "Advokat C",
      bidang: "Hukum UMKM & Startup",
      pengalaman: "5 tahun",
      rating: "⭐ 4.9",
    },
  ];

  const [selectedAdvokat, setSelectedAdvokat] = useState(null);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Konsultasi Online</h1>
      <p className="text-gray-600 text-sm">
        Pilih advokat atau firma hukum sesuai kebutuhan Anda.
      </p>

      {/* List Advokat */}
      {advokatList.map((advokat) => (
        <div
          key={advokat.id}
          className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition"
        >
          <div className="flex items-center gap-4">
            {/* Avatar Placeholder */}
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              👤
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">
                {advokat.nama}
              </h2>
              <p className="text-sm text-gray-500">{advokat.bidang}</p>
              <p className="text-xs text-gray-400">
                {advokat.pengalaman} • {advokat.rating}
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedAdvokat(advokat)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700"
          >
            Booking
          </button>
        </div>
      ))}

      {/* Modal Booking */}
      {selectedAdvokat && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-end md:items-center z-50">
          <div className="bg-white w-full md:w-11/12 max-w-md p-6 rounded-t-2xl md:rounded-2xl shadow-lg animate-fadeIn relative">
            {/* Tombol close */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedAdvokat(null)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Booking Konsultasi
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Anda akan booking{" "}
              <span className="font-semibold">{selectedAdvokat.nama}</span>
              <br />
              <span className="text-gray-500 text-xs">
                Bidang: {selectedAdvokat.bidang}
              </span>
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Tanggal
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Waktu
                </label>
                <input
                  type="time"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Catatan
                </label>
                <textarea
                  placeholder="Tuliskan kebutuhan Anda..."
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  alert("Booking berhasil (dummy).");
                  setSelectedAdvokat(null);
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
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
