import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { useLenisGSAP } from "./hooks/useLenisGSAP";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// Pages
import { HomePage } from "./pages/HomePage";
import { WardrobePage } from "./pages/WardrobePage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ProcessPage } from "./pages/ProcessPage";
import { PricingPage } from "./pages/PricingPage";
import { WhyBrovePage } from "./pages/WhyBrovePage";
import { OurWorkPage } from "./pages/OurWorkPage";
import { WhoCanOrderPage } from "./pages/WhoCanOrderPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CustomOrderPage } from "./pages/CustomOrderPage";
import { FAQPage } from "./pages/FAQPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Redirect helper for legacy customize links
function CustomizeRedirect() {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/custom-order${id ? `?product=${id}` : ""}`} replace />;
}

function MainApp() {
  // Global Lenis Smooth Scroll + GSAP ScrollTrigger ticker integration
  useLenisGSAP();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Core Journey Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/wardrobe" element={<WardrobePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/custom-order" element={<CustomOrderPage />} />
          
          {/* Informational Sub-pages */}
          <Route path="/why-brove" element={<WhyBrovePage />} />
          <Route path="/who-can-order" element={<WhoCanOrderPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Legacy & E-commerce Redirects (Clean Information Architecture) */}
          <Route path="/printing" element={<Navigate to="/process" replace />} />
          <Route path="/customize/:id" element={<CustomizeRedirect />} />
          <Route path="/cart" element={<Navigate to="/custom-order" replace />} />
          <Route path="/checkout" element={<Navigate to="/custom-order" replace />} />
          <Route path="/checkout/payment" element={<Navigate to="/custom-order" replace />} />
          <Route path="/order-confirmation" element={<Navigate to="/custom-order" replace />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
