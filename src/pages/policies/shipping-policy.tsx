import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export default function ShippingPolicy() {
  const site = 'https://jaraa.in';
  const url = `${site}/policies/shipping-policy`;

  return (
    <>
      <Helmet>
        <title>Shipping Policy — Jaraa</title>
        <meta name="description" content="Shipping Policy for Jaraa" />
        <link rel="canonical" href={url} />
      </Helmet>

      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Shipping Policy
          </motion.h1>

          <p className="text-muted-foreground mb-6">
            At present, Jaraa ships only within Pune. We do not provide international or out-of-city shipping until further notice. Please ensure your delivery address is within our serviced area before placing an order.
          </p>

          <section className="prose rich-text text-muted-foreground">
            <h2>Delivery Procedure</h2>
            <p>
              Products are inspected after your order is processed to ensure they meet our quality standards. After a final check, items are packaged and handed to our delivery partners for dispatch. Our delivery partner may contact you if they have difficulty locating your address or if there are delays.
            </p>

            <h2>Tracking Information</h2>
            <p>
              You will receive an email when your order is shipped containing the tracking number and courier details. Order status and tracking will be available on the website — you can check the status 24 hours after dispatch. Order status updates are published on the website only.
            </p>

            <h2>Delivery Timelines</h2>
            <p>
              Most orders are typically dispatched within 1–2 business days (excluding Sundays and public holidays). Delivery time may vary depending on the warehouse and your delivery PIN code. Estimated delivery dates are provided on the product page or during checkout and may be updated once the product ships.
            </p>
            <p>
              Delivery may be delayed due to logistics issues, public holidays, force majeure events, or other reasons outside our control. No refund or cancellation will be allowed solely because of a delivery delay within the estimated delivery time communicated on the Website.
            </p>

            <h2>Shipments</h2>
            <p>
              Orders with multiple items may be delivered in separate shipments if items are dispatched from different warehouses.
            </p>

            <h2>Packaging Details</h2>
            <p>
              We package products in sturdy cartons with protective paper and plastic wrap to minimise transit damage.
            </p>

            

            <h2>International Shipping</h2>
            <p>We do not provide international shipping at this time.</p>

            <h2>Contact</h2>
            <p>For any shipping queries, please <Link to="/contact" className="text-primary">contact us</Link>.</p>
          </section>
        </div>
      </main>
    </>
  );
}
