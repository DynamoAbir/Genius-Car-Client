import React from "react";
import FillBtn from "../../../Components/FillBtn/FillBtn";
import OutlineBtn from "../../../Components/OutlineBtn/OutlineBtn";

const CarouselItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" />
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
          href={`#slide${prev}`}
          className="btn btn-circle mr-5 bottom-3 bg-[#ffffff33] border-none hover:bg-[#FF3811]"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-[#FF3811] border-none"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
