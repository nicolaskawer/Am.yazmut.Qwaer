import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { testimonials } from "../../data";
import SectionHeader from "../../components/SectionHeader";
import "./Testimonials.css";

const StarRating = ({ rating = 0 }) => (
  <div className="stars" aria-label={`דירוג: ${rating} כוכבים מתוך 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "star star--filled" : "star star--empty"}
        aria-hidden="true"
      />
    ))}
  </div>
);

const Testimonials = () => (
  <section id="testimonials">
    <div className="container">
      <SectionHeader
        label="לקוחות מרוצים"
        heading="מה אומרים עלינו"
        description="הלקוחות שלנו הם הכוח המניע שלנו. כך הם מתארים את החוויה שלהם עם א.מ. יזמות ובנייה כללית."
        className="testimonials__header"
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        rewind={true}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
        dir="rtl"
        className="testimonials__swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={t.name ?? i}>
            <div className="testimonial__card">
              <FaQuoteRight className="quote__icon" aria-hidden="true" />
              <StarRating rating={t.rating} />
              <p className="testimonial__text">{t.review}</p>
              <div className="testimonial__author">
                {t.image && (
                  <div className="author__avatar">
                    <img src={t.image} alt={t.name} loading="lazy" />
                  </div>
                )}
                <div className="author__info">
                  <h5 className="author__name">{t.name}</h5>
                  {t.role && <span className="author__role">{t.role}</span>}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;
