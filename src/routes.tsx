import { RouteObject } from 'react-router';
import { lazy } from 'react';
import HomePage from './pages/index';
import HowItWorksPage from './pages/how-it-works';
import ShopPage from './pages/shop';
import AboutPage from './pages/about';
import CartPage from './pages/cart';
import CheckoutSuccess from './pages/checkout/success';
import CheckoutCancel from './pages/checkout/cancel';
import PrivacyPolicy from './pages/policies/privacy-policy';
import RefundPolicy from './pages/policies/refund-policy';
import ShippingPolicy from './pages/policies/shipping-policy';
import TermsOfService from './pages/policies/terms-of-service';
import ContactPage from './pages/contact';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = import.meta.env.DEV
  ? lazy(() => import('./pages/_404'))
  : ProdNotFoundPage;

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/how-it-works', element: <HowItWorksPage /> },
  { path: '/shop', element: <ShopPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/policies/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/policies/refund-policy', element: <RefundPolicy /> },
  { path: '/policies/shipping-policy', element: <ShippingPolicy /> },
  { path: '/policies/terms-of-service', element: <TermsOfService /> },
  { path: '/checkout/success', element: <CheckoutSuccess /> },
  { path: '/checkout/cancel', element: <CheckoutCancel /> },
  { path: '*', element: <NotFoundPage /> },
];

export type Path =
  | '/'
  | '/how-it-works'
  | '/shop'
  | '/about'
  | '/cart'
  | '/contact'
  | '/policies/privacy-policy'
  | '/policies/refund-policy'
  | '/policies/shipping-policy'
  | '/policies/terms-of-service'
  | '/checkout/success'
  | '/checkout/cancel';
  
export type Params = Record<string, string | undefined>;
