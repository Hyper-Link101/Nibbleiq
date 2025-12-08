import { Footer } from "./Footer";
import { DemoModal } from "./DemoModal";
import { useState } from "react";
import { toast } from "sonner";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { SEO, seoConfigs } from "./SEO";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Clock, MapPin, ArrowLeft } from "lucide-react";

export function ContactPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // HubSpot Form Submission
      const hubspotData = {
        fields: [
          { name: 'firstname', value: formData.name.split(' ')[0] },
          { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') || formData.name.split(' ')[0] },
          { name: 'email', value: formData.email },
          { name: 'company', value: formData.company },
          { name: 'phone', value: formData.phone },
          { name: 'message', value: formData.message }
        ],
        context: {
          pageUri: window.location.href,
          pageName: 'Contact Us'
        }
      };

      // Replace with your actual HubSpot Portal ID and Form ID for contact form
      const portalId = 'YOUR_PORTAL_ID';
      const formId = 'YOUR_CONTACT_FORM_ID';
      
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hubspotData),
        }
      );

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        
        // Track with Google Analytics
        if (window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form'
          });
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try emailing us directly at hello@nibbleiq.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfigs.contact} />
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logoImage} alt="NibbleIQ" className="h-8" />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto">
            Have questions about NibbleIQ? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-slate-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@restaurant.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Restaurant Group"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-orange-500 hover:bg-orange-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-slate-600 text-sm text-center">
                By submitting this form, you agree to our <Link to="/privacy" className="text-orange-600 hover:text-orange-700">Privacy Policy</Link>
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-slate-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600 mb-2">For general inquiries</p>
                  <a href="mailto:hello@nibbleiq.com" className="text-orange-600 hover:text-orange-700">
                    hello@nibbleiq.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Response Time</h3>
                  <p className="text-slate-600">We typically respond within 24 hours during business days</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">Serving hospitality operators across the United States</p>
                </div>
              </div>
            </div>

            {/* Demo CTA Box */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-white mb-3">Ready to See NibbleIQ in Action?</h3>
              <p className="text-orange-100 mb-6">
                Book a personalized demo and discover how NibbleIQ can transform your restaurant operations.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-white text-orange-600 hover:bg-orange-50"
                onClick={() => setShowDemoModal(true)}
              >
                Book a Demo
              </Button>
            </div>

            {/* Additional Resources */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-slate-900 mb-4">Other Ways to Connect</h3>
              <div className="space-y-3">
                <Link 
                  to="/resources" 
                  className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📚</span>
                  </div>
                  <div>
                    <div className="font-medium">Resources</div>
                    <div className="text-sm text-slate-600">Blog, podcast, and helpful links</div>
                  </div>
                </Link>
                
                <Link 
                  to="/about" 
                  className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm">👋</span>
                  </div>
                  <div>
                    <div className="font-medium">About Us</div>
                    <div className="text-sm text-slate-600">Learn about our story and team</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-2">How quickly will I hear back?</h3>
              <p className="text-slate-700 text-sm">
                We aim to respond to all inquiries within 24 hours during business days (Monday-Friday).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-2">Can I schedule a demo?</h3>
              <p className="text-slate-700 text-sm">
                Absolutely! Click the "Book a Demo" button above or in our contact form to schedule a personalized demo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-2">Do you offer phone support?</h3>
              <p className="text-slate-700 text-sm">
                Yes, phone support is available for existing customers. New inquiries can start via email or our contact form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-2">What information should I include?</h3>
              <p className="text-slate-700 text-sm">
                Tell us about your restaurant or hospitality business, your current challenges, and how we might help.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DemoModal open={showDemoModal} onOpenChange={setShowDemoModal} source="contact-page" />
    </div>
  );
}