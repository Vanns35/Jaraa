import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Heart } from 'lucide-react';
import { useCart } from '@/contexts/use-cart';
import { formatPrice } from '@/lib/stripe/format';

// ── Product type ─────────────────────────────────────────────────────────────
interface Product {
  id: string;
  priceId: string;
  name: string;
  description: string | null;
  images: string[];
  amount: number;
  currency: string;
  recurring: { interval: string; intervalCount: number } | null;
  // Jaraa-specific extras
  emoji: string;
  badge: string;
  badgeColor: string;
  pieces: string;
  teaser: string;
  contents: string[];
}

// ── Price Tier Products (Stripe-registered) ───────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id: 'prod_V6oTyzG48NLS2A',
    priceId: 'price_1U6aqGSaqPwjhIoENVKFYuXu',
    name: 'Starter Sparkle',
    description: '1 mystery jewellery piece — a dainty ring, earring, or pendant. Perfect little treat for yourself.',
    images: ['https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/products/starter-sparkle'],
    amount: 50000,
    currency: 'inr',
    recurring: null,
    emoji: '✨',
    badge: 'Best for Gifting',
    badgeColor: 'bg-primary text-primary-foreground',
    pieces: '1 mystery piece',
    teaser: '1 mystery jewellery piece. Perfect little treat for yourself.',
    contents: ['1 surprise jewellery piece', 'Dainty ring, earring, or pendant', 'Wrapped in tissue paper', 'Perfect self-treat or small gift'],
  },
  {
    id: 'prod_V6oTDBfpHqyQTu',
    priceId: 'price_1U6aqNSaqPwjhIoE7KPC1NOF',
    name: 'Golden Glow',
    description: '2–3 mystery jewellery pieces — rings, earrings, or a dainty necklace. A golden surprise awaits.',
    images: ['https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/products/golden-glow'],
    amount: 100000,
    currency: 'inr',
    recurring: null,
    emoji: '💛',
    badge: 'Most Popular',
    badgeColor: 'bg-accent text-foreground',
    pieces: '2–3 mystery pieces',
    teaser: '2–3 mystery pieces. Rings, earrings, or a dainty necklace await.',
    contents: ['2–3 surprise jewellery pieces', 'Mix of rings, earrings & necklace', 'Sealed mystery jar', 'Gift-ready packaging'],
  },
  {
    id: 'prod_V6oTVQ2B4DgsSF',
    priceId: 'price_1U6aqVSaqPwjhIoEf09rvbRL',
    name: 'Treasure Trove',
    description: '4–5 curated jewellery pieces — our bestseller mix of rings, earrings, and bracelets. Premium sealed jar.',
    images: ['https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/products/treasure-trove'],
    amount: 200000,
    currency: 'inr',
    recurring: null,
    emoji: '💎',
    badge: 'Fan Favourite',
    badgeColor: 'bg-primary text-primary-foreground',
    pieces: '4–5 mystery pieces',
    teaser: '4–5 mystery pieces. A curated mix of our bestsellers.',
    contents: ['4–5 curated jewellery pieces', 'Bestseller mix — rings, earrings, bracelets', 'Premium sealed jar', 'Ribbon-tied gift packaging'],
  },
  {
    id: 'prod_V6oT00ezf5XsAP',
    priceId: 'price_1U6aqdSaqPwjhIoEynwEeiWU',
    name: 'Royal Collection',
    description: '8–10 premium jewellery pieces — statement and everyday pieces in a luxury sealed jar with gift box.',
    images: ['https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/products/royal-collection'],
    amount: 500000,
    currency: 'inr',
    recurring: null,
    emoji: '👑',
    badge: 'Premium Pick',
    badgeColor: 'bg-primary text-primary-foreground',
    pieces: '8–10 mystery pieces',
    teaser: '8–10 mystery pieces. Premium jewellery, beautifully wrapped.',
    contents: ['8–10 premium jewellery pieces', 'Statement + everyday pieces', 'Luxury sealed jar', 'Premium gift box with ribbon & card'],
  },
  {
    id: 'prod_V6oT9OJc30P2Tb',
    priceId: 'price_1U6aqlSaqPwjhIoECGYeb6q0',
    name: 'Grand Luxe',
    description: '15+ luxury jewellery pieces — rings, necklaces, earrings, bracelets, anklets. The ultimate Jaraa haul in a signature gift box.',
    images: ['https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/products/grand-luxe'],
    amount: 1000000,
    currency: 'inr',
    recurring: null,
    emoji: '🌟',
    badge: 'Ultimate Luxury',
    badgeColor: 'bg-accent text-foreground',
    pieces: '15+ mystery pieces',
    teaser: '15+ mystery pieces. Our most luxurious jar — a full jewellery haul.',
    contents: ['15+ luxury jewellery pieces', 'Full haul — rings, necklaces, earrings, bracelets, anklets', 'Grand luxury jar', 'Signature Jaraa gift box + handwritten card'],
  },
];

