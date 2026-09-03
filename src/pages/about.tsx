import { about } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Sparkles, Heart, Star, Wand2 } from 'lucide-react';
import WhyJaraa from '@/components/home/WhyJaraa';
import GoldDivider from '@/components/ui/gold-divider';

export default function AboutPage() {
  const site = 'https://jaraa.in';
  const url = `${site}/about`;

  return (
    <>
      <Helmet>
        <title>About Jaraa — The Mystery Girl Behind the Magic</title>
        <meta
          name="description"
          content="Meet the mystery girl behind Jaraa — she believed in magic, picked up her wand, and started sparkling joy into every mystery jewellery jar. Pune's most magical jewellery surprise."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="About Jaraa — The Mystery Girl Behind the Magic" />
        <meta property="og:description" content="She believed in magic. Now she's sparkling some onto you. Meet the founder of Jaraa mystery jewellery jars." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': `${url}#webpage`,
            name: 'About Jaraa',
            url,
            isPartOf: { '@id': `${site}/#website` },
            about: { '@id': `${site}/#organization` },
          })}
        </script>
      </Helmet>

      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="relative h-64 md:h-80">
            <img
              src="https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/pages/about/hero"
              alt="Sparkling jewellery magic"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1400}
              height={500}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, hsl(var(--primary)/0.35), hsl(var(--primary)/0.75))' }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2"
              >
                Our Story
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Where Magic Meets Jewellery ✨
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <GoldDivider />

        {/* ── Founder Section ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

              {/* Founder image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full md:w-2/5 shrink-0"
              >
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{ border: '3px solid hsl(var(--accent)/0.5)' }}
                >
                  <img
                    src="https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/pages/about/founder"
                    alt="The mystery girl founder of Jaraa"
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                  {/* Sparkle overlay badge */}
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-sm font-bold text-white shadow-lg whitespace-nowrap"
                    style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' }}
                  >
                    <Wand2 size={14} className="inline mr-1.5 mb-0.5" />
                    The Mystery Girl 🌟
                  </div>
                </div>
              </motion.div>

              {/* Founder story */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col gap-5"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={18} style={{ color: 'hsl(var(--accent))' }} />
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Meet the Founder
                  </span>
                </div>

                <h2
                  className="text-2xl md:text-4xl font-bold text-foreground leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  She Believed in Magic.<br />
                  <span style={{ color: 'hsl(var(--primary))' }}>So She Created It.</span>
                </h2>

                <p className="text-muted-foreground leading-relaxed text-base">
                  She goes by one name — <strong className="text-foreground">Mystery Girl</strong>. And that's exactly how she likes it. 🌙
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  She's an angel with a wand and a vision — that every woman deserves a little unexpected sparkle in her life. She grew up believing in fairy tales, in the magic of gifts, in the butterflies you get when you unwrap something you didn't choose for yourself.
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  One day, she picked up her wand, filled a jar with the most beautiful jewellery she could find, sealed it with mystery and love — and <strong className="text-foreground">Jaraa was born</strong>. ✨
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  She still handpicks every piece herself. She still believes in magic. And now, she's sparkling some of it onto <em>you</em>. 💛
                </p>

                {/* Quote */}
                <div
                  className="rounded-2xl p-5 mt-2"
                  style={{
                    background: 'hsl(var(--primary)/0.06)',
                    borderLeft: '4px solid hsl(var(--primary))',
                  }}
                >
                  <p
                    className="text-base italic font-medium text-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    "I don't want you to just buy jewellery. I want you to feel the magic of not knowing — and then the pure joy of discovering something beautiful that was always meant for you."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 font-semibold">
                    — Mystery Girl, Founder of Jaraa 🪄
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <GoldDivider />

        {/* ── The Jar Story ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">

              {/* Jar image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full md:w-2/5 shrink-0"
              >
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{ border: '3px solid hsl(var(--accent)/0.4)' }}
                >
                  <img
                    src="https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/pages/about/jar-story"
                    alt="Jaraa mystery jewellery jar with ribbon"
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                </div>
              </motion.div>

              {/* Jar story text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col gap-5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🫙</span>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Why a Jar?
                  </span>
                </div>

                <h2
                  className="text-2xl md:text-4xl font-bold text-foreground leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  The Jar is Not Just<br />
                  <span style={{ color: 'hsl(var(--primary))' }}>a Container. It's a Promise.</span>
                </h2>

                <p className="text-muted-foreground leading-relaxed text-base">
                  A jar is transparent — you can see <em>something</em> is inside, but you can't quite tell what. It teases you. It tempts you. It makes you want to open it <em>right now</em>. That's exactly the feeling Mystery Girl wanted to bottle up.
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  Each Jaraa jar is sealed with care — wrapped, ribboned, and sent to you as a little world of its own. Inside lives a collection of jewellery pieces chosen just for the magic of the moment you open it.
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  No two jars are ever exactly the same. Every jar is a one-of-a-kind experience. And that's the whole point. 💎
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {[
                    { num: '100%', label: 'Mystery guaranteed' },
                    { num: '💛', label: 'Handpicked with love' },
                    { num: 'Pune', label: 'Delivering locally' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center rounded-2xl p-3"
                      style={{ background: 'hsl(var(--background))', border: '1.5px solid hsl(var(--accent)/0.3)' }}
                    >
                      <p
                        className="text-lg font-extrabold text-primary"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {stat.num}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <GoldDivider />

        {/* ── Why Jaraa cards (moved from homepage) ── */}
        <WhyJaraa />
        
        {/* Gold divider */}
        <GoldDivider />

        {/* ── Philosophy & Promise ── */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-primary"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Philosophy
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-foreground font-semibold mt-3"
            >
              Choose less. Discover more.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-2xl md:text-3xl font-bold text-primary mt-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Promise
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground font-semibold mt-3 max-w-2xl mx-auto"
            >
              Every Jaraa should feel like opening a little gift from yourself — or someone who knows you well.
            </motion.p>
          </div>
        </section>

        {/* Gold divider */}
        <GoldDivider />

        {/* ── Values ── */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-primary text-center mb-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What Jaraa Stands For 💫
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {about.values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                  className="bg-card rounded-2xl p-6 flex gap-4 items-start shadow-sm"
                  style={{ border: '1.5px solid hsl(var(--accent)/0.3)' }}
                >
                  <span className="text-2xl shrink-0">{v.emoji}</span>
                  <div>
                    <p
                      className="font-bold text-foreground mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {v.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gold divider */}
        <GoldDivider />

        {/* ── CTA ── */}
        <section
          className="py-16 md:py-20 px-4 text-center"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto flex flex-col items-center gap-5"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-white text-white opacity-90" />
              ))}
            </div>
            <h2
              className="text-2xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready for Your Sparkle Moment?
            </h2>
            <p className="text-white/85 text-base">
              The Mystery Girl has a jar waiting for you. All you have to do is open it. 🪄
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="inline-block px-8 py-3 rounded-full font-bold text-sm bg-white text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Shop Mystery Jars ✨
              </Link>
              <Link
                to="/how-it-works"
                className="inline-block px-8 py-3 rounded-full font-bold text-sm bg-white/20 text-white border border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-200"
              >
                How It Works →
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Heart size={14} className="text-white fill-white opacity-70" />
              <p className="text-white/70 text-xs">Made with magic in Pune 📍</p>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}
