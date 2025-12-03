import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { SEO, seoConfigs } from "./SEO";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfigs.privacy} />
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logoImage} alt="Sift IQ" className="h-8" />
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
          <h1 className="text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: January 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 mb-4">
              At Sift IQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our hospitality intelligence platform and services.
            </p>
            <p className="text-slate-700">
              By using Sift IQ, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-slate-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Name, email address, phone number, and company information</li>
              <li>Account credentials and authentication information</li>
              <li>Payment and billing information</li>
              <li>Communications with us, including support requests</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Operational Data</h3>
            <p className="text-slate-700 mb-4">
              To provide our services, we process operational data from your restaurant systems, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Supplier emails and invoices</li>
              <li>Point-of-sale (POS) data</li>
              <li>Labor and scheduling information</li>
              <li>Inventory and purchasing data</li>
              <li>Financial and accounting information</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Usage Information</h3>
            <p className="text-slate-700 mb-4">
              We automatically collect certain information about your use of our platform:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage patterns and feature interactions</li>
              <li>Log data and analytics information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and manage your account</li>
              <li>Analyze operational data to generate insights and forecasts</li>
              <li>Detect and prevent operational risks and anomalies</li>
              <li>Send you service updates, notifications, and support messages</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Conduct research and analysis to improve our platform</li>
              <li>Comply with legal obligations and enforce our policies</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Data Sharing and Disclosure</h2>
            
            <p className="text-slate-700 mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Service Providers</h3>
            <p className="text-slate-700 mb-4">
              We share information with third-party service providers who perform services on our behalf, such as cloud hosting, data analytics, payment processing, and customer support.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Business Transfers</h3>
            <p className="text-slate-700 mb-4">
              If we are involved in a merger, acquisition, financing, or sale of business or assets, your information may be transferred as part of that transaction.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Legal Requirements</h3>
            <p className="text-slate-700 mb-4">
              We may disclose your information if required by law, legal process, or governmental request, or to protect our rights, property, or safety.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">With Your Consent</h3>
            <p className="text-slate-700">
              We may share your information for any other purpose with your explicit consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication requirements</li>
              <li>Secure infrastructure and cloud services</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-slate-700 mt-4">
              While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. For more details, please see our <Link to="/security" className="text-orange-600 hover:text-orange-700">Data Security page</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-700">
              We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. We may retain certain information for longer periods as required by law or for legitimate business purposes, such as fraud prevention and compliance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Your Rights and Choices</h2>
            <p className="text-slate-700 mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restrict Processing:</strong> Request limitations on how we use your information</li>
            </ul>
            <p className="text-slate-700 mt-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@nibbleiq.ai" className="text-orange-600 hover:text-orange-700">privacy@nibbleiq.ai</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Cookies and Tracking</h2>
            <p className="text-slate-700 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookies through your browser settings.
            </p>
            <p className="text-slate-700">
              For more information, see our <Link to="/cookies" className="text-orange-600 hover:text-orange-700">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">International Data Transfers</h2>
            <p className="text-slate-700">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700">
              Sift IQ is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> <a href="mailto:privacy@nibbleiq.ai" className="text-orange-600 hover:text-orange-700">privacy@nibbleiq.ai</a></p>
              <p className="text-slate-700 mb-2"><strong>General Contact:</strong> <a href="mailto:Hello@nibbleiq.ai" className="text-orange-600 hover:text-orange-700">Hello@nibbleiq.ai</a></p>
              <p className="text-slate-700"><strong>Company:</strong> NibbleIQ, Inc.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}