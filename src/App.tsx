import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useLenisGSAP } from "./hooks/useLenisGSAP";
import { useUTMTracking } from "./hooks/useUTMTracking";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { StudioBackground } from "./components/layout/StudioBackground";
import { SkipToContent } from "./components/ui/SkipToContent";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { BackToTop } from "./components/ui/BackToTop";
import { FloatingContactButton } from "./components/ui/FloatingContactButton";
import { CookieBanner } from "./components/ui/CookieBanner";

// Pages
import { HomePage } from "./pages/HomePage";
import { WardrobePage } from "./pages/WardrobePage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ProcessPage } from "./pages/ProcessPage";
import { PricingPage } from "./pages/PricingPage";
import { WhyBrovePage } from "./pages/WhyBrovePage";
import { WhoCanOrderPage } from "./pages/WhoCanOrderPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CustomOrderPage } from "./pages/CustomOrderPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Scroll to top helper on navigation with hash anchor support
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

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

  // Automatic lightweight UTM tracking
  useUTMTracking();

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[#F4F1E6] dark:bg-[#141412] text-text-primary dark:text-[#F4F1E6] transition-colors duration-200">
      <StudioBackground />
      <SkipToContent />
      <ScrollProgressBar />
      <ScrollToTop />
      <Header />
      
      <main id="main-content" className="flex-grow relative z-10">
        <Routes>
          {/* Core Journey Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/wardrobe" element={<WardrobePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/custom-order" element={<CustomOrderPage />} />
          
          {/* Informational Sub-pages */}
          <Route path="/why-brove" element={<WhyBrovePage />} />
          <Route path="/who-can-order" element={<WhoCanOrderPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Consolidated Routes: Printing -> Process, Our Work -> Wardrobe, FAQ -> Home FAQ */}
          <Route path="/printing" element={<Navigate to="/process" replace />} />
          <Route path="/our-work" element={<Navigate to="/wardrobe" replace />} />
          <Route path="/faq" element={<Navigate to="/#faq" replace />} />
          
          {/* Legacy & E-commerce Redirects (Clean Information Architecture) */}
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
      <BackToTop />
      <FloatingContactButton />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}
