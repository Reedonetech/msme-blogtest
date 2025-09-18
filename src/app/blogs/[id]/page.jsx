'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const mockBlogPosts = [
  {
    id: 1,
    title: "Top 10 Football Transfers of 2024",
    description: "Breaking down the most expensive and impactful transfers this season.",
    content: "The transfer window brought some huge surprises this year. Clubs across Europe made bold moves...",
    date: "2024-08-30",
    author: "Football Insider",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "Premier League Title Race",
    description: "Analyzing the top contenders for the EPL trophy this season.",
    content: "The Premier League is shaping up to be one of the most competitive seasons in history...",
    date: "2024-09-10",
    author: "Sports Analyst",
    readTime: "5 min read"
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
  },
];

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = mockBlogPosts.find(p => p.id === parseInt(params.id));
    setPost(foundPost);
  }, [params.id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Post not found
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
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blogs" className="text-blue-500 hover:text-blue-700 font-medium mb-6 inline-block">
          ← Back to Msme Blogs
        </Link>

        <motion.article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <p className="text-gray-600 mb-6 text-lg">{post.description}</p>

            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <motion.div
              className="prose max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-gray-700 leading-relaxed">{post.content}</p>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
