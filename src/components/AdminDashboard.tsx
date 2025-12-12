import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { RichTextEditor } from './RichTextEditor';
import { 
  Plus, 
  Share2,
  Download,
  Database
} from 'lucide-react';
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { toast } from 'sonner';
import { INITIAL_BLOG_POSTS, BlogPost } from '../data/blogPosts';

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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>([]);
  const [resourceLinks, setResourceLinks] = useState<ResourceLink[]>([]);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingPodcast, setEditingPodcast] = useState<PodcastEpisode | null>(null);
  const [editingLink, setEditingLink] = useState<ResourceLink | null>(null);
  const [isCreatingBlog, setIsCreatingBlog] = useState(false);
  const [isCreatingPodcast, setIsCreatingPodcast] = useState(false);
  const [isCreatingLink, setIsCreatingLink] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedBlogs = localStorage.getItem('siftiq_blogs');
    const savedPodcasts = localStorage.getItem('siftiq_podcasts');
    const savedLinks = localStorage.getItem('siftiq_links');
    
    if (savedBlogs) {
      setBlogPosts(JSON.parse(savedBlogs));
    } else {
      // Load initial data from code if no local changes
      setBlogPosts(INITIAL_BLOG_POSTS);
    }

    if (savedPodcasts) {
      setPodcastEpisodes(JSON.parse(savedPodcasts));
    }
    if (savedLinks) {
      setResourceLinks(JSON.parse(savedLinks));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (blogPosts.length > 0) {
      localStorage.setItem('siftiq_blogs', JSON.stringify(blogPosts));
    }
  }, [blogPosts]);

  useEffect(() => {
    if (podcastEpisodes.length > 0) {
      localStorage.setItem('siftiq_podcasts', JSON.stringify(podcastEpisodes));
    }
  }, [podcastEpisodes]);

  useEffect(() => {
    if (resourceLinks.length > 0) {
      localStorage.setItem('siftiq_links', JSON.stringify(resourceLinks));
    }
  }, [resourceLinks]);

  const handleSaveBlog = (blog: BlogPost) => {
    if (blog.id === 0) {
      // New blog
      const newBlog = { ...blog, id: Date.now() };
      setBlogPosts([newBlog, ...blogPosts]);
      toast.success('Blog post created successfully!');
    } else {
      // Update existing
      setBlogPosts(blogPosts.map(b => b.id === blog.id ? blog : b));
      toast.success('Blog post updated successfully!');
    }
    setEditingBlog(null);
    setIsCreatingBlog(false);
  };

  const handleDeleteBlog = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogPosts(blogPosts.filter(b => b.id !== id));
      toast.success('Blog post deleted');
    }
  };

  const handleSavePodcast = (podcast: PodcastEpisode) => {
    if (podcast.id === 0) {
      // New podcast
      const newPodcast = { ...podcast, id: Date.now() };
      setPodcastEpisodes([newPodcast, ...podcastEpisodes]);
      toast.success('Podcast episode created successfully!');
    } else {
      // Update existing
      setPodcastEpisodes(podcastEpisodes.map(p => p.id === podcast.id ? podcast : p));
      toast.success('Podcast episode updated successfully!');
    }
    setEditingPodcast(null);
    setIsCreatingPodcast(false);
  };

  const handleDeletePodcast = (id: number) => {
    if (confirm('Are you sure you want to delete this podcast episode?')) {
      setPodcastEpisodes(podcastEpisodes.filter(p => p.id !== id));
      toast.success('Podcast episode deleted');
    }
  };

  const handleSaveLink = (link: ResourceLink) => {
    if (link.id === 0) {
      // New link
      const newLink = { ...link, id: Date.now() };
      setResourceLinks([newLink, ...resourceLinks]);
      toast.success('Resource link created successfully!');
    } else {
      // Update existing
      setResourceLinks(resourceLinks.map(l => l.id === link.id ? link : l));
      toast.success('Resource link updated successfully!');
    }
    setEditingLink(null);
    setIsCreatingLink(false);
  };

  const handleDeleteLink = (id: number) => {
    if (confirm('Are you sure you want to delete this resource link?')) {
      setResourceLinks(resourceLinks.filter(l => l.id !== id));
      toast.success('Resource link deleted');
    }
  };

  const toggleBlogPublish = (id: number) => {
    setBlogPosts(blogPosts.map(b => 
      b.id === id ? { ...b, published: !b.published } : b
    ));
    toast.success('Publication status updated');
  };

  const togglePodcastPublish = (id: number) => {
    setPodcastEpisodes(podcastEpisodes.map(p => 
      p.id === id ? { ...p, published: !p.published } : p
    ));
    toast.success('Publication status updated');
  };

  const toggleLinkPublish = (id: number) => {
    setResourceLinks(resourceLinks.map(l => 
      l.id === id ? { ...l, published: !l.published } : l
    ));
    toast.success('Publication status updated');
  };

  const handleExportData = () => {
    const data = `export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featuredImage?: string;
  published?: boolean;
}

export const INITIAL_BLOG_POSTS: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`;

    navigator.clipboard.writeText(data);
    toast.success('Data copied to clipboard! Paste it into src/data/blogPosts.ts');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="NibbleIQ" className="h-8" width="128" height="32" />
            <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">Admin Panel</Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={handleExportData}>
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Link to="/resources">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Live Site
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-slate-900">Content Management</h1>
          <p className="text-slate-600">Manage your blog posts, podcast episodes, and resource links</p>
        </div>

        <Tabs defaultValue="blog" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="blog">
              <FileText className="w-4 h-4 mr-2" />
              Blog Posts ({blogPosts.length})
            </TabsTrigger>
            <TabsTrigger value="podcast">
              <Podcast className="w-4 h-4 mr-2" />
              Podcasts ({podcastEpisodes.length})
            </TabsTrigger>
            <TabsTrigger value="link">
              <Link2 className="w-4 h-4 mr-2" />
              Links ({resourceLinks.length})
            </TabsTrigger>
          </TabsList>

          {/* Blog Posts Tab */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-slate-900">Blog Posts</h2>
              <Button 
                onClick={() => setIsCreatingBlog(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
            </div>

            {(isCreatingBlog || editingBlog) && (
              <BlogEditor
                blog={editingBlog || {
                  id: 0,
                  title: '',
                  excerpt: '',
                  content: '',
                  author: '',
                  date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                  readTime: '5 min read',
                  category: '',
                  image: 'business meeting',
                  published: false
                }}
                onSave={handleSaveBlog}
                onCancel={() => {
                  setEditingBlog(null);
                  setIsCreatingBlog(false);
                }}
              />
            )}

            <div className="grid gap-4">
              {blogPosts.map((blog) => (
                <Card key={blog.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg text-slate-900">{blog.title}</h3>
                        <Badge variant={blog.published ? "default" : "outline"}>
                          {blog.published ? 'Published' : 'Draft'}
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                          {blog.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{blog.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {blog.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {blog.date}
                        </span>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleBlogPublish(blog.id)}
                      >
                        {blog.published ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingBlog(blog)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              {blogPosts.length === 0 && (
                <Card className="p-12 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p className="text-slate-600 mb-4">No blog posts yet</p>
                  <Button onClick={() => setIsCreatingBlog(true)}>
                    Create Your First Blog Post
                  </Button>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Podcast Episodes Tab */}
          <TabsContent value="podcast" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-slate-900">Podcast Episodes</h2>
              <Button 
                onClick={() => setIsCreatingPodcast(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Episode
              </Button>
            </div>

            {(isCreatingPodcast || editingPodcast) && (
              <PodcastEditor
                podcast={editingPodcast || {
                  id: 0,
                  title: '',
                  description: '',
                  duration: '45 min',
                  date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                  guest: '',
                  topics: [],
                  spotifyUrl: '',
                  appleUrl: '',
                  image: 'podcast studio',
                  published: false
                }}
                onSave={handleSavePodcast}
                onCancel={() => {
                  setEditingPodcast(null);
                  setIsCreatingPodcast(false);
                }}
              />
            )}

            <div className="grid gap-4">
              {podcastEpisodes.map((episode) => (
                <Card key={episode.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg text-slate-900">{episode.title}</h3>
                        <Badge variant={episode.published ? "default" : "outline"}>
                          {episode.published ? 'Published' : 'Draft'}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{episode.description}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {episode.guest}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {episode.date}
                        </span>
                        <span>{episode.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {episode.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => togglePodcastPublish(episode.id)}
                      >
                        {episode.published ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingPodcast(episode)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeletePodcast(episode.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              {podcastEpisodes.length === 0 && (
                <Card className="p-12 text-center">
                  <Podcast className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p className="text-slate-600 mb-4">No podcast episodes yet</p>
                  <Button onClick={() => setIsCreatingPodcast(true)}>
                    Create Your First Episode
                  </Button>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Resource Links Tab */}
          <TabsContent value="link" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-slate-900">Resource Links</h2>
              <Button 
                onClick={() => setIsCreatingLink(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Link
              </Button>
            </div>

            {(isCreatingLink || editingLink) && (
              <LinkEditor
                link={editingLink || {
                  id: 0,
                  title: '',
                  description: '',
                  url: '',
                  category: '',
                  date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                  published: false
                }}
                onSave={handleSaveLink}
                onCancel={() => {
                  setEditingLink(null);
                  setIsCreatingLink(false);
                }}
              />
            )}

            <div className="grid gap-4">
              {resourceLinks.map((link) => (
                <Card key={link.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg text-slate-900">{link.title}</h3>
                        <Badge variant={link.published ? "default" : "outline"}>
                          {link.published ? 'Published' : 'Draft'}
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                          {link.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{link.description}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {link.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleLinkPublish(link.id)}
                      >
                        {link.published ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingLink(link)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteLink(link.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              {resourceLinks.length === 0 && (
                <Card className="p-12 text-center">
                  <Link2 className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p className="text-slate-600 mb-4">No resource links yet</p>
                  <Button onClick={() => setIsCreatingLink(true)}>
                    Create Your First Link
                  </Button>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Blog Editor Component
function BlogEditor({ blog, onSave, onCancel }: { 
  blog: BlogPost; 
  onSave: (blog: BlogPost) => void; 
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(blog);

  return (
    <Card className="p-6 bg-slate-50 border-2 border-orange-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-slate-900">
          {blog.id === 0 ? 'Create New Blog Post' : 'Edit Blog Post'}
        </h3>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter blog post title"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              placeholder="Author name"
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g., Cost Control"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="readTime">Read Time</Label>
            <Input
              id="readTime"
              value={formData.readTime}
              onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
              placeholder="e.g., 5 min read"
            />
          </div>
          <div>
            <Label htmlFor="image">Image Search Term</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="e.g., restaurant technology"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Brief summary of the blog post"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="content">Full Content</Label>
          <RichTextEditor
            value={formData.content}
            onChange={(value) => setFormData({ ...formData, content: value })}
            placeholder="Full blog post content"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button 
            onClick={() => onSave(formData)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Blog Post
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Podcast Editor Component
function PodcastEditor({ podcast, onSave, onCancel }: { 
  podcast: PodcastEpisode; 
  onSave: (podcast: PodcastEpisode) => void; 
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(podcast);
  const [topicInput, setTopicInput] = useState('');

  const addTopic = () => {
    if (topicInput.trim()) {
      setFormData({ 
        ...formData, 
        topics: [...formData.topics, topicInput.trim()] 
      });
      setTopicInput('');
    }
  };

  const removeTopic = (index: number) => {
    setFormData({
      ...formData,
      topics: formData.topics.filter((_, i) => i !== index)
    });
  };

  return (
    <Card className="p-6 bg-slate-50 border-2 border-orange-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-slate-900">
          {podcast.id === 0 ? 'Create New Episode' : 'Edit Episode'}
        </h3>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="episode-title">Episode Title</Label>
          <Input
            id="episode-title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Ep 13: Restaurant Tech Trends"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Episode description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="guest">Guest</Label>
            <Input
              id="guest"
              value={formData.guest}
              onChange={(e) => setFormData({ ...formData, guest: e.target.value })}
              placeholder="Guest name and title"
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              placeholder="e.g., 45 min"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="spotifyUrl">Spotify URL</Label>
            <Input
              id="spotifyUrl"
              value={formData.spotifyUrl}
              onChange={(e) => setFormData({ ...formData, spotifyUrl: e.target.value })}
              placeholder="https://open.spotify.com/..."
            />
          </div>
          <div>
            <Label htmlFor="appleUrl">Apple Podcasts URL</Label>
            <Input
              id="appleUrl"
              value={formData.appleUrl}
              onChange={(e) => setFormData({ ...formData, appleUrl: e.target.value })}
              placeholder="https://podcasts.apple.com/..."
            />
          </div>
        </div>

        <div>
          <Label htmlFor="topics">Topics</Label>
          <div className="flex gap-2 mb-2">
            <Input
              id="topics"
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTopic())}
              placeholder="Add a topic and press Enter"
            />
            <Button type="button" onClick={addTopic} variant="outline">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.topics.map((topic, idx) => (
              <Badge key={idx} className="bg-orange-100 text-orange-700 border-orange-200">
                {topic}
                <button
                  onClick={() => removeTopic(idx)}
                  className="ml-2 hover:text-orange-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="podcast-content">Show Notes (Optional)</Label>
          <RichTextEditor
            value={formData.content || ''}
            onChange={(value) => setFormData({ ...formData, content: value })}
            placeholder="Add detailed show notes, timestamps, links, etc."
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button 
            onClick={() => onSave(formData)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Episode
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Link Editor Component
function LinkEditor({ link, onSave, onCancel }: { 
  link: ResourceLink; 
  onSave: (link: ResourceLink) => void; 
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(link);

  return (
    <Card className="p-6 bg-slate-50 border-2 border-orange-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-slate-900">
          {link.id === 0 ? 'Create New Link' : 'Edit Link'}
        </h3>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter link title"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g., Cost Control"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Brief description of the link"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            placeholder="https://example.com/..."
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button 
            onClick={() => onSave(formData)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Link
          </Button>
        </div>
      </div>
    </Card>
  );
}