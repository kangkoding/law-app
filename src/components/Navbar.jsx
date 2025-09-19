import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // reset login
    navigate("/login"); // arahkan ke login page
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">
          prototype-uny
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/konsultasi" className="hover:text-gray-200">
              Konsultasi
            </Link>
          </li>
          <li>
            <Link to="/dokumen" className="hover:text-gray-200">
              Dokumen
            </Link>
          </li>
          <li>
            <Link to="/artikel" className="hover:text-gray-200">
              Artikel
            </Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {open && (
        <ul className="flex flex-col gap-3 mt-4 md:hidden">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/konsultasi" onClick={() => setOpen(false)}>
              Konsultasi
            </Link>
          </li>
          <li>
            <Link to="/dokumen" onClick={() => setOpen(false)}>
              Dokumen
            </Link>
          </li>
          <li>
            <Link to="/artikel" onClick={() => setOpen(false)}>
              Artikel
            </Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
