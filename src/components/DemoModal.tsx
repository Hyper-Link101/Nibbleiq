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
            {/* Koalendar Embed */}
            <iframe
              src="https://koalendar.com/e/meet-with-nibble-iq-founders"
              width="100%"
              height="700"
              frameBorder="0"
              style={{ border: 'none', minHeight: '700px' }}
              title="Book a Demo with NibbleIQ"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}