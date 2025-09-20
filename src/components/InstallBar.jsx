import { motion, AnimatePresence } from "framer-motion";

export default function InstallBar({ show, onClose, onInstall }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex items-center justify-between px-4 py-3 z-50"
        >
          {/* Icon + Text */}
          <div className="flex items-center space-x-3">
            <img src="/pwa-192x192.png" alt="App Icon" className="h-10 w-10" />
            <div>
              <p className="font-medium text-gray-800">Pasang LegalApp</p>
              <p className="text-xs text-gray-500">Tambah ke layar utama</p>
            </div>
          </div>

          {/* Tombol */}
          <div className="flex space-x-2">
            <button onClick={onClose} className="text-gray-400 text-sm">
              Nanti
            </button>
            <button
              onClick={onInstall}
              className="px-3 py-1.5 rounded-lg bg-fhRed text-white text-sm shadow-md"
            >
              Pasang
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
