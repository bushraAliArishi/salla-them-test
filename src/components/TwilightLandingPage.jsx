import React from "react";
import { motion } from "framer-motion";

export default function TwilightLandingPage() {
  return (
    <div className="min-h-screen text-gray-100 antialiased px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg font-bold">BP</div>
          <div className="hidden sm:block font-semibold">Boutique Pro — Twilight</div>
        </div>
        <div className="hidden md:flex gap-6">
          <button className="flex items-center gap-2">🏠 Home</button>
          <button className="flex items-center gap-2">🛍️ Shop</button>
          <button className="flex items-center gap-2">⭐ Collections</button>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-8 py-12">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl font-extrabold leading-tight">ترفيه. أناقة. تجربة تسوق مختلفة.</h1>
          <p className="mt-4 text-gray-300 max-w-xl">ثيم مخصص لمحلات سلة — متوافق مع Twilight SDK.</p>
          <div className="mt-6 flex gap-4">
            <a className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500">تسوّق الآن</a>
            <a className="px-6 py-3 rounded-lg bg-white/6">استكشف</a>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration: 0.8 }}>
          <div className="rounded-2xl p-4 bg-white/5">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 rounded-md bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">IMG</div>
              <div className="h-32 rounded-md bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold">IMG</div>
            </div>
          </div>
        </motion.div>
      </header>
    </div>
  );
}


