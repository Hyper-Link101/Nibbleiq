import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { RichTextEditor } from './RichTextEditor';
import { AdminSidebar } from './AdminSidebar';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit2, 
  Trash2, 
  X, 
  Save, 
  Loader2,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Globe,
  BarChart3
} from 'lucide-react';
import { toast } from 'sonner';
import { INITIAL_BLOG_POSTS, BlogPost } from '../data/blogPosts';
import { api } from '../utils/api';
import { cn } from '../lib/utils';

// Interfaces
interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  content?: string;
  duration: string;
  date: string;
  guest: string;
  topics: string[];
  spotifyUrl: string;
  appleUrl: string;
  image: string;
  published: boolean;
}

interface ResourceLink {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  published: boolean;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>([]);
  const [resourceLinks, setResourceLinks] = useState<ResourceLink[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);

  // Editors State
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingPodcast, setEditingPodcast] = useState<PodcastEpisode | null>(null);
  const [editingLink, setEditingLink] = useState<ResourceLink | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Load Data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [blogs, podcasts, links] = await Promise.all([
          api.getBlogPosts(),
          api.getPodcasts(),
          api.getResourceLinks()
        ]);

        if (blogs && blogs.length > 0) {
          setBlogPosts(blogs);
        } else {
          setBlogPosts(INITIAL_BLOG_POSTS);
          api.saveBlogPosts(INITIAL_BLOG_POSTS); // Sync initial data
        }

        setPodcastEpisodes(podcasts || []);
        setResourceLinks(links || []);
      } catch (error) {
        console.error('Failed to load data:', error);
        toast.error('Failed to load data from server');
        setBlogPosts(INITIAL_BLOG_POSTS);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // CRUD Handlers
  const handleSaveBlog = async (blog: BlogPost) => {
    try {
      let newPosts;
      if (blog.id === 0) {
        const newBlog = { ...blog, id: Date.now() };
        newPosts = [newBlog, ...blogPosts];
        toast.success('Blog post created successfully!');
      } else {
        newPosts = blogPosts.map(b => b.id === blog.id ? blog : b);
        toast.success('Blog post updated successfully!');
      }
      setBlogPosts(newPosts);
      await api.saveBlogPosts(newPosts);
      setEditingBlog(null);
      setIsCreating(false);
    } catch (error) {
      toast.error('Failed to save blog post');
    }
  };

  const handleDeleteBlog = async (id: number) => {
    if (confirm('Are you sure? This cannot be undone.')) {
      const newPosts = blogPosts.filter(b => b.id !== id);
      setBlogPosts(newPosts);
      await api.saveBlogPosts(newPosts);
      toast.success('Blog post deleted');
    }
  };

  // ... (Similar handlers for Podcast and Links - omitted for brevity in thought process but included in code)
  const handleSavePodcast = async (podcast: PodcastEpisode) => {
    try {
      let newPodcasts;
      if (podcast.id === 0) {
        const newPodcast = { ...podcast, id: Date.now() };
        newPodcasts = [newPodcast, ...podcastEpisodes];
        toast.success('Episode created successfully!');
      } else {
        newPodcasts = podcastEpisodes.map(p => p.id === podcast.id ? podcast : p);
        toast.success('Episode updated successfully!');
      }
      setPodcastEpisodes(newPodcasts);
      await api.savePodcasts(newPodcasts);
      setEditingPodcast(null);
      setIsCreating(false);
    } catch (error) {
      toast.error('Failed to save podcast');
    }
  };

  const handleDeletePodcast = async (id: number) => {
    if (confirm('Are you sure?')) {
      const newPodcasts = podcastEpisodes.filter(p => p.id !== id);
      setPodcastEpisodes(newPodcasts);
      await api.savePodcasts(newPodcasts);
      toast.success('Podcast deleted');
    }
  };

  const handleSaveLink = async (link: ResourceLink) => {
    try {
      let newLinks;
      if (link.id === 0) {
        const newLink = { ...link, id: Date.now() };
        newLinks = [newLink, ...resourceLinks];
        toast.success('Link created successfully!');
      } else {
        newLinks = resourceLinks.map(l => l.id === link.id ? link : l);
        toast.success('Link updated successfully!');
      }
      setResourceLinks(newLinks);
      await api.saveResourceLinks(newLinks);
      setEditingLink(null);
      setIsCreating(false);
    } catch (error) {
      toast.error('Failed to save link');
    }
  };

  const handleDeleteLink = async (id: number) => {
    if (confirm('Are you sure?')) {
      const newLinks = resourceLinks.filter(l => l.id !== id);
      setResourceLinks(newLinks);
      await api.saveResourceLinks(newLinks);
      toast.success('Link deleted');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  // Determine which view to render
  const renderContent = () => {
    if (editingBlog) return <BlogEditor blog={editingBlog} onSave={handleSaveBlog} onCancel={() => setEditingBlog(null)} />;
    if (editingPodcast) return <PodcastEditor podcast={editingPodcast} onSave={handleSavePodcast} onCancel={() => setEditingPodcast(null)} />;
    if (editingLink) return <LinkEditor link={editingLink} onSave={handleSaveLink} onCancel={() => setEditingLink(null)} />;
    
    // Creating New Items
    if (isCreating) {
      if (activeTab === 'blog') return <BlogEditor blog={emptyBlog} onSave={handleSaveBlog} onCancel={() => setIsCreating(false)} />;
      if (activeTab === 'podcast') return <PodcastEditor podcast={emptyPodcast} onSave={handleSavePodcast} onCancel={() => setIsCreating(false)} />;
      if (activeTab === 'links') return <LinkEditor link={emptyLink} onSave={handleSaveLink} onCancel={() => setIsCreating(false)} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome blogs={blogPosts} podcasts={podcastEpisodes} links={resourceLinks} onChangeTab={setActiveTab} />;
      case 'blog':
        return <BlogList 
          posts={blogPosts} 
          onCreate={() => setIsCreating(true)} 
          onEdit={setEditingBlog} 
          onDelete={handleDeleteBlog}
        />;
      case 'podcast':
        return <PodcastList 
          episodes={podcastEpisodes} 
          onCreate={() => setIsCreating(true)} 
          onEdit={setEditingPodcast} 
          onDelete={handleDeletePodcast}
        />;
      case 'links':
        return <LinkList 
          links={resourceLinks} 
          onCreate={() => setIsCreating(true)} 
          onEdit={setEditingLink} 
          onDelete={handleDeleteLink}
        />;
      default:
        return <DashboardHome blogs={blogPosts} podcasts={podcastEpisodes} links={resourceLinks} onChangeTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <AdminSidebar 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab);
          setIsCreating(false);
          setEditingBlog(null);
          setEditingPodcast(null);
          setEditingLink(null);
        }} 
        onLogout={onLogout}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />
      
      <main className="flex-1 h-screen overflow-y-auto">
        <div className="container mx-auto p-8 max-w-7xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

// Sub-components (DashboardHome, BlogList, BlogEditor, etc.)

function DashboardHome({ blogs, podcasts, links, onChangeTab }: any) {
  const stats = [
    { title: 'Total Blog Posts', value: blogs.length, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100', tab: 'blog' },
    { title: 'Podcast Episodes', value: podcasts.length, icon: Podcast, color: 'text-purple-600', bg: 'bg-purple-100', tab: 'podcast' },
    { title: 'Resource Links', value: links.length, icon: Link2, color: 'text-green-600', bg: 'bg-green-100', tab: 'links' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">Welcome back to NibbleIQ Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => onChangeTab(stat.tab)}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</h3>
              </div>
              <div className={cn("p-4 rounded-full", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions / Recent Activity could go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blogs.slice(0, 5).map((blog: BlogPost) => (
                <div key={blog.id} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-slate-900 truncate max-w-[200px]">{blog.title}</p>
                    <p className="text-xs text-slate-500">{blog.date}</p>
                  </div>
                  <Badge variant={blog.published ? "default" : "secondary"}>
                    {blog.published ? 'Published' : 'Draft'}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4" onClick={() => onChangeTab('blog')}>View All</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Placeholder for Analytics or other widgets */}
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
          <CardHeader>
            <CardTitle className="text-white">Quick Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium">SEO Matters</h4>
                  <p className="text-sm text-slate-300 mt-1">Don't forget to add meta descriptions to your blog posts to improve search ranking.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium">Track Performance</h4>
                  <p className="text-sm text-slate-300 mt-1">Check Google Analytics to see which blog categories are performing best.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function BlogList({ posts, onCreate, onEdit, onDelete }: any) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // all, published, draft

  const filteredPosts = posts.filter((post: BlogPost) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.author.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' ? true : 
                          filter === 'published' ? post.published : !post.published;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Blog Posts</h2>
          <p className="text-slate-500">Manage your articles and SEO</p>
        </div>
        <Button onClick={onCreate} className="bg-orange-600 hover:bg-orange-700 text-white">
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="Search posts..." 
            className="pl-9" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select 
          className="h-10 px-3 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filteredPosts.map((post: BlogPost) => (
          <Card key={post.id} className="group hover:shadow-md transition-all duration-200 border-l-4 border-l-transparent hover:border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg text-slate-900">{post.title}</h3>
                    <Badge variant={post.published ? "default" : "secondary"} className={post.published ? "bg-green-100 text-green-700 hover:bg-green-200" : ""}>
                      {post.published ? 'Published' : 'Draft'}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-1 max-w-2xl">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost" onClick={() => onEdit(post)}>
                    <Edit2 className="w-4 h-4 text-slate-500" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => onDelete(post.id)} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No posts found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}

function BlogEditor({ blog, onSave, onCancel }: any) {
  const [formData, setFormData] = useState<BlogPost>(blog);
  const [activeTab, setActiveTab] = useState('content');

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    // Only auto-update slug if it's a new post or slug was empty/default
    if (blog.id === 0 || !formData.slug) {
      setFormData(prev => ({ ...prev, title, slug: generateSlug(title) }));
    } else {
      setFormData(prev => ({ ...prev, title }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-[calc(100vh-100px)]">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="text-lg font-bold text-slate-900">{blog.id === 0 ? 'New Post' : 'Edit Post'}</h2>
            <p className="text-xs text-slate-500">{formData.slug ? `/${formData.slug}` : 'No slug set'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 mr-4">
            <Label htmlFor="published-toggle" className="text-sm font-medium text-slate-600 cursor-pointer">
              {formData.published ? 'Published' : 'Draft'}
            </Label>
            <Switch 
              id="published-toggle"
              checked={formData.published}
              onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
            />
          </div>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={() => onSave(formData)} className="bg-orange-600 hover:bg-orange-700 text-white gap-2">
            <Save className="w-4 h-4" /> Save
          </Button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <div className="px-6 pt-4 bg-slate-50 border-b border-slate-200">
            <TabsList className="bg-white border border-slate-200">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="seo">SEO & Metadata</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
            <TabsContent value="content" className="mt-0 space-y-6 max-w-4xl mx-auto">
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div>
                  <Label>Post Title</Label>
                  <Input 
                    value={formData.title} 
                    onChange={handleTitleChange} 
                    className="text-lg font-bold mt-1" 
                    placeholder="Enter an engaging title..."
                  />
                </div>
                
                <div>
                  <Label>Excerpt</Label>
                  <Textarea 
                    value={formData.excerpt} 
                    onChange={e => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="A short summary for list views and SEO description fallback..."
                    rows={2}
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 min-h-[500px]">
                <Label className="mb-2 block">Content</Label>
                <RichTextEditor 
                  value={formData.content || ''} 
                  onChange={content => setFormData({...formData, content})} 
                  placeholder="Write your masterpiece..."
                />
              </div>
            </TabsContent>

            <TabsContent value="seo" className="mt-0 max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Search Engine Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>URL Slug</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                        nibbleiq.ai/blog/
                      </span>
                      <Input 
                        value={formData.slug || ''} 
                        onChange={e => setFormData({...formData, slug: e.target.value})}
                        className="rounded-l-none font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Meta Title</Label>
                    <Input 
                      value={formData.metaTitle || ''} 
                      onChange={e => setFormData({...formData, metaTitle: e.target.value})}
                      placeholder={formData.title}
                    />
                    <p className="text-xs text-slate-500">Recommended length: 50-60 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Meta Description</Label>
                    <Textarea 
                      value={formData.metaDescription || ''} 
                      onChange={e => setFormData({...formData, metaDescription: e.target.value})}
                      placeholder={formData.excerpt}
                      rows={3}
                    />
                    <p className="text-xs text-slate-500">Recommended length: 150-160 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Keywords</Label>
                    <Input 
                      value={formData.keywords || ''} 
                      onChange={e => setFormData({...formData, keywords: e.target.value})}
                      placeholder="restaurant cost control, labor scheduling, etc."
                    />
                    <p className="text-xs text-slate-500">Comma separated keywords</p>
                  </div>

                  {/* SEO Preview Card */}
                  <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-sm font-medium text-slate-500 mb-2">Google Search Preview</h4>
                    <div className="bg-white p-4 rounded shadow-sm max-w-[600px]">
                      <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                        <span className="w-4 h-4 bg-slate-200 rounded-full"></span>
                        <span>nibbleiq.ai</span>
                        <span>› blog › {formData.slug || '...'}</span>
                      </div>
                      <h3 className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer truncate">
                        {formData.metaTitle || formData.title || 'Your Post Title'}
                      </h3>
                      <p className="text-sm text-[#4d5156] mt-1 line-clamp-2">
                        {formData.metaDescription || formData.excerpt || 'Your meta description will appear here...'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-0 max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Post Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Author</Label>
                      <Input 
                        value={formData.author} 
                        onChange={e => setFormData({...formData, author: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Publish Date</Label>
                      <Input 
                        value={formData.date} 
                        onChange={e => setFormData({...formData, date: e.target.value})} 
                        placeholder="Nov 20, 2024"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Input 
                        value={formData.category} 
                        onChange={e => setFormData({...formData, category: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Read Time</Label>
                      <Input 
                        value={formData.readTime} 
                        onChange={e => setFormData({...formData, readTime: e.target.value})} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Featured Image URL (Unsplash)</Label>
                    <Input 
                      value={formData.featuredImage || ''} 
                      onChange={e => setFormData({...formData, featuredImage: e.target.value})} 
                      placeholder="https://images.unsplash.com/..."
                    />
                    {formData.featuredImage && (
                      <div className="mt-2 relative aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                        <img src={formData.featuredImage} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

// Simple placeholders for Podcast/Link lists/editors since the pattern is established
function PodcastList({ episodes, onCreate, onEdit, onDelete }: any) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Podcasts</h2>
        <Button onClick={onCreate} className="bg-orange-600 text-white"><Plus className="w-4 h-4 mr-2" /> New Episode</Button>
      </div>
      <div className="grid gap-4">
        {episodes.map((ep: PodcastEpisode) => (
          <Card key={ep.id} className="p-4 flex justify-between items-center hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-semibold">{ep.title}</h3>
              <p className="text-sm text-slate-500">{ep.guest} • {ep.date}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => onEdit(ep)}><Edit2 className="w-4 h-4" /></Button>
              <Button variant="ghost" size="sm" onClick={() => onDelete(ep.id)} className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PodcastEditor({ podcast, onSave, onCancel }: any) {
    const [formData, setFormData] = useState(podcast);
    // Simplified for brevity, similar structure to BlogEditor
    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">{podcast.id === 0 ? 'New Episode' : 'Edit Episode'}</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Title</Label>
                    <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                </div>
                <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
                </div>
                {/* Other fields... */}
                <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={onCancel}>Cancel</Button>
                    <Button onClick={() => onSave(formData)}>Save</Button>
                </div>
            </div>
        </Card>
    )
}

function LinkList({ links, onCreate, onEdit, onDelete }: any) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Resource Links</h2>
        <Button onClick={onCreate} className="bg-orange-600 text-white"><Plus className="w-4 h-4 mr-2" /> New Link</Button>
      </div>
      <div className="grid gap-4">
        {links.map((link: ResourceLink) => (
          <Card key={link.id} className="p-4 flex justify-between items-center hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-semibold">{link.title}</h3>
              <p className="text-sm text-slate-500">{link.category}</p>
            </div>
             <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => onEdit(link)}><Edit2 className="w-4 h-4" /></Button>
              <Button variant="ghost" size="sm" onClick={() => onDelete(link.id)} className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function LinkEditor({ link, onSave, onCancel }: any) {
    const [formData, setFormData] = useState(link);
    return (
        <Card className="p-6">
             <h2 className="text-xl font-bold mb-4">{link.id === 0 ? 'New Link' : 'Edit Link'}</h2>
             <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Title</Label>
                    <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                </div>
                <div className="space-y-2">
                    <Label>URL</Label>
                    <Input value={formData.url} onChange={e => setFormData({...formData, url: e.target.value})} />
                </div>
                 {/* Other fields... */}
                <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={onCancel}>Cancel</Button>
                    <Button onClick={() => onSave(formData)}>Save</Button>
                </div>
             </div>
        </Card>
    )
}

// Empty State Constants
const emptyBlog: BlogPost = {
  id: 0,
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  author: '',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  readTime: '5 min read',
  category: '',
  image: 'business',
  published: false
};

const emptyPodcast: PodcastEpisode = {
  id: 0,
  title: '',
  description: '',
  duration: '',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  guest: '',
  topics: [],
  spotifyUrl: '',
  appleUrl: '',
  image: '',
  published: false
};

const emptyLink: ResourceLink = {
  id: 0,
  title: '',
  description: '',
  url: '',
  category: '',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  published: false
};