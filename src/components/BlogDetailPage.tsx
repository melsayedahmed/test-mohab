import { useParams, useNavigate } from 'react-router-dom';
import { Clock, User, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.slug === slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!blog) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <button
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">Blog post not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <button
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </button>

        {blog.image_url && (
          <div className="mb-8 rounded-xl overflow-hidden h-96">
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <article>
          <header className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{formatDate(blog.created_at)}</span>
              </div>
              {blog.updated_at !== blog.created_at && (
                <div className="text-sm">
                  Updated {formatDate(blog.updated_at)}
                </div>
              )}
            </div>
          </header>

          <div className="prose dark:prose-invert prose-lg max-w-none">
            <div className="text-gray-800 dark:text-gray-100 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            Back to All Posts
          </button>
        </div>
      </div>
    </div>
  );
}
