"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated Football Background */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32"
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
        className="absolute bottom-20 right-10 w-40 h-40"
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

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 max-w-4xl">
        <motion.h1
          className="text-5xl font-extrabold mb-8 text-gray-900 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Reedone Blog
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 mb-10 text-center leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Reedone Blog is your home for professional football analysis and
          insights. We deliver content that helps fans understand the game on a
          deeper level while staying informed about the latest news and trends.
        </motion.p>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We break down matches, highlight standout players, and explain
              tactical approaches in football. From local leagues to
              international competitions, our goal is to keep readers engaged
              and informed with reliable football coverage.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Coverage
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Expect articles on league games, tournaments, transfer news, and
              the strategies shaping football’s future. Whether it’s Champions
              League nights or grassroots stories, Reedone Blog delivers
              balanced and thoughtful reporting.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Football is more than ninety minutes. It is teamwork, discipline,
              and passion. At Reedone Blog, we want readers to enjoy the sport
              as fans and also gain knowledge that helps them appreciate the
              game’s beauty in every pass, goal, and tactical decision.
            </p>
          </motion.section>
        </div>

        <motion.div
          className="mt-14 text-center border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-lg text-gray-600">
            Thank you for being part of the Reedone Blog community. Stay
            connected as we bring you the latest stories and professional
            insights from the football world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
