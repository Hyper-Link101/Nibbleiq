import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, X } from "lucide-react";
import { DemoModal } from "./DemoModal";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 600px)
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none flex justify-center"
          >
            <div className="bg-slate-900/90 backdrop-blur-md text-white rounded-full shadow-2xl border border-white/10 p-2 pl-6 pr-2 pointer-events-auto flex items-center gap-4 max-w-lg w-full justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-sm">18/25 Founding Spots Filled</span>
                <span className="text-xs text-slate-400">Lock in 50% off for life</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6"
                >
                  Claim Spot
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}
