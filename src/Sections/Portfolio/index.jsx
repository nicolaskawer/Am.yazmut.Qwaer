import { useState, useEffect, useRef } from "react";
import "./portfolio.css";
import { portfolio } from "../../data";
import { FaTimes, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import SectionHeader from "../../components/SectionHeader";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const swiperRef = useRef(null);

  const closeModal = () => setActiveProject(null);

  // ESC key + body scroll lock
  useEffect(() => {
    if (!activeProject) return;
    const handleKey = (e) => { if (e.key === "Escape") setActiveProject(null); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

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
              onClick={() => setActiveProject(item)}
              onKeyDown={(e) => e.key === "Enter" && setActiveProject(item)}
              role="button"
              tabIndex={0}
              aria-label={`פתח פרויקט: ${item.title}`}
            >
              <div className="portfolio__card-image">
                {/* Eager-load first 3 images; lazy-load the rest */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="portfolio__card-overlay">
                  <FaEye className="overlay__icon" aria-hidden="true" />
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
          aria-label={`פרויקט: ${activeProject.title}`}
        >
          <div className="modal__box">
            <button
              className="modal__close"
              onClick={closeModal}
              aria-label="סגור חלון"
            >
              <FaTimes />
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
              >
                {slides.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${activeProject.title} — תמונה ${idx + 1}`}
                      className="modal__slide-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Only render nav when there is more than one image */}
              {slides.length > 1 && (
                <>
                  <button
                    className="modal__nav modal__prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="תמונה קודמת"
                  >
                    <FaChevronRight />
                  </button>
                  <button
                    className="modal__nav modal__next"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="תמונה הבאה"
                  >
                    <FaChevronLeft />
                  </button>
                </>
              )}
            </div>

            <div className="modal__info">
              <div className="modal__info-header">
                <span className="portfolio__tag">{activeProject.category}</span>
                <span className="portfolio__date">{activeProject.date}</span>
              </div>
              <h3 className="modal__title">{activeProject.title}</h3>
              <p className="modal__desc">{activeProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
