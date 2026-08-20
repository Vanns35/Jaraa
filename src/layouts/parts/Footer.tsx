import { Link } from 'react-router';
import { Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Gold shimmer divider */}
      <div
        className="h-1 w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.7), hsl(var(--accent)), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://reawlab5w2.preview.c40.airoapp.ai/airo-assets/images/logo/horizontal"
              alt="Jaraa"
              className="block h-auto max-h-20 w-auto max-w-[160px] object-contain"
              loading="lazy"
            />
          </Link>

          {/* Tagline */}
          <p
            className="text-lg text-primary text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Unbox a little sparkle ♡
          </p>

          {/* Nav links */}
          <nav aria-label="Footer links" className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Home', to: '/' },
              { label: 'Shop', to: '/shop' },
              { label: 'How It Works', to: '/how-it-works' },
              { label: 'About', to: '/about' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/jaraa.in"
              aria-label="Follow Jaraa on Instagram"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.instagram.com/jaraa.in"
              aria-label="Follow Jaraa on Facebook"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © 2026 Jaraa. All rights reserved. Made with{' '}
            <Heart size={12} className="text-primary fill-primary" /> in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
