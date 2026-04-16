import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/content";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              All Blog Articles
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              Tutorials, experience notes, and practical insights from my
              journey building full stack products.
            </p>
          </div>

          {blogPosts.length === 0 ? (
            <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-semibold text-dark-900 dark:text-white mb-2">
                No articles yet
              </h2>
              <p className="text-dark-600 dark:text-dark-300">
                Blog posts will appear here once published.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-semibold mb-4">
                    {post.category}
                  </span>

                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-dark-600 dark:text-dark-300 mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 pt-4 border-t border-dark-200 dark:border-dark-700">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-5 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                  >
                    Read Article
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
