import "./WhyChooseUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { whyChooseUs } from "../../data";

const WhyChooseUs = () => (
  <section id="why-choose-us">
    <div className="container">
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        rewind={true}
        spaceBetween={15}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={600}
        modules={[Autoplay]}
        breakpoints={{
          350: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
        }}
        dir="rtl"
      >
        {whyChooseUs.map((why, i) => (
          <SwiperSlide className="flex why__item" key={why.title ?? i}>
            <div className="flex__center primary icon" aria-hidden="true">
              {why.icon}
            </div>
            <div className="details">
              <h4 className="title">{why.title}</h4>
              <p className="muted">{why.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default WhyChooseUs;
