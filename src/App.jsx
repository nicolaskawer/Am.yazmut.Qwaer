import { useAccessibility } from "./accessibility";
import useScrollReveal from "./hook/useScrollReveal";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  // Run once at the root — not per-component
  useAccessibility();
  useScrollReveal();

  return (
    <ErrorBoundary>
      {/* Skip link: the very first focusable element — screen readers jump straight to #main-content */}
      <a href="#main-content" className="skip__link">
        דלג לתוכן הראשי
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </ErrorBoundary>
  );
}

export default App;
