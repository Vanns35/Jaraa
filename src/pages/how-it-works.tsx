import { how_it_works } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ShoppingBag, PackageCheck, Truck, Sparkles, Star, Heart } from 'lucide-react';

const stepsMeta = [
  {
    icon: ShoppingBag
  },
  {
    icon: PackageCheck
  },
  {
    icon: Truck
  },
  {
    icon: Sparkles
  },
];

export default function HowItWorksPage() {
  const site = 'https://jaraa.in';
  const url = `${site}/how-it-works`;

  return (
    <>
      <Helmet>
        <title>How It Works — Jaraa Mystery Jewellery Jars</title>
        <meta
          name="description"
          content="Pick your jar, we curate the magic, it arrives at your door — then you unbox and sparkle! See how Jaraa mystery jewellery jars work."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="How It Works — Jaraa" />
        <meta
          property="og:description"
          content="4 simple steps to your mystery jewellery jar. Pick, curate, deliver, unbox — and sparkle!"
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${url}#webpage`,
            name: 'How It Works — Jaraa Mystery Jewellery Jars',
            url,
            isPartOf: { '@id': `${site}/#website` },
            about: { '@id': `${site}/#organization` },
          })}
        </script>
      </Helmet>
      <main>
        {/* ── Page Hero ── */}
        <section className="relative overflow-hidden">
          <div className="relative h-64 md:h-80">
            <img
              src="https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/pages/how-it-works/hero"
              alt="Jaraa mystery jewellery jars"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to bottom, hsl(var(--primary)/0.4), hsl(var(--primary)/0.7))',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                How It Works ✨
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                className="text-white/90 text-base md:text-lg max-w-md drop-shadow"
              >
                Four simple steps from choosing your jar to wearing your sparkle.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <div
          className="h-1 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
          }}
        />

        {/* ── Steps ── */}
        <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-16 md:gap-24">
              {how_it_works.steps.map((step, i) => {
                const Icon = stepsMeta[i].icon;
                const isEven = i % 2 === 1;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2 shrink-0">
                      <div
                        className={`relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${step.color} p-2`}
                        style={{ border: '2px solid hsl(var(--accent)/0.3)' }}
                      >
                        <img
                          src={step.image}
                          alt={step.alt}
                          className="w-full aspect-square object-cover rounded-2xl"
                          loading="lazy"
                          width={400}
                          height={400}
                        />
                        {/* Step number badge */}
                        <div
                          className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg"
                          style={{ background: 'hsl(var(--primary))' }}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                      <div
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-md"
                        style={{ background: 'hsl(var(--accent)/0.15)', border: '1.5px solid hsl(var(--accent)/0.4)' }}
                      >
                        <Icon size={26} style={{ color: 'hsl(var(--accent))' }} />
                      </div>
                      <h2
                        className="text-2xl md:text-3xl font-bold text-foreground"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {step.title}
                      </h2>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <div
          className="h-1 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
          }}
        />

        {/* ── Testimonials ── */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-2xl md:text-4xl font-bold text-primary text-center mb-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What Our Sparklers Say 💬
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {how_it_works.testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="bg-background rounded-2xl p-6 shadow-md flex flex-col gap-3"
                  style={{ border: '1.5px solid hsl(var(--accent)/0.3)' }}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star
                        key={si}
                        size={16}
                        className="fill-accent text-accent"
                        style={{ color: 'hsl(var(--accent))' }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
                      style={{ background: 'hsl(var(--primary))' }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <div
          className="h-1 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
          }}
        />

        {/* ── FAQ ── */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-2xl md:text-4xl font-bold text-primary text-center mb-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Got Questions? 💭
            </motion.h2>
            <div className="flex flex-col gap-4">
              {how_it_works.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                  className="bg-card rounded-2xl p-5 shadow-sm"
                  style={{ border: '1.5px solid hsl(var(--border))' }}
                >
                  <p
                    className="font-bold text-foreground mb-2 text-base"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {faq.q}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Gold divider */}
        <div
          className="h-1 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
          }}
        />

        {/* ── Important to Know ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-2xl md:text-4xl font-bold text-primary text-center mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Important to Know 📋
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center text-muted-foreground text-sm mb-8"
            >
              Please read these before placing your order — we want you to shop with full clarity. ♡
            </motion.p>

            <div className="flex flex-col gap-4">
              {/* No Return Policy */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' as const }}
                className="bg-card rounded-2xl p-6 shadow-sm flex gap-4 items-start"
                style={{ border: '2px solid hsl(var(--primary)/0.25)' }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'hsl(var(--primary)/0.1)' }}
                >
                  🚫
                </div>
                <div>
                  <p
                    className="font-bold text-foreground text-base mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    No Returns or Exchanges
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    By placing an order with Jaraa, you agree to our{' '}
                    <strong className="text-foreground">no-return, no-exchange policy</strong>.
                    Since every jar is a mystery, we cannot accept returns based on personal
                    preference or if you don't like a particular piece. The surprise is part of the
                    magic — and we hope you embrace it! Please order only if you're comfortable
                    with this.
                  </p>
                </div>
              </motion.div>

              {/* Pune Only */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' as const }}
                className="bg-card rounded-2xl p-6 shadow-sm flex gap-4 items-start"
                style={{ border: '2px solid hsl(var(--accent)/0.35)' }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'hsl(var(--accent)/0.12)' }}
                >
                  📍
                </div>
                <div>
                  <p
                    className="font-bold text-foreground text-base mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Currently Serving Pune Only
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We are currently delivering{' '}
                    <strong className="text-foreground">within Pune only</strong>. We're a small,
                    passionate team and we want to make sure every jar reaches you perfectly.
                    We're working hard to expand to more cities soon — stay tuned! 🌸
                  </p>
                </div>
              </motion.div>

              {/* Mystery disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' as const }}
                className="bg-card rounded-2xl p-6 shadow-sm flex gap-4 items-start"
                style={{ border: '2px solid hsl(var(--border))' }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'hsl(var(--muted))' }}
                >
                  🎁
                </div>
                <div>
                  <p
                    className="font-bold text-foreground text-base mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    It's a Mystery — Embrace the Surprise!
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You may receive pieces in styles, sizes, or colours you wouldn't normally pick
                    — and that's the whole point! Jaraa is about discovering new favourites and
                    stepping outside your comfort zone. Every piece is chosen with care and love.
                    💛
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <div
          className="h-1 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
          }}
        />


        {/* ── CTA Banner ── */}
        <section
          className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl mx-auto flex flex-col items-center gap-5"
          >
            <Heart size={36} className="text-white fill-white opacity-80" />
            <h2
              className="text-2xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to Unbox Your Sparkle?
            </h2>
            <p className="text-white/85 text-base">
              Choose your mystery jar and let the magic begin. Starting at just ₹500.
            </p>
            <Link
              to="/#shop"
              className="inline-block px-8 py-3 rounded-full font-bold text-sm md:text-base bg-white text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Shop Mystery Jars ✨
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}
