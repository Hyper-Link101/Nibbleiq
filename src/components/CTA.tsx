import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { DemoModal } from "./DemoModal";
import { Timer, MoveRight, CircleCheck, Heart, ChefHat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // TODO: Send email to your backend/CRM
    console.log("Email captured:", email);
    
    // Show success message
    toast.success("Thanks! We'll be in touch within 24 hours.");
    
    // Open the demo modal to collect more info
    setIsDemoModalOpen(true);
    
    // Reset email
    setEmail("");
  };

  const features = [
    "Free 14-day trial with live data",
    "Setup in 48 hours or less",
    "See savings in first week",
    "Cancel anytime, keep insights"
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50/30 relative overflow-hidden">
      {/* Background Restaurant Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762806883627-4bcbfad98a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwcmVzdGF1cmFudCUyMGFtYmlhbmNlfGVufDF8fHx8MTc2NDczNzI3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant ambiance background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl border-2 border-orange-600/50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Beta Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm backdrop-blur-sm border border-orange-600/30">
                  <Heart className="h-4 w-4 fill-orange-400" />
                  Join passionate restaurant owners
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6 text-white font-bold">
                  Ready to <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Stop the Money Leak?</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
                  Get your personalized savings analysis. We'll show you exactly where your money's going—in your first call.
                </p>
                <p className="text-lg text-orange-400 mb-2">
                  <strong>Free demo • No credit card • See results in 30 minutes</strong>
                </p>
                <p className="text-base text-slate-400">
                  Join 500+ operators already saving <strong>$2K-$5K monthly</strong> and getting their weekends back.
                </p>
              </div>

              <div className="max-w-md mx-auto mb-10">
                <div className="flex flex-col gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl shadow-orange-600/30 h-16 px-10 text-lg group w-full"
                    onClick={() => setIsDemoModalOpen(true)}
                  >
                    Get Your Free Savings Analysis
                    <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-sm text-slate-400">
                    <CircleCheck className="inline h-4 w-4 text-green-400 mr-1" />
                    We'll call you within 24 hours with a personalized demo
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-slate-300 text-center lg:text-left mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start gap-2">
                    <CircleCheck className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Modal */}
      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  );
}