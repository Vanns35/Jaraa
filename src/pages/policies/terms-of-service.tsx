import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export default function TermsOfService() {
  const site = 'https://jaraa.in';
  const url = `${site}/policies/terms-of-service`;

  return (
    <>
      <Helmet>
        <title>Terms of Service — Jaraa</title>
        <meta name="description" content="Terms of Service for Jaraa" />
        <link rel="canonical" href={url} />
      </Helmet>

      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Terms of Service
          </motion.h1>

          <p className="text-muted-foreground mb-6">These concise Terms explain the important rules for using Jaraa.in. By accessing or using the Website or placing an order you agree to these Terms.</p>

          <section className="prose rich-text text-muted-foreground">
            <h2>1. Who We Are</h2>
            <p>Jaraa operates this Website and offers products and services subject to these Terms.</p>

            <h2>2. Acceptance</h2>
            <p>Using the Website, creating an account, or placing an order constitutes acceptance of these Terms and of our other policies (Privacy, Refunds, Shipping).</p>

            <h2>3. Eligibility</h2>
            <p>You must be the age of majority in your jurisdiction to place orders. By ordering you represent that you have the legal right to do so.</p>

            <h2>4. Orders, Pricing & Payment</h2>
            <p>All orders are subject to availability and confirmation of the order price. We may refuse or cancel orders at our discretion. Prices and offers are subject to change without notice.</p>

            <h2>5. Products & Mystery Jars</h2>
            <p>Many Jaraa items are sold as sealed mystery jars. We do not provide refunds for dissatisfaction with surprise contents; refunds or replacements are considered only for damaged, incorrect, or missing items in accordance with our Refund Policy.</p>

            <h2>6. Restrictions on Use</h2>
            <p>You agree not to misuse the Website, upload malware, infringe third-party rights, or attempt to extract data by scraping. We may suspend or terminate accounts for violations.</p>

            <h2>7. Intellectual Property</h2>
            <p>All content on the Website (text, images, logos) is owned or licensed by Jaraa and may not be copied or reused without permission.</p>

            <h2>8. Third-Party Services</h2>
            <p>The Website may link to third-party sites and use third-party payment or delivery services. We are not responsible for third-party policies or actions.</p>

            <h2>9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Jaraa and its affiliates are not liable for indirect, incidental, or consequential damages arising from use of the Website or products. Our aggregate liability is limited to the purchase price paid for the applicable order.</p>

            <h2>10. Governing Law</h2>
            <p>These Terms are governed by the laws of India. Disputes will be subject to the competent courts in Pune.</p>

            <h2>11. Changes to Terms</h2>
            <p>We may update these Terms; the latest version is available on this page. Continued use after changes constitutes acceptance.</p>

            <h2>12. Contact</h2>
            <p>Questions about these Terms? <Link to="/contact" className="text-primary">Contact us</Link>.</p>
          </section>
        </div>
      </main>
    </>
  );
}
