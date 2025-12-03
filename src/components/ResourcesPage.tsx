import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar, Clock, User, ExternalLink, Play, TrendingUp, MessageSquare, Link2, Sparkles, Zap, BookOpen, Mail, X } from 'lucide-react';
import { toast } from 'sonner';
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { Footer } from './Footer';
import { SEO, seoConfigs } from './SEO';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  published?: boolean;
}

interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  guest: string;
  topics: string[];
  spotifyUrl: string;
  appleUrl: string;
  image: string;
  published?: boolean;
}

interface ResourceLink {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  published?: boolean;
}

interface ResourcesPageProps {
  initialTab?: 'blog' | 'podcast' | 'links';
}

export function ResourcesPage({ initialTab = 'blog' }: ResourcesPageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>([]);
  const [resourceLinks, setResourceLinks] = useState<ResourceLink[]>([]);
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem('siftiq_blogs');
    const savedPodcasts = localStorage.getItem('siftiq_podcasts');
    const savedLinks = localStorage.getItem('siftiq_links');
    
    if (savedBlogs) {
      const allBlogs = JSON.parse(savedBlogs);
      // Only show published blogs
      setBlogPosts(allBlogs.filter((blog: BlogPost) => blog.published === true));
    } else {
      // Default sample data if no custom content exists
      setBlogPosts([
        {
          id: 1,
          title: "How Hidden Supplier Price Increases Are Killing Your Margins",
          excerpt: "Discover how restaurant groups are losing $250K+ annually from undetected supplier price hikes—and what you can do about it.",
          author: "Sarah Chen",
          date: "Nov 20, 2024",
          readTime: "5 min read",
          category: "Cost Control",
          image: "restaurant technology",
          published: true
        },
        {
          id: 2,
          title: "The True Cost of Manual Invoice Processing",
          excerpt: "Learn why manual invoice processing is costing you more than just time—and how AI can transform your back office operations.",
          author: "Michael Torres",
          date: "Nov 18, 2024",
          readTime: "7 min read",
          category: "Operations",
          image: "business analytics",
          published: true
        },
        {
          id: 3,
          title: "Predictive Labor Scheduling: A Complete Guide for 2024",
          excerpt: "Master the art of labor forecasting with AI. Save 20+ hours per week while improving service quality.",
          author: "Alex Rivera",
          date: "Nov 15, 2024",
          readTime: "10 min read",
          category: "Labor Management",
          image: "team collaboration",
          published: true
        }
      ]);
    }

    if (savedPodcasts) {
      const allPodcasts = JSON.parse(savedPodcasts);
      // Only show published podcasts
      setPodcastEpisodes(allPodcasts.filter((podcast: PodcastEpisode) => podcast.published === true));
    } else {
      // Default sample data if no custom content exists
      setPodcastEpisodes([
        {
          id: 1,
          title: "Ep 12: From Spreadsheets to AI - A Restaurant CFO's Journey",
          description: "Join us as we chat with Jessica Park, CFO of a 45-location restaurant group, about her transition from manual processes to AI-powered operations.",
          duration: "42 min",
          date: "Nov 22, 2024",
          guest: "Jessica Park, CFO at Ember Restaurant Group",
          topics: ["AI Adoption", "Cost Control", "Digital Transformation"],
          spotifyUrl: "#",
          appleUrl: "#",
          image: "podcast studio",
          published: true
        },
        {
          id: 2,
          title: "Ep 11: The Hidden Costs of Food Price Volatility",
          description: "Industry expert Marcus Johnson breaks down how to navigate supplier price changes and protect your margins in uncertain times.",
          duration: "38 min",
          date: "Nov 15, 2024",
          guest: "Marcus Johnson, Supply Chain Consultant",
          topics: ["Food Costs", "Supplier Relations", "Risk Management"],
          spotifyUrl: "#",
          appleUrl: "#",
          image: "business meeting",
          published: true
        }
      ]);
    }

    if (savedLinks) {
      const allLinks = JSON.parse(savedLinks);
      // Only show published links
      setResourceLinks(allLinks.filter((link: ResourceLink) => link.published === true));
    } else {
      // Default sample data if no custom content exists
      setResourceLinks([
        {
          id: 1,
          title: "Sift IQ Whitepaper: Optimizing Restaurant Operations with AI",
          description: "Download our comprehensive guide to learn how AI can revolutionize your restaurant operations.",
          url: "#",
          category: "Whitepaper",
          date: "Nov 10, 2024",
          published: true
        },
        {
          id: 2,
          title: "Sift IQ Case Study: How Ember Restaurant Group Reduced Costs by 20%",
          description: "Read our case study to see how Ember Restaurant Group used Sift IQ to cut costs and improve efficiency.",
          url: "#",
          category: "Case Study",
          date: "Nov 5, 2024",
          published: true
        }
      ]);
    }
  }, []);

  const handleNotifySubmit = async () => {
    if (!notifyEmail || !notifyEmail.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Store email in localStorage (you'll connect to your CRM later)
      const existingEmails = JSON.parse(localStorage.getItem('siftiq_notify_emails') || '[]');
      if (!existingEmails.includes(notifyEmail)) {
        existingEmails.push({
          email: notifyEmail,
          date: new Date().toISOString(),
          source: 'resources_notification'
        });
        localStorage.setItem('siftiq_notify_emails', JSON.stringify(existingEmails));
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('🎉 Thanks! We\'ll notify you when we publish new content.');
      setShowNotifyModal(false);
      setNotifyEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        {...seoConfigs.resources} 
        title={activeTab === 'blog' ? seoConfigs.blog.title : activeTab === 'podcast' ? seoConfigs.podcast.title : seoConfigs.resources.title}
        description={activeTab === 'blog' ? seoConfigs.blog.description : activeTab === 'podcast' ? seoConfigs.podcast.description : seoConfigs.resources.description}
        keywords={activeTab === 'blog' ? seoConfigs.blog.keywords : activeTab === 'podcast' ? seoConfigs.podcast.keywords : seoConfigs.resources.keywords}
      />
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-slate-200">
        <Link to="/">
          <img src={logoImage} alt="NibbleIQ" className="h-10" />
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200 px-4 py-2">
              Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight font-bold">
              Insights for Smarter
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Hospitality Operations
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Expert insights, industry trends, and practical strategies to help you optimize costs, improve margins, and make data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'blog' | 'podcast' | 'links')} className="max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="blog" className="text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="podcast" className="text-lg">
              <Play className="w-5 h-5 mr-2" />
              Podcast
            </TabsTrigger>
            <TabsTrigger value="links" className="text-lg">
              <Link2 className="w-5 h-5 mr-2" />
              Links
            </TabsTrigger>
          </TabsList>

          {/* Blog Content */}
          <TabsContent value="blog" className="space-y-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-white rounded-3xl p-12 md:p-20 border border-orange-100">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
              
              <div className="relative text-center max-w-2xl mx-auto">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl shadow-orange-500/30 mb-8 transform hover:scale-105 transition-transform">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                
                {/* Badge */}
                <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200 px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Content Coming Soon
                </Badge>
                
                {/* Title */}
                <h3 className="text-4xl md:text-5xl mb-6 text-slate-900 tracking-tight">
                  Expert Insights on the Way
                </h3>
                
                {/* Description */}
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We're crafting valuable articles, case studies, and industry insights to help you master hospitality operations and maximize your margins.
                </p>
                
                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">Industry Trends & Analysis</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">Operational Best Practices</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">Real Success Stories</p>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="mt-12">
                  <p className="text-sm text-slate-500 mb-4">Want early access? Get notified when we publish.</p>
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30" onClick={() => setShowNotifyModal(true)}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Podcast Content */}
          <TabsContent value="podcast" className="space-y-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-white rounded-3xl p-12 md:p-20 border border-orange-100">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
              
              <div className="relative text-center max-w-2xl mx-auto">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl shadow-orange-500/30 mb-8 transform hover:scale-105 transition-transform">
                  <Play className="w-12 h-12 text-white" />
                </div>
                
                {/* Badge */}
                <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200 px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Episodes Coming Soon
                </Badge>
                
                {/* Title */}
                <h3 className="text-4xl md:text-5xl mb-6 text-slate-900 tracking-tight">
                  Conversations with Industry Leaders
                </h3>
                
                {/* Description */}
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Get ready for in-depth discussions with restaurant CFOs, operators, and industry experts sharing their strategies for success in modern hospitality.
                </p>
                
                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">CFO Interviews & Insights</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">Growth Strategies & Tactics</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">Tech & Innovation Deep Dives</p>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="mt-12">
                  <p className="text-sm text-slate-500 mb-4">Be the first to know when we launch.</p>
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Notified
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Links Content */}
          <TabsContent value="links" className="space-y-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-white rounded-3xl p-12 md:p-20 border border-orange-100">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
              
              <div className="relative text-center max-w-2xl mx-auto">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl shadow-orange-500/30 mb-8 transform hover:scale-105 transition-transform">
                  <Link2 className="w-12 h-12 text-white" />
                </div>
                
                {/* Badge */}
                <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200 px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Resources Coming Soon
                </Badge>
                
                {/* Title */}
                <h3 className="text-4xl md:text-5xl mb-6 text-slate-900 tracking-tight">
                  Curated Tools & Resources
                </h3>
                
                {/* Description */}
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We're building a comprehensive library of whitepapers, case studies, templates, and tools to help you optimize every aspect of your operations.
                </p>
                
                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">Whitepapers & Guides</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">ROI Calculators & Tools</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-700">Case Studies & Templates</p>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="mt-12">
                  <p className="text-sm text-slate-500 mb-4">Want exclusive access to our resource library?</p>
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join 500+ restaurant operators using NibbleIQ.ai to protect their margins and optimize operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#3D5AFE] hover:bg-slate-50">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Email Notify Modal */}
      <Dialog open={showNotifyModal} onOpenChange={setShowNotifyModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Get Notified</DialogTitle>
            <DialogDescription className="text-base">
              Enter your email to be the first to know when we publish new content.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="notify-email" className="text-sm">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="notify-email"
                  type="email"
                  placeholder="you@example.com"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowNotifyModal(false);
                setNotifyEmail('');
              }}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30"
              onClick={handleNotifySubmit}
              disabled={isSubmitting || !notifyEmail}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Subscribing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200 flex flex-col h-full">
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-orange-50 relative overflow-hidden">
        <img 
          src={`https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&q=80`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
            {post.category}
          </Badge>
          <span className="text-sm text-slate-500 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl mb-3 text-slate-900 line-clamp-2 flex-grow font-bold">
          {post.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
        </div>
        <Link to={`/blog/${post.id}`}>
          <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
            Read More
          </Button>
        </Link>
      </div>
    </Card>
  );
}

function PodcastEpisodeCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200">
      <div className="p-6">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                New
              </Badge>
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {episode.duration}
              </span>
            </div>
            <h3 className="text-xl mb-2 text-slate-900 font-bold">
              {episode.title}
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              {episode.description}
            </p>
            <div className="flex items-center gap-2 mb-4 text-sm text-slate-600">
              <User className="w-4 h-4" />
              <span>{episode.guest}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {episode.topics.map((topic, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Calendar className="w-4 h-4" />
              <span>{episode.date}</span>
            </div>
            <div className="flex gap-3">
              <Link to={`/podcast/${episode.id}`}>
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Listen Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ResourceLinkCard({ link }: { link: ResourceLink }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200">
      <div className="p-6">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Link2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                {link.category}
              </Badge>
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {link.date}
              </span>
            </div>
            <h3 className="text-xl mb-2 text-slate-900 font-bold">
              {link.title}
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              {link.description}
            </p>
            <div className="flex gap-3 mt-4">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Resource
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}