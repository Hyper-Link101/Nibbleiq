import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft, Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from "lucide-react";
import { Footer } from "./Footer";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { SEO, seoConfigs } from "./SEO";

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfigs.security} />
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-slate-900">Data Security</h1>
          </div>
          <p className="text-slate-700 text-lg max-w-3xl">
            At Sift IQ, security is at the core of everything we do. We understand that you're trusting us with sensitive operational data, and we take that responsibility seriously.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Our Security Commitment</h2>
            <p className="text-slate-700 mb-4">
              Sift IQ is built with enterprise-grade security from the ground up. We employ industry-leading practices, technologies, and certifications to protect your data at every layer of our infrastructure.
            </p>
            <p className="text-slate-700">
              This page outlines our security measures, compliance standards, and how we safeguard your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Security Certifications & Compliance</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-slate-900 text-lg">SOC 2 Type II</h3>
                </div>
                <p className="text-slate-700 text-sm">
                  Independently audited for security, availability, processing integrity, confidentiality, and privacy controls.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-slate-900 text-lg">GDPR Compliant</h3>
                </div>
                <p className="text-slate-700 text-sm">
                  Full compliance with EU General Data Protection Regulation standards for data privacy and protection.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-slate-900 text-lg">CCPA Compliant</h3>
                </div>
                <p className="text-slate-700 text-sm">
                  Adheres to California Consumer Privacy Act requirements for data rights and transparency.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-slate-900 text-lg">PCI DSS</h3>
                </div>
                <p className="text-slate-700 text-sm">
                  Payment Card Industry Data Security Standard compliance for secure payment processing.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Data Encryption</h2>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg border border-orange-100 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Lock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">End-to-End Encryption</h3>
                  <p className="text-slate-700">
                    All data is encrypted at rest and in transit using industry-standard encryption protocols.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-slate-900 mb-3 mt-6">Encryption in Transit</h3>
            <p className="text-slate-700 mb-4">
              All data transmitted between your devices and Sift IQ servers is encrypted using:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>TLS 1.3 (Transport Layer Security) for all connections</li>
              <li>Perfect Forward Secrecy to protect past sessions</li>
              <li>Strong cipher suites with 256-bit encryption</li>
              <li>HTTP Strict Transport Security (HSTS) headers</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Encryption at Rest</h3>
            <p className="text-slate-700 mb-4">
              All data stored in our systems is encrypted using:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>AES-256 encryption for all databases and file storage</li>
              <li>Encrypted backups with separate encryption keys</li>
              <li>Hardware security modules (HSMs) for key management</li>
              <li>Regular key rotation policies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Infrastructure Security</h2>
            
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-lg border border-slate-200 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-200 p-3 rounded-lg">
                  <Server className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">Enterprise Cloud Infrastructure</h3>
                  <p className="text-slate-700">
                    Sift IQ runs on AWS (Amazon Web Services), leveraging their world-class security and reliability.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-slate-900 mb-3 mt-6">Cloud Security</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Multi-region redundancy for high availability</li>
              <li>Isolated virtual private clouds (VPCs)</li>
              <li>Network segmentation and firewalls</li>
              <li>DDoS protection and rate limiting</li>
              <li>Web Application Firewall (WAF) for threat protection</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Application Security</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Regular security testing and vulnerability assessments</li>
              <li>Automated security scanning in CI/CD pipeline</li>
              <li>Static and dynamic application security testing (SAST/DAST)</li>
              <li>Third-party penetration testing annually</li>
              <li>Bug bounty program for responsible disclosure</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Database Security</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Database access restricted to application services only</li>
              <li>No direct external database access</li>
              <li>Encrypted database connections</li>
              <li>Automated daily backups with 30-day retention</li>
              <li>Point-in-time recovery capabilities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Access Controls</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">Principle of Least Privilege</h3>
                  <p className="text-slate-700">
                    Access to customer data is strictly controlled and limited to only what is necessary.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-slate-900 mb-3 mt-6">User Authentication</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Multi-factor authentication (MFA) required for all accounts</li>
              <li>Strong password requirements with complexity rules</li>
              <li>Single Sign-On (SSO) support via SAML 2.0</li>
              <li>Session timeout and automatic logout after inactivity</li>
              <li>IP allowlisting for enhanced security</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Role-Based Access Control (RBAC)</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Granular permission controls for different user roles</li>
              <li>Separation of duties for sensitive operations</li>
              <li>Audit trails for all data access and modifications</li>
              <li>Ability to revoke access instantly</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Employee Access</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Background checks for all employees</li>
              <li>Mandatory security training and awareness programs</li>
              <li>Strict need-to-know access policies</li>
              <li>Regular access reviews and audits</li>
              <li>Immediate access revocation upon termination</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Monitoring & Incident Response</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">24/7 Monitoring</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Real-time security monitoring and alerting</li>
              <li>Intrusion detection and prevention systems (IDS/IPS)</li>
              <li>Log aggregation and analysis</li>
              <li>Automated anomaly detection</li>
              <li>Security Information and Event Management (SIEM)</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Incident Response Plan</h3>
            <p className="text-slate-700 mb-4">
              We maintain a comprehensive incident response plan that includes:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Dedicated security incident response team</li>
              <li>Defined escalation procedures</li>
              <li>Clear communication protocols</li>
              <li>Forensic analysis capabilities</li>
              <li>Post-incident review and remediation</li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 mb-2">Security Incident Notification</h4>
                  <p className="text-slate-700 text-sm">
                    In the unlikely event of a security incident affecting your data, we will notify you within 72 hours and provide transparent information about the incident and our response.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Data Privacy & Handling</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Data Minimization</h3>
            <p className="text-slate-700 mb-4">
              We only collect and process data necessary to provide our services. We do not access or use customer data for purposes other than service delivery and improvement.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Data Segregation</h3>
            <p className="text-slate-700 mb-4">
              Each customer's data is logically segregated to prevent unauthorized access between organizations. We employ tenant isolation to ensure your data remains separate from other customers.
            </p>

            <h3 className="text-slate-900 mb-3 mt-6">Data Retention & Deletion</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Data is retained only as long as necessary for service provision</li>
              <li>You can request data deletion at any time</li>
              <li>Upon account termination, data is deleted within 30 days</li>
              <li>Secure data destruction using industry-standard methods</li>
              <li>Backups are permanently deleted after retention period</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Data Portability</h3>
            <p className="text-slate-700">
              You can export your data at any time in standard formats. We provide easy-to-use tools for data export and migration.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Third-Party Security</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Vendor Management</h3>
            <p className="text-slate-700 mb-4">
              We carefully vet all third-party vendors and service providers:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Security assessments before onboarding</li>
              <li>Regular audits of vendor security practices</li>
              <li>Data Processing Agreements (DPAs) with all vendors</li>
              <li>Contractual security and privacy obligations</li>
              <li>Limited data sharing with third parties</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Subprocessors</h3>
            <p className="text-slate-700 mb-4">
              We use a limited number of trusted subprocessors to deliver our services:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Amazon Web Services (AWS) - Cloud infrastructure</li>
              <li>Stripe - Payment processing</li>
              <li>SendGrid - Transactional email delivery</li>
              <li>Datadog - Application monitoring</li>
            </ul>
            <p className="text-slate-700 mt-4">
              For a complete list of subprocessors, please contact us at <a href="mailto:security@siftiq.io" className="text-orange-600 hover:text-orange-700">security@siftiq.io</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Business Continuity</h2>
            
            <h3 className="text-slate-900 mb-3 mt-6">Disaster Recovery</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Multi-region failover capabilities</li>
              <li>Regular disaster recovery drills and testing</li>
              <li>Recovery Time Objective (RTO) of 4 hours</li>
              <li>Recovery Point Objective (RPO) of 1 hour</li>
              <li>Documented business continuity procedures</li>
            </ul>

            <h3 className="text-slate-900 mb-3 mt-6">Backup & Recovery</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Automated daily backups</li>
              <li>Encrypted backup storage in separate geographic regions</li>
              <li>Regular backup restoration testing</li>
              <li>30-day backup retention period</li>
              <li>Point-in-time recovery capabilities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Security Best Practices for Customers</h2>
            <p className="text-slate-700 mb-4">
              While we provide robust security measures, we recommend that you also follow these best practices:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Enable multi-factor authentication (MFA) for all users</li>
              <li>Use strong, unique passwords and change them regularly</li>
              <li>Review user access permissions regularly</li>
              <li>Report any suspicious activity immediately</li>
              <li>Keep your contact information up to date for security alerts</li>
              <li>Train your team on security awareness</li>
              <li>Use secure networks and avoid public Wi-Fi for accessing sensitive data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Continuous Improvement</h2>
            <p className="text-slate-700">
              Security is not a one-time effort. We continuously invest in improving our security posture through regular audits, penetration testing, security training, and staying current with emerging threats and best practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Transparency & Reporting</h2>
            <p className="text-slate-700 mb-4">
              We believe in transparency regarding our security practices:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Annual SOC 2 reports available upon request</li>
              <li>Security documentation provided during onboarding</li>
              <li>Regular security updates and communications</li>
              <li>Open communication about security incidents</li>
              <li>Willingness to answer security questionnaires</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-slate-900 mb-4">Questions & Security Inquiries</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about our security practices or need additional information:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>Security Team:</strong> <a href="mailto:security@siftiq.io" className="text-orange-600 hover:text-orange-700">security@siftiq.io</a></p>
              <p className="text-slate-700 mb-2"><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@siftiq.io" className="text-orange-600 hover:text-orange-700">privacy@siftiq.io</a></p>
              <p className="text-slate-700 mb-4"><strong>General Contact:</strong> <a href="mailto:hello@siftiq.io" className="text-orange-600 hover:text-orange-700">hello@siftiq.io</a></p>
              <p className="text-slate-700 text-sm mt-4">
                For security vulnerability reports, please use our responsible disclosure process at <a href="mailto:security@siftiq.io" className="text-orange-600 hover:text-orange-700">security@siftiq.io</a>. We appreciate the security community's efforts to keep our platform safe.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}