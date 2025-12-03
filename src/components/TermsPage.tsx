import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { SEO, seoConfigs } from "./SEO";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfigs.terms} />
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
          <h1 className="text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last updated: January 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "you", or "your") and Sift IQ, Inc. ("Sift IQ", "we", "us", or "our") concerning your access to and use of the Sift IQ platform and services.
            </p>
            <p className="text-slate-700">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Description of Services</h2>
            <p className="text-slate-700 mb-4">
              Sift IQ provides a hospitality intelligence platform that centralizes back-office signals, forecasts labor and purchases, and identifies operational risks. Our services include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Automated processing of supplier emails and invoices</li>
              <li>Predictive analytics and forecasting for labor and purchasing</li>
              <li>Operational risk detection and alerts</li>
              <li>Data visualization and reporting dashboards</li>
              <li>Integration with existing restaurant management systems</li>
              <li>Customer support and platform updates</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Account Registration and Access</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Account Creation</h3>
            <p className="text-slate-700 mb-4">
              To use Sift IQ, you must create an account by providing accurate, current, and complete information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Ensuring your account information remains accurate and up-to-date</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Eligibility</h3>
            <p className="text-slate-700">
              You must be at least 18 years old and have the authority to enter into this agreement on behalf of your organization. By using our services, you represent and warrant that you meet these requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Subscription and Fees</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Subscription Plans</h3>
            <p className="text-slate-700 mb-4">
              Sift IQ offers various subscription plans with different features and pricing. Your specific plan details, including pricing and features, will be outlined in your service agreement or order form.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Payment Terms</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Fees are billed in advance on a monthly or annual basis</li>
              <li>Payment is due upon receipt of invoice</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>Prices may change upon renewal with 30 days' notice</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Late Payment and Suspension</h3>
            <p className="text-slate-700">
              Failure to pay fees when due may result in suspension or termination of your access to the services. We reserve the right to charge interest on overdue amounts at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Use of Services</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Acceptable Use</h3>
            <p className="text-slate-700 mb-4">
              You agree to use Sift IQ only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the services</li>
              <li>Use the services to compete with Sift IQ</li>
              <li>Reverse engineer or copy any aspect of the platform</li>
              <li>Share your account credentials with unauthorized users</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">User Content</h3>
            <p className="text-slate-700">
              You retain ownership of all data you submit to Sift IQ ("Customer Data"). By using our services, you grant us a limited license to access, process, and analyze Customer Data solely to provide and improve our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Intellectual Property</h2>
            <p className="text-slate-700 mb-4">
              The Sift IQ platform, including all software, technology, content, and materials, is owned by Sift IQ and protected by intellectual property laws. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use the services.
            </p>
            <p className="text-slate-700">
              You may not reproduce, modify, distribute, or create derivative works of any part of our services without our prior written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Data Privacy and Security</h2>
            <p className="text-slate-700 mb-4">
              We are committed to protecting your data. Our data practices are governed by our <Link to="/privacy" className="text-orange-600 hover:text-orange-700">Privacy Policy</Link> and <Link to="/security" className="text-orange-600 hover:text-orange-700">Data Security</Link> policies.
            </p>
            <p className="text-slate-700">
              You are responsible for ensuring you have the necessary rights and permissions to provide us with Customer Data and for the accuracy of that data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Service Level and Support</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Availability</h3>
            <p className="text-slate-700 mb-4">
              We strive to maintain high service availability, but we do not guarantee uninterrupted access to the services. We may perform scheduled maintenance with advance notice when possible.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Support</h3>
            <p className="text-slate-700">
              We provide customer support via email at <a href="mailto:Hello@nibbleiq.ai" className="text-orange-600 hover:text-orange-700">Hello@nibbleiq.ai</a>. Support hours and response times depend on your subscription plan.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Warranties and Disclaimers</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Limited Warranty</h3>
            <p className="text-slate-700 mb-4">
              We warrant that the services will perform substantially in accordance with our documentation under normal use.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Disclaimer</h3>
            <p className="text-slate-700 mb-4">
              EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-slate-700">
              We do not warrant that the services will be error-free or that all defects will be corrected. You acknowledge that the insights and forecasts provided are based on data analysis and may not be 100% accurate.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIFT IQ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES.
            </p>
            <p className="text-slate-700">
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Indemnification</h2>
            <p className="text-slate-700">
              You agree to indemnify and hold Sift IQ harmless from any claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising from your use of the services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Term and Termination</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Term</h3>
            <p className="text-slate-700 mb-4">
              These Terms begin when you first access the services and continue until terminated by either party.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Termination by You</h3>
            <p className="text-slate-700 mb-4">
              You may terminate your subscription at any time by providing written notice. Termination will be effective at the end of your current billing period.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Termination by Us</h3>
            <p className="text-slate-700 mb-4">
              We may suspend or terminate your access immediately if you breach these Terms or for non-payment. We may also terminate with 30 days' notice for any reason.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Effect of Termination</h3>
            <p className="text-slate-700">
              Upon termination, your access to the services will cease. We will retain your data for 30 days to allow for data export, after which it may be deleted. Provisions regarding intellectual property, warranties, liability, and dispute resolution will survive termination.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Modifications to Terms</h2>
            <p className="text-slate-700">
              We may modify these Terms at any time by posting updated Terms on our website. Material changes will be communicated via email or platform notification. Your continued use of the services after changes indicates acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-slate-700 mb-4">
              These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes arising from these Terms or the services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
            <p className="text-slate-700">
              You agree to waive any right to a jury trial or to participate in a class action lawsuit.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">General Provisions</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Entire Agreement</h3>
            <p className="text-slate-700 mb-4">
              These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and Sift IQ regarding the services.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Severability</h3>
            <p className="text-slate-700 mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">No Waiver</h3>
            <p className="text-slate-700 mb-4">
              Our failure to enforce any right or provision of these Terms will not constitute a waiver of that right or provision.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Assignment</h3>
            <p className="text-slate-700">
              You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> <a href="mailto:legal@nibbleiq.ai" className="text-orange-600 hover:text-orange-700">legal@nibbleiq.ai</a></p>
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