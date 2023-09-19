import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

import "./Carousel.css";
import CarouselItem from "./CarouselItem";
const Carousel = () => {
  const bannerData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div>
      <div className="carousel h-[900px] rounded-xl mb-12 pt-12 w-full">
        {/* <div id="slide1" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={b1} className="w-full" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
            <h1 className="text-6xl font-bold text-white">
              Affordable <br /> Price for Car <br /> servicing
            </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4">
            <p className="text-white text-xl">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24  bottom-20">
            <FillBtn>Discover More</FillBtn>
            <OutlineBtn>Latest Project</OutlineBtn>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 bottom-3 bg-[#ffffff33] border-none hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div> */}
        {bannerData.map((slide) => (
          <CarouselItem key={slide.id} slide={slide}></CarouselItem>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
