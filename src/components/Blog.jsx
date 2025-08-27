import { useState } from "react";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "../constants";
import { FaCalendar, FaClock, FaTag, FaArrowLeft } from "react-icons/fa";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const BlogList = () => (
    <div className="py-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center text-4xl"
      >
        My <span className="text-cyan-400">Blog</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Thoughts, insights, and experiences from my journey in software development, 
        AI research, and building innovative solutions.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {BLOG_POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 p-6 hover:border-cyan-400 transition-colors duration-300 cursor-pointer group"
            onClick={() => setSelectedPost(post)}
          >
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
              <span className="flex items-center gap-1">
                <FaCalendar className="text-xs" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {post.title}
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-700 text-cyan-400 rounded-full text-xs"
                >
                  <FaTag className="text-xs" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-cyan-400 text-sm font-medium group-hover:underline">
              Read more →
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );

  const BlogPost = ({ post }) => (
    <div className="py-10 max-w-4xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setSelectedPost(null)}
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8"
      >
        <FaArrowLeft />
        Back to Blog
      </motion.button>

      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="prose prose-invert prose-lg max-w-none"
      >
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-1">
            <FaCalendar className="text-xs" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-xs" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
            >
              <FaTag className="text-xs" />
              {tag}
            </span>
          ))}
        </div>

        <div 
          className="text-gray-300 leading-relaxed blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.article>
    </div>
  );

  return selectedPost ? <BlogPost post={selectedPost} /> : <BlogList />;
};

export default Blog;
