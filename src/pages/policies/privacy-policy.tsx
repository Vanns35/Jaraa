import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export default function PrivacyPolicy() {
  const site = 'https://jaraa.in';
  const url = `${site}/policies/privacy-policy`;

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Jaraa</title>
        <meta name="description" content="Privacy Policy for Jaraa" />
        <link rel="canonical" href={url} />
      </Helmet>

      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Privacy Policy
          </motion.h1>

          <p className="text-muted-foreground mb-6">
            At Jaraa, protecting your privacy is important to us. This Privacy Policy explains what information we collect, why we collect it, and how we use it when you visit or place an order on jaraa.in.
          </p>

          <section className="prose rich-text text-muted-foreground">
            <h2>Consent</h2>
            <p>By using our website and services you consent to the collection and use of information in accordance with this policy.</p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly (for example: name, email, shipping address, phone number) when you place an order, create an account, subscribe to our newsletter, or contact support. We may also collect information you choose to include in messages or attachments you send to us.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Process orders, manage shipping, and handle customer service requests.</li>
              <li>Improve and personalize your experience on the site.</li>
              <li>Understand and analyze how you use our website and products.</li>
              <li>Send order updates, marketing communications (when you opt in), and other messages related to our services.</li>
              <li>Detect, prevent, and address fraud or other illegal activity.</li>
            </ul>

            <h2>Log Files</h2>
            <p>We follow standard practices of using log files. These record visitor activity such as IP addresses, browser type, referring/exit pages, and timestamps. This information is used to analyze trends, administer the site, and improve our services. Log data is not linked to personally identifiable information.</p>

            <h2>Cookies and Tracking</h2>
            <p>Jaraa uses cookies and similar technologies to remember preferences, measure and improve site performance, and provide relevant content. You can control cookies through your browser settings. For more details, contact us.</p>

            <h2>Third-Party Services</h2>
            <p>We may use third-party services for analytics, payments, and advertising. These providers have their own privacy policies and may collect information independently. Jaraa does not control third-party tracking — please consult the respective providers' policies for details.</p>

            <h2>Advertising</h2>
            <p>We may partner with advertising networks that use cookies and web beacons to serve ads. We do not have control over these third-party technologies; please review those partners' privacy policies for opt-out options.</p>

            <h2>CCPA — California Residents</h2>
            <p>If you are a California resident, you may have rights regarding your personal information, including the right to know, delete, and opt out of the sale of your personal information. To exercise these rights, please <Link to="/contact" className="text-primary">contact us</Link>. We will respond within the timeframes required by law.</p>

            <h2>GDPR — EU Residents</h2>
            <p>EU residents have certain rights over their personal data, including access, correction, deletion, restriction, objection, and data portability. To exercise your rights, please <Link to="/contact" className="text-primary">contact us</Link>. We will respond as required by applicable law.</p>

            <h2>Children's Privacy</h2>
            <p>Jaraa does not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us personal information, contact us so we can delete it.</p>

            <h2>How to Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your personal data, please <Link to="/contact" className="text-primary">contact us</Link>.</p>
          </section>
        </div>
      </main>
    </>
  );
}
