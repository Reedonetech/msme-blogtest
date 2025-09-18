"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Floating Football Background */}
      <motion.div
        className="absolute top-20 left-10 w-28 h-28"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/football.png"
          alt="Football"
          className="w-full h-full opacity-10"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-36 h-36"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/football.png"
          alt="Football"
          className="w-full h-full opacity-10"
        />
      </motion.div>

      {/* Hero Section */}
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

      {/* Featured Section */}
      <div className="relative container mx-auto px-4 lg:py-16 py-5">
        <motion.h2
          className="lg:text-3xl text-[25px] font-bold mb-6 text-center text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Featured Football Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center lg:text-start">
          {[
            {
              id: 1,
              title: "Premier League Weekly Review",
              desc: "Highlights and analysis from last week’s Premier League matches.",
              link: "/blogs/1",
            },
            {
              id: 2,
              title: "Top 10 Goals of the Season",
              desc: "A rundown of the most spectacular goals scored this season.",
              link: "/blogs/2",
            },
            {
              id: 3,
              title: "Champions League Predictions",
              desc: "Which teams are favorites to win the Champions League this year.",
              link: "/blogs/3",
            },
          ].map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4">{post.desc}</p>
              <Link
                href={post.link}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
