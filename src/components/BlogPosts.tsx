import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/content";

export default function BlogPosts() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my journey as a full stack
            developer
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 stagger-children">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            Read All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-gray-50 dark:bg-dark-900 rounded-xl overflow-hidden hover-lift hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-semibold mb-4">
          {post.category}
        </span>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 pt-4 border-t border-dark-200 dark:border-dark-700">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formattedDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
        >
          Read More
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
