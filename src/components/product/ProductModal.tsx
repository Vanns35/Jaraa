import { motion } from 'motion/react';
import { formatPrice } from '@/lib/stripe/format';
import { Product } from '@/pages/shop';


type Props = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  onBuyNow: (p: Product) => void;
  checkingOut?: string | null;
};

export default function ProductModal({ open, product, onClose, onAddToCart, onBuyNow, checkingOut }: Props) {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.25 }}
        className="bg-card rounded-3xl max-w-md w-full max-h-[90vh] overflow-auto shadow-2xl"
        style={{ border: '2px solid hsl(var(--accent)/0.4)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" width={400} height={400} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(var(--primary)/0.5), transparent 60%)' }} />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div>
            <p className="text-2xl mb-1">{product.emoji}</p>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              {product.name}
            </h2>
            <p className="text-3xl font-extrabold mt-1" style={{ color: 'hsl(var(--accent))', fontFamily: 'var(--font-heading)' }}>
              {formatPrice(product.amount, product.currency)}
            </p>
          </div>

          {product.description && <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>}

          <div>
            <p className="text-sm font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>What's inside:</p>
            <ul className="flex flex-col gap-1.5">
              {(product.contents || []).map((item, ci) => (
                <li key={ci} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }} className="mt-0.5 shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => { onAddToCart(product); onClose(); }}
              className="w-full py-3 rounded-full font-bold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Add to Cart 🛒
            </button>
            <button
              onClick={() => { onClose(); onBuyNow(product); }}
              disabled={checkingOut === product.id}
              className="w-full py-3 rounded-full font-bold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-md disabled:opacity-60"
            >
              {checkingOut === product.id ? 'Processing...' : 'Buy Now 🎁'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
