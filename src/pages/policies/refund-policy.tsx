import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export default function RefundPolicy() {
  const site = 'https://jaraa.in';
  const url = `${site}/policies/refund-policy`;

  return (
    <>
      <Helmet>
        <title>Refund Policy — Jaraa</title>
        <meta name="description" content="Refund Policy for Jaraa" />
        <link rel="canonical" href={url} />
      </Helmet>

      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Refund Policy
          </motion.h1>

          <p className="text-muted-foreground mb-6">
            At Jaraa, we curate mystery jewellery jars that are sealed for surprise and delight. Because of the nature of our mystery boxes, refunds are generally not offered. However, we will consider exceptions on a case-by-case basis for damaged, incorrect, or materially misdescribed items.
          </p>

          <section className="prose rich-text text-muted-foreground">
            <h2>Definitions</h2>
            <p>For the purposes of this policy:</p>
            <ul>
              <li><strong>Company</strong> means Jaraa (we, us, our).</li>
              <li><strong>Goods</strong> means products purchased from our Website.</li>
              <li><strong>Orders</strong> means your request to purchase Goods from us.</li>
              <li><strong>Website</strong> means jaraa.in.</li>
            </ul>

            <h2>Cancellation</h2>
            <p>You may cancel your order within one hour of placing it, provided the order has not yet been dispatched. To cancel, use your account on the Website or contact us via the <Link to="/contact" className="text-primary">contact page</Link>. If a prepaid order is cancelled within the allowed window, we will initiate a refund to the original payment method — refunds typically appear within 48–72 business hours depending on your bank.</p>

            <h2>When Refunds Are Considered</h2>
            <p>Because mystery jars are curated to be a surprise, we do not offer refunds simply because the contents are not what you expected. Refunds or replacements may be considered in the following circumstances:</p>
            <ul>
              <li>Item(s) arrived damaged in transit.</li>
              <li>Item(s) were missing from the jar.</li>
              <li>An incorrect product was delivered.</li>
            </ul>
            <p>If one of the above applies, please contact us promptly with photos and order details via the <Link to="/contact" className="text-primary">contact page</Link>. We will review each case and respond with the next steps.</p>

            <h2>Conditions for Returns</h2>
            <p>To be eligible for a refund or replacement, the Goods must meet all of the following:</p>
            <ul>
              <li>Purchased within the last 24 hours (where applicable to cancellation before dispatch).</li>
              <li>Returned in original packaging when applicable.</li>
              <li>Not opened, unless the item arrived damaged or is incorrect (we may require photos).</li>
            </ul>

            <h2>Non-returnable Items</h2>
            <p>The following items are generally not eligible for return or refund:</p>
            <ul>
              <li>Any mystery jar purchased where the sole reason is "I didn't like the surprise".</li>
              <li>Items made to your specification or clearly personalised items.</li>
              <li>Perishable goods or items unsuitable for return for hygiene reasons once opened.</li>
            </ul>

            <h2>Gifts</h2>
            <p>If an order was marked as a gift and shipped directly to the recipient, refunds or replacements will be handled as a gift credit where appropriate. If the gift giver received the order, refunds will be returned to the purchaser.</p>

            <h2>Contact</h2>
            <p>To request a refund, report damage, or ask questions, please contact us via the <Link to="/contact" className="text-primary">contact page</Link>. Provide your order number and photos where relevant so we can assess your request quickly.</p>

            <h2>Opening Video Requirement</h2>
            <p>
              Because our products are sold as mystery jars and sealed at dispatch, in the event of damaged, missing, or incorrect items, we require an opening video from the recipient showing the unopened package and the issue clearly. This video helps us investigate and validate claims and is required to process refunds or replacements. When filing a claim, please contact us via the <Link to="/contact" className="text-primary">contact page</Link> and attach the video.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
