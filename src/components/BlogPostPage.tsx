import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featuredImage?: string;
  published?: boolean;
}

export function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedBlogs = localStorage.getItem('siftiq_blogs');
    if (savedBlogs) {
      const allBlogs: BlogPost[] = JSON.parse(savedBlogs);
      const currentPost = allBlogs.find(b => b.id === Number(id) && b.published === true);
      
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
        navigate('/resources');
      }
    } else {
      navigate('/resources');
    }
  }, [id, navigate]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard!');
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-slate-900 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
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
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
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
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
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
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 h-full">
                      <div className="aspect-video bg-gradient-to-br from-slate-100 to-orange-50" />
                      <div className="p-6">
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-3">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-lg mb-2 text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
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