import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./portfolio.css";
import { portfolio } from "../../data";
import { FaTimes, FaChevronLeft, FaChevronRight, FaEye, FaMapMarkerAlt, FaVideoSlash } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import SectionHeader from "../../components/SectionHeader";

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

const isVideo = (src) =>
  typeof src === "string" && /\.(mov|mp4|webm)$/i.test(src);

// Return MIME type for the video element
const videoMime = (src) => {
  if (/\.mp4$/i.test(src))  return "video/mp4";
  if (/\.webm$/i.test(src)) return "video/webm";
  if (/\.mov$/i.test(src))  return "video/quicktime";
  return "";
};

// Fallback shown when a video cannot be played (e.g. .mov on Android)
const VideoFallback = () => (
  <div className="video__fallback">
    <FaVideoSlash className="video__fallback-icon" aria-hidden="true" />
    <p>הסרטון אינו נתמך בדפדפן זה</p>
    <p className="video__fallback-hint">נסה לפתוח מ-iPhone / Safari</p>
  </div>
);

// Single video slide — tracks whether the browser can play this format
const VideoSlide = ({ src, label }) => {
  const [failed, setFailed] = useState(false);
  const mime = videoMime(src);

  if (failed) return <VideoFallback />;

  return (
    <video
      className="modal__slide-img"
      autoPlay
      loop
      muted
      playsInline
      controls
      aria-label={label}
      onError={() => setFailed(true)}
    >
      <source src={src} type={mime} />
      <VideoFallback />
    </video>
  );
};

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const swiperRef  = useRef(null);
  const triggerRef = useRef(null);

  const openModal = useCallback((item, cardEl) => {
    triggerRef.current = cardEl;
    setActiveProject(item);
  }, []);

  const closeModal = useCallback(() => {
    setActiveProject(null);
    triggerRef.current?.focus();
  }, []);

  // ESC + body scroll lock + focus trap
  useEffect(() => {
    if (!activeProject) return;

    requestAnimationFrame(() => {
      const first = document.querySelector(".modal__box")?.querySelectorAll(FOCUSABLE)?.[0];
      first?.focus();
    });

    const handleKey = (e) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key === "Tab") {
        const focusable = Array.from(
          document.querySelector(".modal__box")?.querySelectorAll(FOCUSABLE) ?? []
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeProject, closeModal]);

  const slides = useMemo(() => {
    if (!activeProject) return [];
    return activeProject.collections?.length
      ? activeProject.collections
      : [activeProject.image];
  }, [activeProject]);

  // Disable loop when collection contains videos — Swiper clones video slides
  // which prevents them from autoplaying on mobile
  const hasVideos = useMemo(() => slides.some(isVideo), [slides]);

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
                {item.address && (
                  <p className="portfolio__card-address">
                    <FaMapMarkerAlt aria-hidden="true" /> {item.address}
                  </p>
                )}
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
          <div className="modal__box">
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
                loop={!hasVideos && slides.length > 1}
                rewind={hasVideos && slides.length > 1}
                dir="rtl"
                className="modal__swiper"
                a11y={{
                  prevSlideMessage: "תמונה קודמת",
                  nextSlideMessage: "תמונה הבאה",
                }}
              >
                {slides.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    {isVideo(src) ? (
                      <VideoSlide
                        src={src}
                        label={`סרטון ${idx + 1} מתוך ${slides.length}`}
                      />
                    ) : (
                      <img
                        src={src}
                        alt={`${activeProject.title} — תמונה ${idx + 1} מתוך ${slides.length}`}
                        className="modal__slide-img"
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Nav buttons — hidden on touch devices (swipe handles navigation) */}
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
              <h3 className="modal__title" id="modal-title">{activeProject.title}</h3>
              {activeProject.address && (
                <p className="modal__address">
                  <FaMapMarkerAlt aria-hidden="true" /> {activeProject.address}
                </p>
              )}
              <p className="modal__desc">{activeProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
