import { Play, MousePointer2, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
              See NibbleIQ in Action
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Watch how restaurant operators are transforming their back-office operations in minutes
            </p>
          </div>

          {/* Video Player Mockup */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700">
            {!isPlaying ? (
              // Video Thumbnail with Play Button
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group cursor-pointer"
                   onClick={() => setIsPlaying(true)}>
                {/* Thumbnail overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D5AFE]/20 to-[#2962FF]/20"></div>
                
                {/* Dashboard preview in background */}
                <div className="absolute inset-0 opacity-30">
                  <img 
                    src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0NjM3NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Play Button */}
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] rounded-full flex items-center justify-center shadow-2xl shadow-[#3D5AFE]/50 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Video duration badge */}
                <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white text-sm">2:30 Product Walkthrough</p>
                </div>
              </div>
            ) : (
              // Video Playing State (Placeholder)
              <div className="aspect-video bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-[#3D5AFE] border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                  <p className="text-white text-sm">Loading demo video...</p>
                  <p className="text-slate-400 text-xs mt-2">In production, this would be your actual product video</p>
                </div>
              </div>
            )}
          </div>

          {/* Demo Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] flex items-center justify-center mb-4">
                <MousePointer2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg text-slate-900 mb-2">Interactive Demo</h3>
              <p className="text-sm text-slate-600">
                Explore the full platform with our guided interactive demo
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg text-slate-900 mb-2">Quick Setup</h3>
              <p className="text-sm text-slate-600">
                Get started in under 15 minutes with our onboarding flow
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg text-slate-900 mb-2">Secure & Compliant</h3>
              <p className="text-sm text-slate-600">
                Bank-level encryption keeps your restaurant data safe
              </p>
            </div>
          </div>

          {/* CTA Below Video */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Ready to transform your restaurant operations?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white shadow-xl shadow-[#3D5AFE]/30 text-lg px-10 py-7"
            >
              Schedule Your Demo
              <Play className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
