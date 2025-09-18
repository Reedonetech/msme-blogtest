'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            Msme Blog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`hover:text-blue-600 transition-colors ${
                pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className={`hover:text-blue-600 transition-colors ${
                pathname === '/blogs'
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-600'
              }`}
            >
              Blogs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown with Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="space-y-3">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-blue-600 transition-colors ${
                    pathname === '/'
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-blue-600 transition-colors ${
                    pathname === '/blogs'
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  Blogs
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
