import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact — Jaraa</title>
        <meta name="description" content="Contact Jaraa" />
      </Helmet>

      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Contact Us
          </motion.h1>

          <p className="text-muted-foreground mb-6">Have a question or need help? Send us a message and we'll get back to you.</p>

          {sent ? (
            <div className="bg-card rounded-2xl p-6 text-center">
              <p className="font-semibold text-foreground">Thanks — your message has been sent.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card rounded-2xl p-6"
            >
              <label className="block text-sm text-muted-foreground mb-2">Your name</label>
              <input required className="w-full p-3 rounded-md mb-4 border border-muted-foreground/10 bg-background" />

              <label className="block text-sm text-muted-foreground mb-2">Email</label>
              <input type="email" required className="w-full p-3 rounded-md mb-4 border border-muted-foreground/10 bg-background" />

              <label className="block text-sm text-muted-foreground mb-2">Message</label>
              <textarea required className="w-full p-3 rounded-md mb-4 border border-muted-foreground/10 bg-background" rows={6} />

              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Send message</button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
