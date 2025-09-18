import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

export default function Herosection() {
  return (
    <div className="relative container mx-auto px-4 lg:py-18 py-8 text-center">
        <motion.h1
          className="lg:text-5xl text-[25px] font-extrabold mb-6 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Football Insights
        </motion.h1>

        <motion.p
          className="lg:text-xl text-[16px] text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay updated with football news, match analysis, and player highlights
          from leagues and tournaments around the world.
        </motion.p>

        <motion.div
          className="lg:flex lg:flex-row flex flex-col justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href="/blogs"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-md"
          >
            Browse All Posts
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
  )
}
