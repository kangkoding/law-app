import logoFH from "../assets/logo_fh_uny.png";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="bg-fhRed flex flex-col items-center justify-center min-h-screen text-white">
      {/* Logo animasi bounce */}
      <motion.img
        src={logoFH}
        alt="Logo FH UNY"
        className="h-32 w-auto mb-6" // logo dibesarkan
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Text fade in */}
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        FH UNY LegalApp
      </motion.h1>

      <motion.p
        className="text-sm text-fhRedLight mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Akses hukum mudah untuk semua
      </motion.p>
    </div>
  );
}
