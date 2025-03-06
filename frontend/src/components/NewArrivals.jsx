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

  // Extract the first new books as new arrivals
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
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          260: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          455: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          755: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1055: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mt-5" // Removed height constraints
      >
        {newArrivals.map((book) => (
          <SwiperSlide key={book._id} className="pb-6">
            {/* Added padding-bottom for spacing */}
            <div className="h-full flex flex-col justify-between">
              <Item book={book} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
