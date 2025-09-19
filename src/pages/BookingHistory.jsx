import { Calendar, User, CheckCircle, Clock } from "lucide-react";

export default function BookingHistory() {
  const bookings = [
    {
      id: 1,
      lawyer: "Advokat A",
      bidang: "Hukum Bisnis",
      date: "12 Sep 2025",
      status: "Selesai",
    },
    {
      id: 2,
      lawyer: "Advokat B",
      bidang: "Hukum Perdata",
      date: "15 Sep 2025",
      status: "Proses",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Booking History</h1>
      <p className="text-gray-600 text-sm">
        Riwayat konsultasi hukum yang pernah Anda ajukan
      </p>

      <div className="space-y-3">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-800 font-medium">
                <User size={18} className="text-blue-600" />
                <span>{b.lawyer}</span>
              </div>
              {b.status === "Selesai" ? (
                <span className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                  <CheckCircle size={16} /> <span>Selesai</span>
                </span>
              ) : (
                <span className="flex items-center space-x-1 text-yellow-600 text-sm font-medium">
                  <Clock size={16} /> <span>Proses</span>
                </span>
              )}
            </div>

            <p className="text-sm text-gray-500">{b.bidang}</p>

            <div className="flex items-center text-sm text-gray-500 space-x-1">
              <Calendar size={14} />
              <span>{b.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
