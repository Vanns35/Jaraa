import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, House, Info, MapPin, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useCart } from '@/contexts/use-cart';

const mobileNavLinks = [
  { label: 'Home', to: '/', icon: House },
  { label: 'Account', to: '/', icon: User },
  { label: 'How it works', to: '/how-it-works', icon: Info },
  { label: 'About', to: '/about', icon: Info },
];

const mobileMenuLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Wishlist', to: '/' },
  { label: 'Account', to: '/' },
  { label: 'Cart', to: '/cart' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#f7f4ef] shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-[1600px] px-3 sm:px-4 lg:px-6">
          <div className="flex h-20 items-center gap-3 lg:gap-5">
            <div className="flex shrink-0 items-center gap-2 lg:gap-3">
              <Link to="/" className="flex items-center shrink-0" aria-label="Jaraa home">
                <img
                  src="https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/logo/horizontal"
                  alt="Jaraa — Jewellery Surprises"
                  className="block h-auto max-h-16 w-auto max-w-[180px] object-contain"
                  fetchPriority="high"
                />
              </Link>

              <button
                type="button"
                className="hidden items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-2 text-left text-sm text-zinc-700 shadow-sm transition hover:border-zinc-400 lg:flex"
                aria-label="Selected delivery address"
              >
                <MapPin className="h-4 w-4 text-zinc-600" />
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Deliver to</span>
                  <span className="font-semibold text-zinc-800">Dubai · Amazon</span>
                </span>
              </button>
            </div>

            <div className="hidden flex-1 items-center justify-center lg:flex">
              <form
                className="flex w-full max-w-[720px] items-center overflow-hidden rounded-full border border-zinc-300 bg-white shadow-sm ring-1 ring-transparent transition focus-within:ring-zinc-300"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="flex items-center gap-2 pl-4 text-zinc-500">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="w-full border-0 bg-transparent px-3 py-3 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none"
                />
                <Link
                  to="/shop"
                  className="mr-1 rounded-full bg-[#111827] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  Search
                </Link>
              </form>
            </div>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <Link
                to="/"
                className="hidden items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-zinc-700 transition hover:bg-white/60 sm:flex"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                <span className="hidden xl:inline">Wishlist</span>
              </Link>

              <Link
                to="/cart"
                className="relative flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-zinc-700 transition hover:bg-white/60"
                aria-label="Cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden xl:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#ef4444] px-1 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className="flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-zinc-700 transition hover:bg-white/60"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
                <span className="hidden xl:inline">Account</span>
              </Link>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 text-zinc-700 shadow-sm transition hover:border-zinc-400 lg:hidden"
                aria-label="Open menu"
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-zinc-200 bg-[#f7f4ef] px-4 pb-5 pt-3 lg:hidden">
            <div className="mb-3 flex items-center justify-between gap-3 rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-600" />
                <span className="font-medium">Dubai · Amazon</span>
              </div>
              <Link to="/shop" className="font-medium text-zinc-900">Search</Link>
            </div>

            <nav aria-label="Mobile menu" className="flex flex-col gap-1">
              {mobileMenuLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-zinc-700 transition hover:bg-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-zinc-400">›</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm lg:hidden" aria-label="Mobile bottom navigation">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          {mobileNavLinks.map(({ label, to, icon: Icon }) => (
            <Link
              key={label}
              to={to}
              className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium text-zinc-600 transition hover:bg-zinc-100"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
