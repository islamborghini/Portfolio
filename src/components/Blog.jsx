import { useState } from "react";
import { BLOG_POSTS } from "../constants";
import { FaArrowLeft } from "react-icons/fa";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (!BLOG_POSTS || BLOG_POSTS.length === 0) {
    return (
      <section id="blog">
        <h2 className="text-3xl font-medium text-neutral-100 mb-6">Blog</h2>
        <p className="text-base text-neutral-500">No posts yet.</p>
      </section>
    );
  }

  if (selectedPost) {
    return (
      <section id="blog">
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors mb-6"
        >
          <FaArrowLeft className="text-xs" />
          Back to Blog
        </button>

        <article>
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
            <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>&bull;</span>
            <span>{selectedPost.readTime}</span>
          </div>
          <h1 className="text-3xl font-medium text-neutral-100 mb-4">{selectedPost.title}</h1>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {selectedPost.tags.map((tag) => (
              <span key={tag} className="text-sm px-2.5 py-0.5 rounded-full border border-neutral-700 text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
          <div
            className="text-base text-neutral-400 leading-relaxed blog-content"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
        </article>
      </section>
    );
  }

  return (
    <section id="blog">
      <h2 className="text-3xl font-medium text-neutral-100 mb-6">Blog</h2>
      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="rounded-lg border border-neutral-800 p-5 hover:border-neutral-700 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-2">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-base font-medium text-neutral-100 mb-1 group-hover:text-white">
              {post.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-3">{post.excerpt}</p>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm px-2.5 py-0.5 rounded-full border border-neutral-700 text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
