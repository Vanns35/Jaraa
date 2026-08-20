import { home } from 'virtual:content';
import { useRef } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: 'easeOut' as const,
    },
  }),
};

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const site = 'https://jaraa.in';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        name: 'Jaraa',
        url: `${site}/`,
      },
      {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
        name: 'Jaraa',
        url: `${site}/`,
        description: 'Mystery jewellery jars — unbox a little sparkle.',
      },
      {
        '@type': 'WebPage',
        '@id': `${site}/#webpage`,
        url: `${site}/`,
        name: 'Jaraa — Mystery Jewellery Jars | Unbox a Little Sparkle',
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#organization` },
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Jaraa — Mystery Jewellery Jars | Unbox a Little Sparkle</title>
        <meta
          name="description"
          content="Jaraa mystery jewellery jars — choose your tier from ₹500 to ₹10,000 and unbox a curated surprise of rings, earrings, necklaces and more."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="Jaraa — Mystery Jewellery Jars" />
        <meta
          property="og:description"
          content="Unbox a little sparkle. Mystery jars filled with handpicked jewellery starting at ₹500."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Hero Slideshow ── */}
        <section aria-label="Jaraa hero slideshow" className="relative">
          <Carousel opts={{ loop: true }} plugins={[autoplay.current]}>
            <CarouselContent>
              {home.heroSlides.map((slide, i) => (
                <CarouselItem key={i}>
                  <div className="relative h-[60vh] min-h-[420px] md:h-[75vh] overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(to bottom, hsl(var(--primary)/0.15) 0%, hsl(var(--primary)/0.55) 100%)',
                      }}
                    />
                    {/* Slide text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-3"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {slide.headline}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                        className="text-base md:text-xl text-white/90 drop-shadow mb-6 max-w-lg"
                      >
                        {slide.sub}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                        className="pointer-events-auto"
                      >
                        <Link
                          to="/#shop"
                          className="inline-block px-8 py-3 rounded-full font-bold text-sm md:text-base bg-accent text-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                          Shop Now ✨
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* ── Gold shimmer divider ── */}
        <div
          className="h-1 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
          }}
        />

        {/* ── Product Tiers ── */}
        <section id="shop" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl md:text-5xl font-bold text-primary mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Choose Your Mystery Jar
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
              >
                Every jar is a surprise. Pick your budget and let the magic begin. 💫
              </motion.p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {home.products.map((product, i) => (
                <motion.div
                  key={product.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  style={{ border: '1.5px solid hsl(var(--accent)/0.4)' }}
                >
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-sm">
                      {product.badge}
                    </span>
                  </div>

                  {/* Product image */}
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                    {/* Subtle overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(to top, hsl(var(--primary)/0.2), transparent)',
                      }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-4 gap-3">
                    {/* Emoji + name */}
                    <div>
                      <p className="text-xl mb-0.5">{product.emoji}</p>
                      <h3
                        className="text-lg font-bold text-foreground leading-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {product.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <p
                      className="text-2xl font-extrabold text-accent"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {product.price}
                    </p>

                    {/* Teaser */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {product.teaser}
                    </p>

                    {/* CTA */}
                    <button className="mt-auto w-full py-2.5 rounded-full text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md">
                      Reveal My Jar 🎁
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-sm text-muted-foreground mt-10"
            >
              🔒 Every jar is sealed with love. Contents revealed only when you open it. ♡
            </motion.p>
          </div>
        </section>

        {/* ── Gold shimmer divider ── */}
        <div
          className="h-1 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
          }}
        />
      </main>
    </>
  );
}
