import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg1.jpg";
import pencil from "../assets/pencil.png";

const Hero = () => {
  return (
    <section className="max-padd-container py-20 xl:py-8 relative">
      <div className="flexCenter gap-12 flex-col xl:flex-row">
        {/* Left side */}
        <div className="flex flex-1 flex-col pt-12 xl:pt-32 text-center xl:text-left">
          <h1 className="h1 max-w-[46rem] leading-tight text-gray-900 drop-shadow-lg">
            Discover{" "}
            <span className="inline-flex">
              <span className="inline-flex items-center justify-center p-5 h-16 w-16 bg-secondary text-white -rotate-[31deg] rounded-full shadow-md">
                B
              </span>
              ooks
            </span>{" "}
            <img
              src={pencil}
              alt="pencilImg"
              height={49}
              width={49}
              className="inline-flex relative bottom-2 animate-bounce"
            />{" "}
            That Inspire Your World
          </h1>
          <p className="text-gray-700 mt-4">
            Explore a world of stories, knowledge, and inspiration. Discover
            books that ignite your imagination, broaden your perspective, and
            enrich your journey. From timeless classics to modern masterpieces,
            find the perfect read for every moment.
          </p>
          <div className="mt-6">
            <Link
              to={"/store"}
              className="btn-secondaryOne px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Right side (Styled Background Image) */}
        <div className="flex flex-1 relative z-10 top-12">
          <div className="relative">
            <img
              src={bg}
              alt="Books Background"
              height={600}
              width={600}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
