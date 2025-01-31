import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const NewArrivals = () => {
  const { books } = useContext(ShopContext);
  const [newArrivals, setNewArrivals] = useState([]);

  // Extract the first new books as new arivals
  useEffect(() => {
    const data = books.slice(0, 7);
    setNewArrivals(data.reverse());
  }, [books]);

  return (
    <section className="max-padd-container py-16 bg-white">
      <Title
        title1={"New"}
        title2={"Arrivals"}
        titleStyles={"pb-10"}
        paraStyles={"!block"}
      />
      {/* Swiper container */}
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        // Add swiper modules
        modules={[Pagination, Autoplay]}
        className="h-[455px] sm:h-[480px] xl:h-[499px] mt-5"
      >
        {newArrivals.map((book) => (
          <SwiperSlide key={book._id}>
            <Item book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
