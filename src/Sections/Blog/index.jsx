import React from "react";
import "./Blog.css";
import {Swiper,SwiperSlide} from "swiper/react";
import { blogs } from "../../data";
import { Autoplay } from "swiper/modules";

const Blog = () =>{
    return(
        <section id ="blog">
            <div className="container">
                <div className="section__header">
                    <h3 className="title">הבלוג שלנו</h3>
                    <h3 className="sub__heading">תובנות וחדשנות</h3>
                    <p className="description">
                    הישאר מעודכן עם הטרנדים העדכניים ביותר, טיפים ועצות מומחים בכל הקשור לבנייה. חקור תובנות בענף שיעזרו להנחות את הפרויקט הבא שלך! 
                    </p>
                </div>
                <div>
                    <Swiper
                    grabCursor ={true}
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={15}
                    autoplay={true}
                    speed={5000}
                    modules={[Autoplay]}
                    breakpoints={{
                        600:{slidesPerView:2}
                    }}
                    className="blogs__container"
                    >
                        {blogs.map((blog,index)=>(
                            <SwiperSlide className="blog" key ={index}>
                                <div className="image__container">
                                    <img src={blog.image} alt =""/>
                                </div>
                                <div className="details">
                                    <h4 className="line__clamp__2 title">
                                        {blog.title}
                                    </h4>
                                    <h4 className="line__clamp__2 muted">
                                        {blog.content}
                                    </h4>

                                </div>

                            </SwiperSlide>
                        )

                        )}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Blog;
