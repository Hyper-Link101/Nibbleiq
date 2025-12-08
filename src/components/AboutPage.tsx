import { Button } from "./ui/button";
import { ArrowLeft, Users, Target, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { DemoModal } from "./DemoModal";
import { useState } from "react";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { SEO, seoConfigs } from "./SEO";

export function AboutPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfigs.about} />
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logoImage} alt="Sift IQ" className="h-8" />
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
          <h1 className="text-slate-900 mb-6">About Sift IQ</h1>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto">
            We're building the intelligence layer that helps hospitality operators turn operational noise into clear, timely decisions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-slate-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 text-lg mb-4">
                [Add your company story here - How did Sift IQ start? What problem were you trying to solve? What inspired you to build this platform?]
              </p>
              <p className="text-slate-700 text-lg mb-4">
                [Share the journey - key milestones, challenges overcome, pivotal moments that shaped the company]
              </p>
              <p className="text-slate-700 text-lg">
                [Where are you today and where are you headed? What's your vision for the future of hospitality intelligence?]
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-20">
          <h2 className="text-slate-900 mb-12 text-center">Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-700">
                [Add your mission statement - What is your core purpose? What impact do you want to have on the hospitality industry?]
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-slate-900 mb-3">Our Values</h3>
              <p className="text-slate-700">
                [Add your core values - What principles guide your work? What do you stand for?]
              </p>
            </div>
          </div>
        </section>

        {/* Why We Built This */}
        <section className="mb-20 bg-slate-50 -mx-4 px-4 py-16 md:rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-200 w-14 h-14 rounded-xl flex items-center justify-center">
                <Lightbulb className="h-7 w-7 text-slate-700" />
              </div>
              <h2 className="text-slate-900">Why We Built Sift IQ</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 text-lg mb-4">
                [Explain the "why" behind Sift IQ - What frustrations or inefficiencies did you observe in hospitality operations? What made you passionate about solving this problem?]
              </p>
              <p className="text-slate-700 text-lg">
                [How does Sift IQ address these challenges differently? What makes your approach unique?]
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12 justify-center">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center">
                <Users className="h-7 w-7 text-orange-600" />
              </div>
              <h2 className="text-slate-900">Meet the Founders</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder 1 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-orange-600 text-2xl">[Photo]</span>
                </div>
                <h3 className="text-slate-900 mb-1">[Founder Name]</h3>
                <p className="text-orange-600 mb-4">[Title/Role]</p>
                <p className="text-slate-700 mb-4">
                  [Brief bio - Background, expertise, why they're passionate about this problem, what they bring to Sift IQ]
                </p>
                <p className="text-slate-600 text-sm">
                  [Fun fact or personal touch]
                </p>
              </div>

              {/* Founder 2 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">[Photo]</span>
                </div>
                <h3 className="text-slate-900 mb-1">[Founder Name]</h3>
                <p className="text-orange-600 mb-4">[Title/Role]</p>
                <p className="text-slate-700 mb-4">
                  [Brief bio - Background, expertise, why they're passionate about this problem, what they bring to Sift IQ]
                </p>
                <p className="text-slate-600 text-sm">
                  [Fun fact or personal touch]
                </p>
              </div>

              {/* Add more founders as needed */}
            </div>
          </div>
        </section>

        {/* Team Culture (Optional) */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-slate-900 mb-6 text-center">Our Team Culture</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 text-lg mb-4">
                [Optional: Describe your team culture - What's it like to work at Sift IQ? What kind of people thrive on your team?]
              </p>
              <p className="text-slate-700 text-lg">
                [What makes your team unique? How do you approach collaboration, innovation, customer service?]
              </p>
            </div>
          </div>
        </section>

        {/* Backed By (Optional) */}
        <section className="mb-20 bg-gradient-to-br from-slate-50 to-white -mx-4 px-4 py-16 md:rounded-3xl border-y md:border border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-slate-900 mb-6">Backed By</h2>
            <p className="text-slate-700 text-lg mb-8">
              [Optional: Add information about investors, advisors, or partners supporting Sift IQ]
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              {/* Add investor/partner logos here */}
              <div className="text-slate-400">[Logo]</div>
              <div className="text-slate-400">[Logo]</div>
              <div className="text-slate-400">[Logo]</div>
              <div className="text-slate-400">[Logo]</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-white">
            <h2 className="text-white mb-4">Join Us on This Journey</h2>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              We're building the future of hospitality intelligence. See how Sift IQ can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50"
                onClick={() => setShowDemoModal(true)}
              >
                Book a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="mailto:hello@nibbleiq.com">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <DemoModal open={showDemoModal} onOpenChange={setShowDemoModal} source="about-page" />
    </div>
  );
}