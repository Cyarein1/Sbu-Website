import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: '5 Natural Ways to Keep Pests Out of Your Garden',
    excerpt: 'Discover how companion planting and organic sprays can protect your plants without harsh chemicals.',
    date: 'April 12, 2026',
    author: 'Sarah Green',
    category: 'Pest Prevention',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'The Ultimate Guide to Spring Lawn Care',
    excerpt: 'Prepare your lawn for the growing season with our comprehensive spring maintenance checklist.',
    date: 'March 28, 2026',
    author: 'Mike Woods',
    category: 'Lawn Care',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Identifying Common Tree Diseases Early',
    excerpt: 'Learn the warning signs of fungal infections and infestations before they threaten your trees.',
    date: 'March 15, 2026',
    author: 'Dr. Arbour',
    category: 'Tree Health',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Expert Advice</h2>
              <p className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
                Landscaping Tips & <br /> Pest Prevention
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-all"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-brand-600 font-bold group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
