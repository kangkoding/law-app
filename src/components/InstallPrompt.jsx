import { motion, AnimatePresence } from "framer-motion";

export default function InstallPrompt({ show, onClose, onInstall }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 w-80 text-center shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/pwa-192x192.png"
              alt="App Icon"
              className="h-16 w-16 mx-auto mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Pasang FH UNY LegalApp
            </h2>
            <p className="text-gray-500 text-sm mt-1 mb-4">
              Tambahkan ke layar utama untuk akses lebih cepat dan mudah.
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700"
              >
                Nanti
              </button>
              <button
                onClick={onInstall}
                className="px-4 py-2 rounded-lg bg-fhRed text-white shadow-md"
              >
                Pasang
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
