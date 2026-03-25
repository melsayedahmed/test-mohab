import { useNavigate } from 'react-router-dom';
import { Clock, User, ArrowRight, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';
import { blogs } from '../data/blogs';

export default function BlogsPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<'list' | 'grid'>('list');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Thoughts, insights, and stories about web development, project management, and more
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-8">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-md transition ${
                  view === 'list'
                    ? 'bg-white dark:bg-gray-700 shadow'
                    : 'text-gray-500'
                }`}
              >
                <List size={18} />
              </button>

              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-md transition ${
                  view === 'grid'
                    ? 'bg-white dark:bg-gray-700 shadow'
                    : 'text-gray-500'
                }`}
              >
                <LayoutGrid size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          {blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div
              className={
                view === 'list'
                  ? 'space-y-6'
                  : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
              }
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                  className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* GRID VIEW */}
                  {view === 'grid' ? (
                    <>
                      {blog.image_url && (
                        <img
                          src={blog.image_url}
                          alt={blog.title}
                          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}

                      <div className="p-6 flex flex-col h-full">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {blog.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                          {blog.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <User size={14} />
                            <span>{blog.author}</span>
                          </div>
                          <ArrowRight
                            size={18}
                            className="text-blue-600 dark:text-cyan-400 group-hover:translate-x-2 transition-transform"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    /* LIST VIEW */
                    <div className="grid md:grid-cols-3 gap-0">
                      {blog.image_url && (
                        <div className="md:col-span-1 h-48 md:h-auto overflow-hidden">
                          <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div
                        className={`p-6 md:p-8 flex flex-col justify-between ${
                          blog.image_url ? 'md:col-span-2' : 'md:col-span-3'
                        }`}
                      >
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                            {blog.title}
                          </h2>

                          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                            {blog.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <User size={16} />
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>{formatDate(blog.created_at)}</span>
                            </div>
                          </div>

                          <ArrowRight
                            size={20}
                            className="text-blue-600 dark:text-cyan-400 group-hover:translate-x-2 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
