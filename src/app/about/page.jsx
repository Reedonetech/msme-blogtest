"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated Background Icons */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/business.png"
          alt="Business Icon"
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
          src="/growth.png"
          alt="Growth Icon"
          className="w-full h-full opacity-10"
        />
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:py-20 py-10 max-w-4xl">
        <motion.h1
          className="lg:text-5xl text-[25px] font-extrabold mb-5 text-gray-900 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Msme Blog
        </motion.h1>

        <motion.p
          className="lg:text-xl text-[16px] text-gray-700 mb-10 text-center leading-relaxed lg:max-w-4xl w-full mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Msme Blog is dedicated to empowering entrepreneurs, small business
          owners, and innovators. Our goal is to provide actionable insights,
          trends, and resources that help businesses grow and thrive in a
          competitive market.
        </motion.p>

        <div className="space-y-12 text-center lg:text-start">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="lg:text-2xl text-[20px]  font-semibold text-gray-800 mb-3">
              What We Do
            </h2>
            <p className="lg:text-xl text-[16px] text-gray-700 leading-relaxed">
              We publish articles that cover funding opportunities, business
              strategies, leadership skills, and digital transformation. Our
              mission is to make complex business topics easy to understand and
              practical for MSMEs.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="lg:text-2xl text-[20px] font-semibold text-gray-800 mb-3">
              Our Coverage
            </h2>
            <p className="lg:text-xl text-[16px] text-gray-700 leading-relaxed">
              From startup journeys to policy updates, we cover the challenges
              and opportunities that define small and medium enterprises. Expect
              practical tips, success stories, and expert perspectives that
              inspire growth and innovation.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="lg:text-2xl text-[20px] font-semibold text-gray-800 mb-3">
              Our Vision
            </h2>
            <p className="lg:text-xl text-[16px] text-gray-700 leading-relaxed">
              We believe MSMEs are the backbone of every economy. Our vision is
              to build a knowledge hub where entrepreneurs gain the insights
              they need to scale their businesses, embrace technology, and
              create long-term impact in their communities.
            </p>
          </motion.section>
        </div>

        <motion.div
          className="mt-14 text-center border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="lg:text-xl text-[16px] text-gray-600">
            Thank you for being part of the Msme Blog community. Stay connected
            as we bring you the latest business insights and practical resources
            to support your journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
