import { motion } from 'motion/react';
import React from 'react';

const steps = [
  {
    id: 'pick',
    title: 'Pick your jar',
    subtitle: 'Closed Jar',
    img: '/Home/hero-1.png',
  },
  {
    id: 'curate',
    title: 'We curate',
    subtitle: 'Packaging',
    img: '/Home/hero-2.png',
  },
  {
    id: 'pack',
    title: 'We pack',
    subtitle: 'Open Jar',
    img: '/Home/hero-3.png',
  },
  {
    id: 'unbox',
    title: 'You unbox',
    subtitle: 'Jewellery',
    img: '/Home/hero-4.png',
  },
];

export default function MagicInside() {
  return (
    <section aria-label="How does a jar look" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-primary"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Magic Inside 🫙
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-3"
          >
            This is how we turn a simple jar into an experience — from your pick to the moment you unbox.
          </motion.p>
        </div>

        {/* Desktop: horizontal flow with chevrons; Mobile: stacked with down arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2" style={{ borderColor: 'hsl(var(--accent)/0.25)' }}>
                <img src={step.img} alt={step.subtitle} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-sm text-muted-foreground mt-3 uppercase tracking-wide">{step.subtitle}</p>
              <h4 className="text-lg md:text-xl font-bold text-foreground mt-2" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h4>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="hidden md:flex items-center justify-between mt-6 max-w-7xl mx-auto px-6">
          {steps.map((_, i) => (
            <div key={i} className="flex-1 flex items-center justify-center">
              {i < steps.length - 1 && (
                <svg className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical arrows */}
        <div className="md:hidden flex flex-col items-center gap-6 mt-6">
          {steps.map((_, i) => (
            <div key={i} className="w-full flex items-center justify-center">
              {i < steps.length - 1 && (
                <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 13l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
