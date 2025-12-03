import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "./DemoModal";

interface InlineCTAProps {
  variant?: "features" | "howItWorks" | "testimonials";
}

export function InlineCTA({ variant = "features" }: InlineCTAProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const content = {
    features: {
      icon: Sparkles,
      headline: "See Exactly Where Your Money Goes",
      subheadline: "Get a personalized demo with your actual restaurant data. See your savings potential in 30 minutes.",
      primaryCTA: "Book Your Free Demo",
      secondaryCTA: "Talk to a Restaurant Expert",
      stats: "Average operator finds $2K-$5K in monthly savings • Free, no commitment"
    },
    howItWorks: {
      icon: Calendar,
      headline: "Ready to Get Started?",
      subheadline: "Live in 48 hours. Real insights within a week. Start saving within a month.",
      primaryCTA: "Start Free Trial",
      secondaryCTA: "See a Quick Demo First",
      stats: "No credit card • No setup fees • Cancel anytime"
    },
    testimonials: {
      icon: ArrowRight,
      headline: "Join Restaurant Operators Saving $2K-$5K Monthly",
      subheadline: "Don't let another month of hidden costs slip by. See what they're seeing.",
      primaryCTA: "Get My Free Demo",
      secondaryCTA: "Talk to Our Team",
      stats: "Only 7 founding partner spots left • 50% off first year"
    }
  };

  const current = content[variant];
  const Icon = current.icon;

  return (
    <>
      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}