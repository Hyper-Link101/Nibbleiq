import { MoveRight, CircleCheck, Timer } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { DemoModal } from "./DemoModal";

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
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl border-2 border-[#3D5AFE]/50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3D5AFE]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2962FF]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Beta Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5722]/20 text-[#FF5722] rounded-full text-sm backdrop-blur-sm border border-[#FF5722]/30">
                  <Timer className="h-4 w-4" />
                  Limited Beta Spots Remaining
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6 text-white font-bold">
                  Apply for Beta Access — <span className="text-[#FF5722]">Join the Waitlist</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Be among the first operators to catch hidden price increases, predict labor needs, and protect your margins before issues hit the P&L.
                </p>
                <p className="text-lg text-[#3D5AFE] font-bold">
                  Current beta partners are already catching thousands in hidden costs weekly.
                </p>
              </div>

              <div className="max-w-md mx-auto mb-10">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="flex-1 bg-white/95 border-white/30 text-slate-900 placeholder:text-slate-500 h-14 text-lg focus:bg-white transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white shadow-xl shadow-[#3D5AFE]/30 h-14 px-10 whitespace-nowrap group"
                    onClick={handleEmailSubmit}
                  >
                    Apply for Beta
                    <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  We'll review your application and reach out within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-slate-300 text-center lg:text-left mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start gap-2">
                    <CircleCheck className="h-5 w-5 text-green-400 flex-shrink-0" />
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