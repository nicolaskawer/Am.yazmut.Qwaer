import { useState, useEffect, useRef } from "react";
import "./portfolio.css";
import { portfolio } from "../../data";
import { FaTimes, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import SectionHeader from "../../components/SectionHeader";

// All focusable element types inside a container
const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const swiperRef   = useRef(null);
  const modalRef    = useRef(null);   // ref on the modal box
  const triggerRef  = useRef(null);   // ref to the card that opened the modal

  const openModal = (item, cardEl) => {
    triggerRef.current = cardEl;      // remember who opened the modal
    setActiveProject(item);
  };

  const closeModal = () => {
    setActiveProject(null);
    // Return focus to the card that triggered the modal
    triggerRef.current?.focus();
  };

  // ESC key, body scroll lock, focus trap
  useEffect(() => {
    if (!activeProject) return;

    // Move focus into the modal on open
    requestAnimationFrame(() => {
      const first = modalRef.current?.querySelectorAll(FOCUSABLE)?.[0];
      first?.focus();
    });

    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }

      // Focus trap: intercept Tab / Shift+Tab
      if (e.key === "Tab") {
        const focusable = Array.from(
          modalRef.current?.querySelectorAll(FOCUSABLE) ?? []
        );
        if (!focusable.length) return;

        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeProject]); // eslint-disable-line react-hooks/exhaustive-deps

  // Derive the slide images, always an array with at least the main image
  const slides = activeProject
    ? activeProject.collections?.length
      ? activeProject.collections
      : [activeProject.image]
    : [];

  return (
    <section id="portfolio">
      <div className="container">
        <SectionHeader
          label="הפורטפוליו שלנו"
          heading="יצירת חללים, בניית חלומות"
          description="חקור את הפורטפוליו שלנו כדי לראות כיצד אנו הופכים חזונות לחללים איכותיים ומעוררי השראה, מבתי יוקרה ועד מבנים מסחריים."
          className="portfolio__header"
        />

        <div className="portfolio__grid">
          {portfolio.map((item, i) => (
            <div
              key={item.title}
              className="portfolio__card"
              onClick={(e) => openModal(item, e.currentTarget)}
              onKeyDown={(e) => e.key === "Enter" && openModal(item, e.currentTarget)}
              role="button"
              tabIndex={0}
              aria-label={`פתח פרויקט: ${item.title}`}
            >
              <div className="portfolio__card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="portfolio__card-overlay" aria-hidden="true">
                  <FaEye className="overlay__icon" />
                  <span className="overlay__text">צפה בפרויקט</span>
                </div>
              </div>
              <div className="portfolio__card-body">
                <div className="portfolio__card-meta">
                  <span className="portfolio__tag">{item.category}</span>
                  <span className="portfolio__date">{item.date}</span>
                </div>
                <h4 className="portfolio__card-title">{item.title}</h4>
                <p className="portfolio__card-desc line__clamp__2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="modal__backdrop"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal__box" ref={modalRef}>
            <button
              className="modal__close"
              onClick={closeModal}
              aria-label="סגור חלון"
            >
              <FaTimes aria-hidden="true" />
            </button>

            <div className="modal__swiper-wrapper">
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                modules={[Keyboard, Pagination]}
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }}
                loop={slides.length > 1}
                dir="rtl"
                className="modal__swiper"
                a11y={{
                  prevSlideMessage: "תמונה קודמת",
                  nextSlideMessage: "תמונה הבאה",
                }}
              >
                {slides.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${activeProject.title} — תמונה ${idx + 1} מתוך ${slides.length}`}
                      className="modal__slide-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {slides.length > 1 && (
                <>
                  <button
                    className="modal__nav modal__prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="תמונה קודמת"
                  >
                    <FaChevronRight aria-hidden="true" />
                  </button>
                  <button
                    className="modal__nav modal__next"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="תמונה הבאה"
                  >
                    <FaChevronLeft aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="modal__info">
              <div className="modal__info-header">
                <span className="portfolio__tag">{activeProject.category}</span>
                <span className="portfolio__date">{activeProject.date}</span>
              </div>
              {/* id="modal-title" ties the dialog's aria-labelledby */}
              <h3 className="modal__title" id="modal-title">{activeProject.title}</h3>
              <p className="modal__desc">{activeProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
