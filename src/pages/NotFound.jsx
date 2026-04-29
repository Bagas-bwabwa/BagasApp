import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-100">
          Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          Waduh, halaman yang kamu cari entah nyasar ke mana. 
          Mungkin URL-nya salah, halamannya dipindah, atau ya... 
          internet sedang bercanda seperti biasa.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition duration-300"
          >
            Kembali ke Beranda
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold transition duration-300"
          >
          </button>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}