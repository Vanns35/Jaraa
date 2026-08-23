import React from 'react';
import { motion } from 'motion/react';

const cards = [
  {
    id: 'curated',
    emoji: '✨',
    title: 'Curated With Love',
    desc: 'Every jar is thoughtfully put together.',
    img: '/Home/hero-1.png',
  },
  {
    id: 'mystery',
    emoji: '🫙',
    title: 'Mystery Experience',
    desc: "You don't know exactly what awaits you.",
    img: '/Home/hero-2.png',
  },
  {
    id: 'gifting',
    emoji: '🎁',
    title: 'Perfect for Gifting',
    desc: "A surprise they'll actually remember.",
    img: '/Home/hero-3.png',
  },
  {
    id: 'jewellery',
    emoji: '💎',
    title: "Jewellery You'll Love",
    desc: 'Beautiful pieces selected around your chosen budget/occasion.',
    img: '/Home/hero-4.png',
  },
];

export default function WhyJaraa() {
  return (
    <section aria-label="Why Jaraa" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-primary"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            WHY JARAA?
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-5 flex flex-col items-start gap-3 shadow-sm"
              style={{ border: '1px solid hsl(var(--accent)/0.12)' }}
            >
              <div className="w-full flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xl">
                  {c.emoji}
                </div>
                <h4 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{c.title}</h4>
              </div>

              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>

              <div className="mt-3 w-full">
                <div className="w-full h-28 rounded-lg overflow-hidden bg-muted">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
