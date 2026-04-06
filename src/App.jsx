import { useAccessibility } from "./accessibility";
import useScrollReveal from "./hook/useScrollReveal";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";
import Testimonials from "./Sections/Testimonials";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  // Run once at the root — not per-component
  useAccessibility();

  return (
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
