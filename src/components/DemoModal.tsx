import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  useEffect(() => {
    // Load HubSpot form script when modal opens
    if (open) {
      const script = document.createElement('script');
      script.src = 'https://js-na2.hsforms.net/forms/embed/244445783.js';
      script.defer = true;
      script.onload = () => {
        // HubSpot script loaded successfully
        console.log('HubSpot form script loaded');
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup script when modal closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Live Demo</DialogTitle>
          <DialogDescription className="text-base">
            See how NibbleIQ can save your restaurants $250K+ per location annually with real-time analytics and intelligent automation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {/* HubSpot Form Container */}
          <div 
            className="hs-form-frame" 
            data-region="na2" 
            data-form-id="8d470929-7f79-4a5f-acf7-abeb449c3c4c" 
            data-portal-id="244445783"
          ></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}