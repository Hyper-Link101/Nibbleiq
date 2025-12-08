import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { SEO, seoConfigs } from "./SEO";

export function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfigs.cookies} />
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logoImage} alt="Sift IQ" className="h-8" width="128" height="32" />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-slate-900 mb-4">Cookie Policy</h1>
          <p className="text-slate-600">Last updated: January 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">What Are Cookies?</h2>
            <p className="text-slate-700 mb-4">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide useful features, and deliver information to website owners.
            </p>
            <p className="text-slate-700">
              At Sift IQ, we use cookies and similar tracking technologies to enhance your experience, understand how you use our platform, and improve our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Essential Cookies</h3>
            <p className="text-slate-700 mb-4">
              These cookies are necessary for the platform to function properly. They enable core functionality such as:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>User authentication and security</li>
              <li>Session management</li>
              <li>Load balancing</li>
              <li>Secure form submissions</li>
            </ul>
            <p className="text-slate-700 mb-6">
              <strong>Duration:</strong> Session cookies (deleted when you close your browser) or persistent cookies (stored for a specific period)
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Analytics Cookies</h3>
            <p className="text-slate-700 mb-4">
              We use analytics cookies to understand how visitors interact with our platform. This helps us improve user experience and identify issues. These cookies collect information such as:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Pages visited and features used</li>
              <li>Time spent on the platform</li>
              <li>Navigation patterns</li>
              <li>Error messages encountered</li>
            </ul>
            <p className="text-slate-700 mb-6">
              <strong>Third-party services:</strong> Google Analytics
              <br />
              <strong>Duration:</strong> Up to 2 years
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Functional Cookies</h3>
            <p className="text-slate-700 mb-4">
              These cookies enable enhanced functionality and personalization, such as:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Remembering your preferences and settings</li>
              <li>Customizing your dashboard layout</li>
              <li>Saving your notification preferences</li>
              <li>Storing your language selection</li>
            </ul>
            <p className="text-slate-700 mb-6">
              <strong>Duration:</strong> Up to 1 year
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Marketing Cookies</h3>
            <p className="text-slate-700 mb-4">
              With your consent, we may use marketing cookies to deliver relevant advertisements and measure campaign effectiveness. These cookies:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Track visits to our website from ads</li>
              <li>Limit how many times you see an ad</li>
              <li>Measure ad campaign performance</li>
              <li>Remember that you've visited our site</li>
            </ul>
            <p className="text-slate-700 mb-6">
              <strong>Third-party services:</strong> Google Ads, LinkedIn Ads, Facebook Pixel
              <br />
              <strong>Duration:</strong> Up to 1 year
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Other Tracking Technologies</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Local Storage</h3>
            <p className="text-slate-700 mb-4">
              We use browser local storage to store data locally on your device for improved performance and offline functionality. This may include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Cached dashboard data</li>
              <li>User preferences</li>
              <li>Temporary form data</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Web Beacons and Pixels</h3>
            <p className="text-slate-700 mb-4">
              We may use web beacons (also called pixels or tracking pixels) in our emails and on our platform to track whether messages have been opened and links have been clicked.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Session Replay Tools</h3>
            <p className="text-slate-700">
              We may use session replay tools to record and analyze how users interact with our platform. This helps us identify usability issues and improve the user experience. Sensitive information is automatically masked in these recordings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Third-Party Cookies</h2>
            <p className="text-slate-700 mb-4">
              Some cookies on our platform are set by third-party services we use:
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-slate-900 mb-2">Google Analytics</h4>
                <p className="text-slate-700 text-sm">Used to analyze website traffic and user behavior</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm">Privacy Policy</a>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-slate-900 mb-2">HubSpot</h4>
                <p className="text-slate-700 text-sm">Used for form submissions and CRM functionality</p>
                <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm">Privacy Policy</a>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-slate-900 mb-2">Intercom</h4>
                <p className="text-slate-700 text-sm">Used for customer support chat</p>
                <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm">Privacy Policy</a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Managing Your Cookie Preferences</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Browser Settings</h3>
            <p className="text-slate-700 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete cookies after each browsing session</li>
              <li>Make exceptions for specific websites</li>
            </ul>
            <p className="text-slate-700 mb-6">
              Here are links to cookie management guides for popular browsers:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Impact of Disabling Cookies</h3>
            <p className="text-slate-700 mb-4">
              Please note that disabling cookies may affect the functionality of Sift IQ and prevent you from using certain features. Essential cookies cannot be disabled if you want to use our platform.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Opt-Out of Analytics</h3>
            <p className="text-slate-700 mb-4">
              You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Do Not Track Signals</h3>
            <p className="text-slate-700">
              Some browsers have a "Do Not Track" (DNT) feature that signals websites you visit that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we will update this policy if standards are established.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Cookies Used on Sift IQ</h2>
            <p className="text-slate-700 mb-4">
              Below is a detailed list of cookies we use:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left">Cookie Name</th>
                    <th className="border border-slate-300 p-3 text-left">Purpose</th>
                    <th className="border border-slate-300 p-3 text-left">Type</th>
                    <th className="border border-slate-300 p-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-300 p-3">siftiq_session</td>
                    <td className="border border-slate-300 p-3">Manages user session</td>
                    <td className="border border-slate-300 p-3">Essential</td>
                    <td className="border border-slate-300 p-3">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3">siftiq_auth</td>
                    <td className="border border-slate-300 p-3">Authentication token</td>
                    <td className="border border-slate-300 p-3">Essential</td>
                    <td className="border border-slate-300 p-3">7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3">siftiq_prefs</td>
                    <td className="border border-slate-300 p-3">Stores user preferences</td>
                    <td className="border border-slate-300 p-3">Functional</td>
                    <td className="border border-slate-300 p-3">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3">_ga</td>
                    <td className="border border-slate-300 p-3">Google Analytics ID</td>
                    <td className="border border-slate-300 p-3">Analytics</td>
                    <td className="border border-slate-300 p-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3">_gid</td>
                    <td className="border border-slate-300 p-3">Google Analytics session ID</td>
                    <td className="border border-slate-300 p-3">Analytics</td>
                    <td className="border border-slate-300 p-3">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3">hubspotutk</td>
                    <td className="border border-slate-300 p-3">HubSpot visitor tracking</td>
                    <td className="border border-slate-300 p-3">Marketing</td>
                    <td className="border border-slate-300 p-3">13 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Mobile Applications</h2>
            <p className="text-slate-700">
              If you access Sift IQ through a mobile application, we may use similar technologies to collect information about your device and usage. You can control these settings through your device's privacy settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Updates to This Policy</h2>
            <p className="text-slate-700">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">More Information</h2>
            <p className="text-slate-700 mb-4">
              For more information about how we process your data, please see our <Link to="/privacy" className="text-orange-600 hover:text-orange-700">Privacy Policy</Link>.
            </p>
            <p className="text-slate-700">
              For general information about cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">www.allaboutcookies.org</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> <a href="mailto:privacy@nibbleiq.com" className="text-orange-600 hover:text-orange-700">privacy@nibbleiq.com</a></p>
              <p className="text-slate-700"><strong>General Contact:</strong> <a href="mailto:hello@nibbleiq.com" className="text-orange-600 hover:text-orange-700">hello@nibbleiq.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}