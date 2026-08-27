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

          {/* Nav links */}
            {/* Footer columns — responsive, collapsible on small screens */}
            <div className="w-full max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column: information (collapsible on mobile) */}
                <div>
                  <details className="group" open>
                    <summary className="list-none cursor-pointer text-sm font-semibold text-foreground mb-3">Information</summary>
                    <ul className="pl-0 space-y-2">
                      <li>
                        <Link to="/policies/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/policies/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="/policies/shipping-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping Policy</Link>
                      </li>
                      <li>
                        <Link to="/policies/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
                      </li>
                    </ul>
                  </details>
                </div>

                {/* Column: quick links (collapsible on mobile) */}
                <div>
                  <details className="group" open>
                    <summary className="list-none cursor-pointer text-sm font-semibold text-foreground mb-3">Quick Links</summary>
                    <ul className="pl-0 space-y-2">
                      <li>
                        <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop</Link>
                      </li>
                      <li>
                        <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
                      </li>
                      <li>
                        <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                      </li>
                      <li>
                        <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blogs</Link>
                      </li>
                    </ul>
                  </details>
                </div>

                {/* Column: Newsletter / Social */}
                <div>
                  <div className="text-sm font-semibold text-foreground mb-3">Stay in touch</div>
                  <p className="text-sm text-muted-foreground mb-3">Sign up for updates and special offers.</p>
                  <form className="flex items-center gap-2">
                    <input type="email" placeholder="Email address" className="flex-1 p-2 rounded-lg border border-muted-foreground/10 bg-background text-foreground text-sm" />
                    <button type="submit" className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Subscribe</button>
                  </form>
                  <div className="flex items-center gap-3 mt-4">
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
                </div>
              </div>
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
