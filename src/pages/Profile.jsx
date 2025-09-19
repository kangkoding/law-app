export default function Profile({ onLogout }) {
  const user = {
    name: "Budi Santoso",
    email: "budi@example.com",
    role: "Pemilik UMKM",
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Profil</h1>

      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <div>
          <p className="text-sm text-gray-500">Nama</p>
          <p className="font-medium text-gray-800">{user.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium text-gray-800">{user.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Peran</p>
          <p className="font-medium text-gray-800">{user.role}</p>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="w-full bg-red-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
