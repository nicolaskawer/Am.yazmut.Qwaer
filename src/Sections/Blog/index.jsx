import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { blogs } from "../../data";
import SectionHeader from "../../components/SectionHeader";

const Blog = () => (
  <section id="blog">
    <div className="container">
      <SectionHeader
        label="הבלוג שלנו"
        heading="תובנות וחדשנות"
        description="הישאר מעודכן עם הטרנדים העדכניים ביותר, טיפים ועצות מומחים בכל הקשור לבנייה. חקור תובנות בענף שיעזרו להנחות את הפרויקט הבא שלך!"
      />

      {/*
        Full-width swiper below the header.
        slidesPerView uses breakpoints so cards are always proportional.
        No more side-by-side grid that forced the header into a narrow column.
      */}
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={20}
        rewind={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        speed={650}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          580:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        dir="rtl"
        className="blogs__swiper"
      >
        {blogs.map((blog, i) => (
          <SwiperSlide key={blog.title ?? i}>
            <article className="blog__card">
              {/* image container has a fixed height → img fills it correctly */}
              <div className="blog__card-image">
                <img src={blog.image} alt={blog.title} loading="lazy" />
              </div>
              <div className="blog__card-body">
                <h4 className="blog__card-title line__clamp__2">{blog.title}</h4>
                <p className="blog__card-excerpt line__clamp__2">{blog.content}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Blog;
