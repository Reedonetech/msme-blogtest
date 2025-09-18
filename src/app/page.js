"use client";
import { motion } from "framer-motion";
import Navigation from "../app/components/Navigation";
import Footer from "../app/components/footer";
import Featured from "./components/featured";
import Herosection from "./components/herosection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      <div className="relative flex-grow overflow-hidden">
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
        <Herosection />
        
        {/* Featured Section */}
        <Featured />
      </div>

      <Footer />
    </div>
  );
}
