import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/use-cart';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/logo/horizontal"
              alt="Jaraa — Jewellery Surprises"
              className="block h-auto max-h-16 w-auto max-w-[180px] object-contain"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}

            {/* Cart icon */}
            <Link to="/cart" className="relative p-2 text-foreground/80 hover:text-primary transition-colors" aria-label="Shopping cart">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/shop"
              className="px-5 py-2 rounded-full text-sm font-bold text-primary-foreground bg-primary transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 hover:bg-primary/90"
            >
              Shop Now ✨
            </Link>
          </nav>

          {/* Mobile: cart + menu */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/cart" className="relative p-2 text-foreground/80 hover:text-primary transition-colors" aria-label="Shopping cart">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 px-3 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/shop"
              className="mt-2 py-3 px-3 text-sm font-bold text-primary-foreground bg-primary text-center rounded-full shadow-md hover:bg-primary/90"
              onClick={() => setMobileOpen(false)}
            >
              Shop Now ✨
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
