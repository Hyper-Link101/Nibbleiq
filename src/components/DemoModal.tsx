import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { BookingSchema } from "./BookingSchema";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export function DemoModal({ open, onOpenChange, source }: DemoModalProps) {
  const [bookingData, setBookingData] = useState<{ name?: string; date?: string; time?: string }>({});

  useEffect(() => {
    if (open) {
      // Setup Koalendar global function
      (window as any).Koalendar = (window as any).Koalendar || function() {
        ((window as any).Koalendar.props = (window as any).Koalendar.props || []).push(arguments);
      };

      // Load widget script if not already loaded
      if (!document.querySelector('script[src="https://koalendar.com/assets/widget.js"]')) {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://koalendar.com/assets/widget.js";
        document.body.appendChild(script);
      }

      // Initialize widget
      // We wrap in a small timeout to ensure DOM is ready if it's being portaled
      setTimeout(() => {
        (window as any).Koalendar('inline', {
          "url": "https://koalendar.com/e/meet-with-nibbleIQ-founders",
          "selector": "#inline-widget-meet-with-nibbleIQ-founders"
        });
      }, 100);
    }
  }, [open]);

  const handleBookingSuccess = () => {
    // Track successful booking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'demo_booking', {
        event_category: 'engagement',
        event_label: source || 'general'
      });
    }
  };

  return (
    <>
      <BookingSchema {...bookingData} />
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[900px] bg-white max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="px-6 pt-6 pb-4">
            <DialogTitle className="text-slate-900">Book Your Live Demo</DialogTitle>
            <DialogDescription className="text-slate-600">
              See how NibbleIQ can save your restaurant $50K+ annually with real-time analytics and intelligent automation.
            </DialogDescription>
          </DialogHeader>
          
          <div className="w-full overflow-y-auto" style={{ maxHeight: 'calc(90vh - 100px)' }}>
            {/* Koalendar Inline Embed */}
            <div id="inline-widget-meet-with-nibbleIQ-founders" style={{ minHeight: '700px', width: '100%' }}></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}