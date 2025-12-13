import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, User, ArrowLeft, Share2, Loader2 } from 'lucide-react';
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { INITIAL_BLOG_POSTS, BlogPost } from '../data/blogPosts';
import { toast } from 'sonner';
import { api } from '../utils/api';
import { SEO } from './SEO';

import { getAllContent } from '../lib/mdx';

export function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [MdxContent, setMdxContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true);
        setMdxContent(null);
        
        // 1. Check MDX Content First
        const mdxPosts = getAllContent('blog');
        const mdxMatch = mdxPosts.find(p => p.slug === id);
        
        if (mdxMatch) {
            setPost({
                id: mdxMatch.slug as any, // ID string is fine here
                title: mdxMatch.frontmatter.title,
                slug: mdxMatch.slug,
                excerpt: mdxMatch.frontmatter.excerpt || mdxMatch.frontmatter.description,
                content: '', // Content handled by component
                author: mdxMatch.frontmatter.author || 'NibbleIQ Team',
                date: mdxMatch.frontmatter.date ? new Date(mdxMatch.frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
                readTime: mdxMatch.frontmatter.readTime || '5 min read',
                category: mdxMatch.frontmatter.category || 'Insights',
                image: mdxMatch.frontmatter.image,
                published: mdxMatch.frontmatter.published !== false,
                featuredImage: mdxMatch.frontmatter.featuredImage,
                metaTitle: mdxMatch.frontmatter.metaTitle,
                metaDescription: mdxMatch.frontmatter.metaDescription,
                keywords: mdxMatch.frontmatter.keywords
            });
            setMdxContent(() => mdxMatch.component);
            
            // Get related from MDX + Static
            // For now just MDX related or Static related?
            // Let's mix them for better UX
             const allBlogs = [
                ...mdxPosts.map(p => ({ 
                    ...p.frontmatter, 
                    slug: p.slug,
                    published: p.frontmatter.published !== false
                })), 
                ...INITIAL_BLOG_POSTS
             ];
             
             const related = allBlogs.filter(b => 
                b.slug !== mdxMatch.slug && 
                (b.category === mdxMatch.frontmatter.category) &&
                b.published
             ).slice(0, 3);
             
             setRelatedPosts(related as any);
             setIsLoading(false);
             return;
        }

        // 2. Fetch fresh data from API
        const blogs = await api.getBlogPosts();
        
        // Use API data or fallback to initial data
        const allBlogs: BlogPost[] = (blogs && blogs.length > 0) ? blogs : INITIAL_BLOG_POSTS;
        
        // Try to find by ID (if numeric) or Slug
        let currentPost;
        if (id && !isNaN(Number(id))) {
           currentPost = allBlogs.find(b => b.id === Number(id) && b.published === true);
        } else {
           currentPost = allBlogs.find(b => b.slug === id && b.published === true);
        }
        
        if (currentPost) {
          setPost(currentPost);
          
          // Get related posts (same category, limit 3)
          const related = allBlogs
            .filter(b => 
              b.id !== currentPost.id && 
              b.category === currentPost.category && 
              b.published === true
            )
            .slice(0, 3);
          setRelatedPosts(related);
        } else {
          // If not found by slug, maybe redirect to resources or show 404
          navigate('/resources');
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
        toast.error('Failed to load content');
        navigate('/resources');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadPost();
    }
  }, [id, navigate]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-slate-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt || post.description}
        keywords={post.keywords || (post as any).tags?.join(', ')}
        image={post.image || post.featuredImage}
        type="article"
        article={{
          publishedTime: post.date,
          author: post.author,
          tag: post.category
        }}
        canonical={`https://nibbleiq.ai/blog/${post.slug}`}
      />
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-slate-200">
        <Link to="/">
          <img src={logoImage} alt="NibbleIQ" className="h-10" width="160" height="40" />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/#features" className="text-slate-700 hover:text-slate-900 transition-colors hidden md:block">
            Features
          </Link>
          <Link to="/#how-it-works" className="text-slate-700 hover:text-slate-900 transition-colors hidden md:block">
            How It Works
          </Link>
          <Link to="/resources" className="text-orange-600 hover:text-orange-700 transition-colors hidden md:block">
            Resources
          </Link>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30">
            Book a Demo
          </Button>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/resources">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
              {post.category}
            </Badge>
            <span className="text-sm text-slate-500 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-600 mb-8">
            {post.description}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-900">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <ImageWithFallback 
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          {MdxContent ? (
            <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:rounded-xl prose-img:shadow-lg">
                <MdxContent />
            </div>
          ) : (
            <div 
                className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl mb-8 text-slate-900">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 h-full flex flex-col">
                      <div className="aspect-video bg-gradient-to-br from-slate-100 to-orange-50 relative overflow-hidden">
                        <ImageWithFallback 
                          src={relatedPost.image || `https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&q=80`}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-3 w-fit">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-lg mb-2 text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors font-bold">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                          {relatedPost.description}
                        </p>
                         <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto">
                            <span>{relatedPost.date}</span>
                            <span>•</span>
                            <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Join 500+ restaurant operators using NibbleIQ to protect their margins and optimize operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-50">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}