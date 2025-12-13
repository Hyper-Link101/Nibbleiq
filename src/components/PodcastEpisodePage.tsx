import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, User, ArrowLeft, Play, ExternalLink, Share2 } from 'lucide-react';
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { Footer } from './Footer';
import { toast } from 'sonner';
import { SEO } from './SEO';

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
  published?: boolean;
}

import { getAllContent } from '../lib/mdx';

export function PodcastEpisodePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState<PodcastEpisode | null>(null);
  const [relatedEpisodes, setRelatedEpisodes] = useState<PodcastEpisode[]>([]);
  const [MdxContent, setMdxContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // 1. Check MDX Content First
    const mdxPodcasts = getAllContent('podcast');
    const mdxMatch = mdxPodcasts.find(p => p.slug === id);
    
    if (mdxMatch) {
         setEpisode({
            id: mdxMatch.slug as any,
            title: mdxMatch.frontmatter.title,
            description: mdxMatch.frontmatter.description,
            content: '',
            duration: mdxMatch.frontmatter.duration,
            date: mdxMatch.frontmatter.date ? new Date(mdxMatch.frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
            guest: mdxMatch.frontmatter.guest,
            topics: mdxMatch.frontmatter.topics || [],
            spotifyUrl: mdxMatch.frontmatter.spotifyUrl,
            appleUrl: mdxMatch.frontmatter.appleUrl,
            image: mdxMatch.frontmatter.image,
            published: mdxMatch.frontmatter.published !== false
         });
         setMdxContent(() => mdxMatch.component);
         
         // Related from MDX
         const related = mdxPodcasts
            .filter(p => p.slug !== id && p.frontmatter.published !== false)
            .map(p => ({
                id: p.slug as any,
                title: p.frontmatter.title,
                description: p.frontmatter.description,
                duration: p.frontmatter.duration,
                published: p.frontmatter.published !== false
            }))
            .slice(0, 3);
         setRelatedEpisodes(related as any);
         return;
    }

    const savedPodcasts = localStorage.getItem('siftiq_podcasts');
    if (savedPodcasts) {
      const allEpisodes: PodcastEpisode[] = JSON.parse(savedPodcasts);
      const currentEpisode = allEpisodes.find(e => e.id === Number(id) && e.published === true);
      
      if (currentEpisode) {
        setEpisode(currentEpisode);
        
        // Get related episodes (limit 3, most recent)
        const related = allEpisodes
          .filter(e => e.id !== currentEpisode.id && e.published === true)
          .slice(0, 3);
        setRelatedEpisodes(related);
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

  if (!episode) {
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
      <SEO 
        title={episode.title}
        description={episode.description}
        image={episode.image}
        type="article" 
        article={{
             publishedTime: episode.date,
             author: episode.guest,
             tag: "Podcast"
        }}
        canonical={`https://nibbleiq.ai/podcast/${episode.id}`} 
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

      {/* Episode Header */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
              Podcast
            </Badge>
            <span className="text-sm text-slate-500 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {episode.duration}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
            {episode.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 mb-8">
            {episode.description}
          </p>

          {/* Episode Info */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-200">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900">
                <User className="w-4 h-4" />
                <span>{episode.guest}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                <span>{episode.date}</span>
              </div>
            </div>
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>

          {/* Player Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 mb-12 shadow-xl">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl mb-2">Listen Now</h3>
                <p className="text-orange-50">Available on your favorite podcast platforms</p>
              </div>
            </div>
            <div className="flex gap-3">
              {episode.spotifyUrl && episode.spotifyUrl !== '#' && (
                <a href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50">
                    <Play className="w-4 h-4 mr-2" />
                    Play on Spotify
                  </Button>
                </a>
              )}
              {episode.appleUrl && episode.appleUrl !== '#' && (
                <a href={episode.appleUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apple Podcasts
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Topics */}
          <div className="mb-8">
            <h3 className="text-xl mb-4 text-slate-900">Topics Covered</h3>
            <div className="flex flex-wrap gap-2">
              {episode.topics.map((topic, idx) => (
                <Badge key={idx} variant="outline" className="text-sm">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Show Notes */}
          {(episode.content || MdxContent) && (
            <div className="mb-12">
              <h3 className="text-xl mb-4 text-slate-900">Show Notes</h3>
              {MdxContent ? (
                  <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700">
                    <MdxContent />
                  </div>
              ) : (
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700"
                    dangerouslySetInnerHTML={{ __html: episode.content || '' }}
                  />
              )}
            </div>
          )}
        </div>
      </article>

      {/* Related Episodes */}
      {relatedEpisodes.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl mb-8 text-slate-900">More Episodes</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedEpisodes.map((relatedEpisode) => (
                  <Link 
                    key={relatedEpisode.id} 
                    to={`/podcast/${relatedEpisode.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 h-full">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="p-6">
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-3">
                          {relatedEpisode.duration}
                        </Badge>
                        <h3 className="text-lg mb-2 text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {relatedEpisode.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {relatedEpisode.description}
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