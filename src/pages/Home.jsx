export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Selamat Datang 🚀</h1>
      <p className="text-gray-700">
        Akses layanan <span className="font-semibold">konsultasi hukum</span>{" "}
        dan
        <span className="font-semibold"> dokumen legal</span> dengan mudah,
        cepat, dan transparan.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/konsultasi"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Konsultasi
        </a>
        <a
          href="/dokumen"
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          Dokumen
        </a>
      </div>
    </div>
  );
}
