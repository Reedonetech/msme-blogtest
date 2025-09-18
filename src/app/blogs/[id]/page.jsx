'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '../../components/footer';
import { mockBlogPosts } from '@/data/mockBlogPosts';

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
    <div className="flex flex-col min-h-screen bg-gray-50">
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
      <Footer />
    </div>
  );
}
