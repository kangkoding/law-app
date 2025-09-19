import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    } else {
      alert("Isi email dan password dulu");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow w-80">
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-center mt-4 text-gray-600">
          Belum punya akun?{" "}
          <Link to="/register" className="text-orange-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
