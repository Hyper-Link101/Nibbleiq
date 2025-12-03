import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("nibbleiq-cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        // Initialize analytics if previously consented
        if (savedPreferences.analytics) {
          initializeAnalytics();
        }
      } catch (e) {
        console.error("Failed to parse cookie preferences", e);
      }
    }
  }, []);

  const initializeAnalytics = () => {
    // Google Analytics is already loaded in App.tsx
    // This just confirms user consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(newPreferences);
    initializeAnalytics();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(newPreferences);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    if (preferences.analytics) {
      initializeAnalytics();
    }
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("nibbleiq-cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#3D5AFE] shadow-2xl animate-slide-up">
        <div className="container mx-auto px-4 py-6 md:py-8">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 text-[#FF5722] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-slate-900 mb-2">We Value Your Privacy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
                    By clicking "Accept All", you consent to our use of cookies. {" "}
                    <Link to="/cookies" className="text-[#3D5AFE] hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(true)}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 w-full sm:w-auto"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Customize
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 w-full sm:w-auto"
                >
                  Reject All
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-900">Cookie Preferences</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Close settings"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-[#3D5AFE] focus:ring-[#3D5AFE] cursor-not-allowed opacity-50"
                  />
                  <div className="flex-1">
                    <h4 className="text-slate-900 mb-1">Necessary Cookies</h4>
                    <p className="text-sm text-slate-600">
                      Essential for the website to function properly. These cookies cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-[#3D5AFE] focus:ring-[#3D5AFE] cursor-pointer"
                  />
                  <div className="flex-1">
                    <h4 className="text-slate-900 mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-slate-600">
                      Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-[#3D5AFE] focus:ring-[#3D5AFE] cursor-pointer"
                  />
                  <div className="flex-1">
                    <h4 className="text-slate-900 mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-slate-600">
                      Used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white w-full sm:flex-1"
                >
                  Save Preferences
                </Button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                You can change your preferences at any time by visiting our{" "}
                <Link to="/cookies" className="text-[#3D5AFE] hover:underline">
                  Cookie Policy
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Slide-up animation styles */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
