import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg1.jpg";
import pencil from "../assets/pencil.png";

const Hero = () => {
  return (
    <section className="max-padd-container py-20 xl:py-36">
      <div className="flexCenter gap-12 flex-col xl:flex-row">
        {/* left side */}
        <div className="flex flex-1 flex-col pt-12 xl:pt-32">
          <h1 className="h1 max-w-[46rem]">
            Discover{" "}
            <span className="inline-flex">
              <span className="inline-flex items-center justify-center p-5 h-16 w-16 bg-secondary text-white -rotate-[31deg] rounded-full">
                B
              </span>
              ooks
            </span>{" "}
            <img
              src={pencil}
              alt="pencilImg"
              height={49}
              width={49}
              className="inline-flex relative bottom-2"
            />{" "}
            That Inspire Your World
          </h1>
          <p>
            Explore a world of stories, knowledge, and inspiration. Discover
            books that ignite your imagination, broaden your perspective, and
            enrich your journey. From timeless classics to modern masterpieces,
            find the perfect read for every moment
          </p>
          <div className="mt-6">
            <Link to={"/store"} className="btn-secondaryOne">
              Explore Now
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-1 relative z-10 top-12">
          <div>
            <img src={bg} alt="" height={600} width={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
