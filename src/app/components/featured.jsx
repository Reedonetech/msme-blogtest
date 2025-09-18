import Link from "next/link";
import { motion } from "framer-motion";
import { mockBlogPosts } from "../../data/mockBlogPosts";

export default function Featured() {
  const featuredPosts = mockBlogPosts.slice(0, 3); // pick first 3 or filter

  return (
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
        {featuredPosts.map((post, index) => (
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
            <p className="text-gray-700 mb-4">{post.description}</p>
            <Link
              href={`/blogs/${post.id}`}
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
