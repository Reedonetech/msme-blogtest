'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const mockBlogPosts = [
  {
    id: 1,
    title: "Top 10 Football Transfers of 2024",
    description: "Breaking down the most expensive and impactful transfers this season.",
    content: "The transfer window brought some huge surprises this year. Clubs across Europe made bold moves...",
    date: "2024-08-30"
  },
  {
    id: 2,
    title: "Premier League Title Race",
    description: "Analyzing the top contenders for the EPL trophy this season.",
    content: "The Premier League is shaping up to be one of the most competitive seasons in history...",
    date: "2024-09-10"
  },
  {
    id: 3,
    title: "Rising Young Talents",
    description: "Meet the under-21 players making waves in European football.",
    content: "Scouts and fans alike are keeping an eye on several promising players this year...",
    date: "2024-09-15"
  },
  {
    id: 4,
    title: "Champions League Predictions",
    description: "Who looks set to dominate Europe’s biggest stage?",
    content: "The Champions League group stage is heating up, with underdogs surprising favorites...",
    date: "2024-09-22"
  }
];

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockBlogPosts);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Football Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Link href={`/blogs/${post.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <p className="text-sm text-gray-500">Posted on {post.date}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
