import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Dashboard from "./pages/Dashboard";
import Dokumen from "./pages/Dokumen";
import Artikel from "./pages/Artikel";
import BookingHistory from "./pages/BookingHistory";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ArtikelDetail from "./pages/ArtikelDetail";
import DokumenDetail from "./pages/DokumenDetail";
import SplashScreen from "./pages/SplashScreen";
import PageWrapper from "./components/PageWrapper";
import InstallBar from "./components/InstallBar";

function AnimatedRoutes({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isLoggedIn ? (
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper type="dashboard">
                <Dashboard />
              </PageWrapper>
            }
          />
          <Route
            path="/dokumen"
            element={
              <PageWrapper type="dokumen">
                <Dokumen />
              </PageWrapper>
            }
          />
          <Route
            path="/dokumen/:id"
            element={
              <PageWrapper type="dokumen">
                <DokumenDetail />
              </PageWrapper>
            }
          />
          <Route
            path="/artikel"
            element={
              <PageWrapper type="artikel">
                <Artikel />
              </PageWrapper>
            }
          />
          <Route
            path="/artikel/:id"
            element={
              <PageWrapper type="artikel">
                <ArtikelDetail />
              </PageWrapper>
            }
          />
          <Route
            path="/history"
            element={
              <PageWrapper type="history">
                <BookingHistory />
              </PageWrapper>
            }
          />
          <Route
            path="/profile"
            element={
              <PageWrapper type="profile">
                <Profile onLogout={() => setIsLoggedIn(false)} />
              </PageWrapper>
            }
          />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/register" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes location={location} key={location.pathname}>
          <Route
            path="/login"
            element={
              <PageWrapper type="dashboard">
                <Login onLogin={() => setIsLoggedIn(true)} />
              </PageWrapper>
            }
          />
          <Route
            path="/register"
            element={
              <PageWrapper type="dashboard">
                <Register onRegister={() => setIsLoggedIn(true)} />
              </PageWrapper>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBar, setShowInstallBar] = useState(false);

  // Splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // PWA install prompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBar(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      console.log("User choice:", choice);
      setDeferredPrompt(null);
      setShowInstallBar(false);
    }
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <PageWrapper type="dashboard">
            <SplashScreen />
          </PageWrapper>
        ) : (
          <>
            <AnimatedRoutes
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
            {isLoggedIn && <BottomNav />}
            <InstallBar
              show={showInstallBar}
              onClose={() => setShowInstallBar(false)}
              onInstall={handleInstall}
            />
          </>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
