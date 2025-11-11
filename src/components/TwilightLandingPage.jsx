import React from "react";
import { motion } from "framer-motion";

export default function ModernShopLanding() {
  const products = [
    { id: 1, name: "Premium Watch", price: "$299", color: "from-purple-500 to-pink-500" },
    { id: 2, name: "Designer Bag", price: "$199", color: "from-blue-500 to-cyan-500" },
    { id: 3, name: "Luxury Shoes", price: "$249", color: "from-orange-500 to-red-500" },
    { id: 4, name: "Smart Device", price: "$399", color: "from-green-500 to-emerald-500" },
  ];

  const collections = [
    { title: "New Arrivals", desc: "Latest trending products", icon: "✨", color: "from-purple-500 to-pink-500" },
    { title: "Best Sellers", desc: "Most popular items", icon: "🔥", color: "from-blue-500 to-cyan-500" },
    { title: "Special Offers", desc: "Limited time deals", icon: "💎", color: "from-orange-500 to-red-500" },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Navigation */}
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div className="text-white font-bold text-xl">Swift Commerce</div>
                <div className="text-purple-300 text-xs">Premium Shopping</div>
              </div>
            </motion.div>

            <div className="hidden md:flex gap-8 text-white">
              {["Home", "Shop", "Collections", "About"].map((item, i) => (
                  <motion.button
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1, color: "#a855f7" }}
                      className="font-medium transition-colors"
                  >
                    {item}
                  </motion.button>
              ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/50"
            >
              Cart (0)
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
              <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-6 border border-purple-500/30"
              >
                🎉 New Collection 2024
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Luxury.
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Elegance.
              </span>
                <br />
                Style.
              </h1>

              <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                Discover premium products curated for those who appreciate quality and sophistication.
                Your perfect shopping experience starts here.
              </p>

              <div className="flex gap-4 flex-wrap">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-2xl shadow-purple-500/50"
                >
                  Shop Now →
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg backdrop-blur-sm border border-white/20"
                >
                  Explore Collections
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { num: "10K+", label: "Products" },
                  { num: "50K+", label: "Customers" },
                  { num: "4.9★", label: "Rating" }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="text-center"
                    >
                      <div className="text-3xl font-bold text-white">{stat.num}</div>
                      <div className="text-purple-300 text-sm">{stat.label}</div>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Product Grid */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
            >
              {products.map((product, i) => (
                  <motion.div
                      key={product.id}
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="relative group cursor-pointer"
                  >
                    <div className={`h-64 rounded-2xl bg-gradient-to-br ${product.color} p-6 flex flex-col justify-between shadow-2xl`}>
                      <div className="flex justify-between items-start">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <span className="text-white text-xl">❤️</span>
                        </motion.div>
                        <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                          NEW
                        </div>
                      </div>

                      <div>
                        <div className="text-white font-bold text-lg mb-1">{product.name}</div>
                        <div className="text-white/80 text-2xl font-extrabold">{product.price}</div>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    >
                      <button className="px-6 py-3 rounded-lg bg-white text-gray-900 font-bold">
                        Quick View
                      </button>
                    </motion.div>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Collections */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">Featured Collections</h2>
            <p className="text-xl text-purple-200">Curated selections just for you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, i) => (
                <motion.div
                    key={collection.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                >
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${collection.color} flex items-center justify-center text-4xl mb-6 shadow-lg`}
                    >
                      {collection.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-purple-200 mb-6">{collection.desc}</p>

                    <motion.button
                        whileHover={{ x: 10 }}
                        className="text-purple-400 font-semibold flex items-center gap-2"
                    >
                      Explore <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="relative rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-12 md:p-20 text-center overflow-hidden">
            {/* Animated background circles */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                Ready to Start Shopping?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover your next favorite product today.
              </p>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 rounded-xl bg-white text-purple-600 font-bold text-lg shadow-2xl"
              >
                Get Started Now
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center text-purple-200">
            <p>© 2024 Swift Commerce. All rights reserved.</p>
          </div>
        </div>
      </div>
  );
}
