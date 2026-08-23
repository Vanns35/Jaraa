/**
 * Cart Page
 *
 * Displays cart items with quantity controls and checkout.
 * Uses shared CartContext for state management.
 *
 * Route: /cart
 */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { useCart } from '@/contexts/use-cart';
import { formatPrice } from '@/lib/stripe/format';

export default function CartPage() {
  const { t } = useTranslation();
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, addToCart } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setCheckingOut(true);
    setError(null);

    try {
      const lineItems = cart.map((item) => ({
        priceId: item.priceId,
        quantity: item.quantity,
      }));

      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lineItems }),
      });

      const data = await response.json();

      if (data.success && data.url) {
        // Cart is cleared on the verified-success page, NOT here.
        // If we cleared before redirect and the user cancels at Stripe,
        // /checkout/cancel would lie about "your cart items are still saved".
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to create checkout session');
        setCheckingOut(false);
      }
    } catch (e) {
      console.error('checkout failed', e);
      setError('Failed to create checkout session');
      setCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-4">
            ← Continue shopping
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">🫙 Your Jaraa</h1>
              <p className="text-muted-foreground mt-1">{cart[0]?.name ?? 'The Everyday Glam Jar'}</p>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div>{cartCount} {cartCount === 1 ? t('stripe.item_singular') : t('stripe.items_plural')}</div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('stripe.empty_cart_title')}</h2>
            <p className="text-gray-600 mb-6">{t('stripe.empty_cart_message')}</p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('stripe.btn_browse_store')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column: items, gift message, add-ons */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-sm overflow-hidden mb-6">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 p-6 ${index > 0 ? 'border-t border-muted-foreground/12' : ''}`}
                  >
                    {/* Product Image */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-28 h-28 bg-muted rounded-xl flex items-center justify-center">
                        <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    )}

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate" style={{ fontFamily: 'var(--font-heading)' }}>{item.name}</h3>
                      <p className="text-muted-foreground">{formatPrice(item.price, item.currency)}</p>
                      <p className="text-sm text-muted-foreground mt-2">Quantity: {item.quantity}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center rounded-lg border border-muted-foreground/20 hover:bg-muted text-lg font-medium text-foreground"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold text-lg text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center rounded-lg border border-muted-foreground/20 hover:bg-muted text-lg font-medium text-foreground"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right min-w-[110px]">
                      <p className="font-bold text-foreground">
                        {formatPrice(item.price * item.quantity, item.currency)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      title="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Gift message */}
              <div className="bg-card rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Add a gift message</h3>
                <p className="text-sm text-muted-foreground mb-3">Add a personal note 💌</p>
                <textarea placeholder="Write a short message (optional)" className="w-full p-3 rounded-lg border border-muted-foreground/10 bg-background text-foreground"></textarea>
              </div>

              {/* Add-ons */}
              <div className="bg-card rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Add-ons</h3>
                <p className="text-sm text-muted-foreground mb-4">Boost the unboxing experience.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-muted-foreground/10">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <div>
                      <div className="font-medium text-foreground">🎀 Gift wrap</div>
                      <div className="text-sm text-muted-foreground">Coming soon</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-muted-foreground/10">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <div>
                      <div className="font-medium text-foreground">💌 Personal note</div>
                      <div className="text-sm text-muted-foreground">Add a handwritten note</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* You may also like */}
              <div className="bg-card rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">You may also like</h3>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted">
                    <img src="/Home/hero-2.png" alt="Surprise add-on" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">Add a surprise</div>
                    <div className="text-sm text-muted-foreground">A small extra to make the jar extra special.</div>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => {
                        const currency = cart[0]?.currency || 'inr';
                        addToCart({ id: 'addon-199', name: 'Surprise Add-on', price: 199, currency, priceId: 'addon_199' });
                      }}
                      className="px-4 py-2 rounded-full bg-accent text-accent-foreground font-semibold"
                    >
                      Add for ₹199
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: order summary */}
            <div>
              <div className="bg-card rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Order summary</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotal, cart[0]?.currency || 'usd')}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Discount</span>
                    <span>-</span>
                  </div>
                </div>

                <div className="border-t pt-4 flex justify-between text-xl font-bold text-foreground mb-4">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal, cart[0]?.currency || 'usd')}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    checkingOut ? 'bg-muted text-muted-foreground cursor-not-allowed' : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {checkingOut ? t('stripe.btn_processing') : 'Proceed to Checkout'}
                </button>

                <button onClick={clearCart} className="w-full mt-3 py-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
                  Clear cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