// ── Occasion Categories ───────────────────────────────────────────────────────
const occasions = [
  {
    id: 'rakshabandhan',
    emoji: '🪢',
    name: 'Gift for Sister',
    subtitle: 'Raksha Bandhan Special',
    src: 'https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/occasions/rakshabandhan',
    alt: 'Sisters celebrating Raksha Bandhan',
    description: "Make this Rakhi extra special! Surprise your sister with a mystery jar full of jewellery she'll absolutely love — because she deserves more than just a sweet.",
    tag: 'Rakhi 2026',
    tagColor: 'bg-orange-100 text-orange-700',
    highlight: 'Rakhi-themed packaging available',
  },
  {
    id: 'mothers-day',
    emoji: '🌸',
    name: 'Gift for Mom',
    subtitle: "Mother's Day Special",
    src: 'https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/occasions/mothers-day',
    alt: 'Mother and daughter celebrating together',
    description: "She gave you everything — give her a jar full of sparkle. Our Mother's Day jars are curated with elegant, timeless pieces she'll treasure forever.",
    tag: "Mother's Day",
    tagColor: 'bg-pink-100 text-pink-700',
    highlight: 'Elegant pieces suited for moms',
  },
  {
    id: 'mom-to-be',
    emoji: '🤰',
    name: 'Gift for Mom-to-Be',
    subtitle: 'Baby Shower & Pregnancy',
    src: 'https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/occasions/mom-to-be',
    alt: 'Pregnant woman celebrating baby shower',
    description: "Celebrate the most magical journey! Our Mom-to-Be jars are filled with delicate, comfortable jewellery perfect for a glowing mama — a beautiful baby shower gift.",
    tag: 'Baby Shower',
    tagColor: 'bg-blue-100 text-blue-700',
    highlight: 'Delicate & comfortable pieces',
  },
  {
    id: 'bride-to-be',
    emoji: '💍',
    name: 'Gift for Bride-to-Be',
    subtitle: 'Bridal Shower & Engagement',
    src: 'https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/occasions/bride-to-be',
    alt: 'Bride to be bridal shower celebration',
    description: "She said yes — now let's celebrate! Our Bride-to-Be jars are packed with stunning bridal jewellery pieces, perfect for the pre-wedding glow-up.",
    tag: 'Bridal Special',
    tagColor: 'bg-rose-100 text-rose-700',
    highlight: 'Bridal & statement pieces',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'occasions'>('all');
  const [expandedTier, setExpandedTier] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const { addToCart } = useCart();

  const site = 'https://jaraa.in';
  const url = `${site}/shop`;

  const handleCheckout = async (product: Product) => {
    setCheckoutLoading(product.id);
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: product.priceId }),
      });
      const data = await response.json();
      if (data.success && data.url) {
        sessionStorage.setItem('stripe-buy-now-session', data.sessionId ?? '');
        window.location.href = data.url;
      }
    } catch {
      // silently fail — user stays on page
    } finally {
      setCheckoutLoading(null);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      priceId: product.priceId,
      name: product.name,
      price: product.amount,
      currency: product.currency,
      image: product.images[0],
    });
  };

  return (
    <>
      <Helmet>
        <title>Shop Mystery Jars — Jaraa | Jewellery Surprises from ₹500</title>
        <meta
          name="description"
          content="Shop Jaraa mystery jewellery jars from ₹500 to ₹10,000. Also explore special occasion jars — Raksha Bandhan, Mother's Day, Mom-to-Be & Bride-to-Be. Delivering in Pune."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Shop Mystery Jars — Jaraa" />
        <meta property="og:description" content="Mystery jewellery jars from ₹500 to ₹10,000 + special occasion gifts. Unbox a little sparkle!" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${url}#webpage`,
            name: 'Shop Mystery Jars — Jaraa',
            url,
            isPartOf: { '@id': `${site}/#website` },
            about: { '@id': `${site}/#organization` },
          })}
        </script>
      </Helmet>

      <main>
        {/* ── Page Hero ── */}
        <section
          className="py-14 md:py-20 px-4 text-center"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary)/0.08), hsl(var(--accent)/0.12))' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-wide mb-2"
          >
            📍 Delivering in Pune only
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shop Mystery Jars ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8"
          >
            Choose by budget or shop by occasion — every jar is sealed with love and packed with surprise jewellery. 💛
          </motion.p>

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex rounded-full p-1 gap-1 shadow-md"
            style={{ background: 'hsl(var(--card))', border: '1.5px solid hsl(var(--border))' }}
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === 'all' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              💰 Shop by Budget
            </button>
            <button
              onClick={() => setActiveTab('occasions')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === 'occasions' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              🎉 Shop by Occasion
            </button>
          </motion.div>
        </section>

        {/* Gold divider */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)' }} />

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">

          {/* ── BUDGET TIERS ── */}
          {activeTab === 'all' && (
            <motion.section
              key="budget"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-background"
            >
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2
                    className="text-2xl md:text-4xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Choose Your Mystery Jar
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
                    Pick your budget. We'll fill your jar with handpicked jewellery surprises. 🎁
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {PRODUCTS.map((product, i) => {
                    const isExpanded = expandedTier === product.name;
                    const isLoading = checkoutLoading === product.id;
                    return (
                      <motion.div
                        key={product.id}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        style={{ border: '1.5px solid hsl(var(--accent)/0.4)' }}
                      >
                        {/* Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${product.badgeColor}`}>
                            {product.badge}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="relative h-48 overflow-hidden bg-muted">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            width={400}
                            height={400}
                          />
                        </div>

                        {/* Card body */}
                        <div className="flex flex-col flex-1 p-4 gap-2">
                          <p className="text-lg">{product.emoji}</p>
                          <h3
                            className="text-base font-bold text-foreground leading-tight"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {product.name}
                          </h3>
                          <p className="text-xl font-extrabold" style={{ color: 'hsl(var(--accent))', fontFamily: 'var(--font-heading)' }}>
                            {formatPrice(product.amount, product.currency)}
                          </p>
                          <p className="text-xs text-muted-foreground font-semibold">{product.pieces}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed flex-1">{product.teaser}</p>

                          {/* View Details + What's inside */}
                          <div className="flex items-center justify-between mt-1">
                            <button
                              onClick={() => { setSelectedProduct(product); setIsDialogOpen(true); }}
                              className="text-xs font-semibold text-primary hover:underline"
                            >
                              View Details →
                            </button>
                            <button
                              onClick={() => setExpandedTier(isExpanded ? null : product.name)}
                              className="text-xs font-semibold text-muted-foreground hover:text-foreground"
                            >
                              {isExpanded ? '▲ Hide' : "▼ Inside?"}
                            </button>
                          </div>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                {product.contents.map((item, ci) => (
                                  <li key={ci} className="text-xs text-muted-foreground flex items-start gap-1.5 py-0.5">
                                    <span style={{ color: 'hsl(var(--accent))' }} className="mt-0.5">✦</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>

                          {/* Add to Cart */}
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="mt-2 w-full py-2 rounded-full text-xs font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          >
                            Add to Cart 🛒
                          </button>

                          {/* Buy Now */}
                          <button
                            onClick={() => handleCheckout(product)}
                            disabled={isLoading}
                            className="w-full py-2.5 rounded-full text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60"
                          >
                            {isLoading ? 'Processing...' : 'Buy Now 🎁'}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          )}

          {/* ── OCCASIONS ── */}
          {activeTab === 'occasions' && (
            <motion.section
              key="occasions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-background"
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2
                    className="text-2xl md:text-4xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Shop by Occasion
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
                    Event-specific jars curated with jewellery that fits the moment perfectly. 🌸
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {occasions.map((occ, i) => (
                    <motion.div
                      key={occ.id}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                      style={{ border: '1.5px solid hsl(var(--accent)/0.35)' }}
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={occ.src}
                          alt={occ.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width={500}
                          height={500}
                        />
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: 'linear-gradient(to top, hsl(var(--primary)/0.6) 0%, transparent 55%)' }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                          <p className="text-2xl mb-0.5">{occ.emoji}</p>
                          <h3 className="text-xl font-bold text-white drop-shadow" style={{ fontFamily: 'var(--font-heading)' }}>
                            {occ.name}
                          </h3>
                          <p className="text-white/85 text-xs font-semibold">{occ.subtitle}</p>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${occ.tagColor}`}>
                            {occ.tag}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="flex flex-col flex-1 p-5 gap-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">{occ.description}</p>
                        <div className="flex items-center gap-2">
                          <Heart size={13} className="text-primary fill-primary shrink-0" />
                          <span className="text-xs font-semibold text-primary">{occ.highlight}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Available in all price tiers — <span className="font-semibold text-foreground">₹500 to ₹10,000</span>
                        </p>
                        {/* Occasion CTA — switch to budget tab to pick a tier */}
                        <button
                          onClick={() => setActiveTab('all')}
                          className="mt-auto w-full py-3 rounded-full text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          Choose a Jar for {occ.name.replace('Gift for ', '')} ✨
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 text-center bg-card rounded-2xl p-5 shadow-sm"
                  style={{ border: '1.5px solid hsl(var(--accent)/0.3)' }}
                >
                  <p className="text-sm text-muted-foreground">
                    💬 <strong className="text-foreground">Want a custom occasion jar?</strong> DM us on Instagram or WhatsApp and we'll curate something extra special just for your event!
                  </p>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Gold divider */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)' }} />

        {/* ── Policy reminder ── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex-1 bg-card rounded-2xl p-4 flex gap-3 items-start shadow-sm" style={{ border: '1.5px solid hsl(var(--primary)/0.2)' }}>
              <span className="text-xl shrink-0">🚫</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>No Returns Policy</p>
                <p className="text-xs text-muted-foreground leading-relaxed">All sales are final. By ordering you agree to our no-return, no-exchange policy for mystery jars.</p>
              </div>
            </div>
            <div className="flex-1 bg-card rounded-2xl p-4 flex gap-3 items-start shadow-sm" style={{ border: '1.5px solid hsl(var(--accent)/0.3)' }}>
              <span className="text-xl shrink-0">📍</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>Pune Delivery Only</p>
                <p className="text-xs text-muted-foreground leading-relaxed">We currently deliver within Pune only. More cities coming soon! 🌸</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-14 md:py-16 px-4 text-center"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto flex flex-col items-center gap-4"
          >
            <p className="text-3xl">🎁</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Not sure which jar to pick?
            </h2>
            <p className="text-white/85 text-sm">
              Read our How It Works page to understand what goes into every jar — then come back and choose!
            </p>
            <Link
              to="/how-it-works"
              className="inline-block px-7 py-3 rounded-full font-bold text-sm bg-white text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              How It Works →
            </Link>
          </motion.div>
        </section>
      </main>

      {/* ── Detail Modal ── */}
      {isDialogOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsDialogOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="bg-card rounded-3xl max-w-md w-full max-h-[90vh] overflow-auto shadow-2xl"
            style={{ border: '2px solid hsl(var(--accent)/0.4)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden rounded-t-3xl">
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(var(--primary)/0.5), transparent 60%)' }} />
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div>
                <p className="text-2xl mb-1">{selectedProduct.emoji}</p>
                <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  {selectedProduct.name}
                </h2>
                <p className="text-3xl font-extrabold mt-1" style={{ color: 'hsl(var(--accent))', fontFamily: 'var(--font-heading)' }}>
                  {formatPrice(selectedProduct.amount, selectedProduct.currency)}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{selectedProduct.description}</p>

              <div>
                <p className="text-sm font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>What's inside:</p>
                <ul className="flex flex-col gap-1.5">
                  {selectedProduct.contents.map((item, ci) => (
                    <li key={ci} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span style={{ color: 'hsl(var(--accent))' }} className="mt-0.5 shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => { handleAddToCart(selectedProduct); setIsDialogOpen(false); }}
                  className="w-full py-3 rounded-full font-bold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  Add to Cart 🛒
                </button>
                <button
                  onClick={() => { setIsDialogOpen(false); handleCheckout(selectedProduct); }}
                  disabled={checkoutLoading === selectedProduct.id}
                  className="w-full py-3 rounded-full font-bold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-md disabled:opacity-60"
                >
                  {checkoutLoading === selectedProduct.id ? 'Processing...' : 'Buy Now 🎁'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
