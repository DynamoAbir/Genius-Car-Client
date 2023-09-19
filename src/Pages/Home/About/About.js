import React from "react";
import FillBtn from "../../../Components/FillBtn/FillBtn";
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="absolute right-5 top-1/2 w-3/5  border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="text-[#ff3811] font-bold">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum <br />{" "}
            available, but the majority have suffered alteration in some <br />{" "}
            form, by injected humour, or randomised words which don't <br />{" "}
            look even slightly believable.
          </p>
          <p className="mb-6">
            the majority have suffered alteration in some form, by injected{" "}
            <br />
            humour, or randomised words which don't look even slightly <br />
            believable.
          </p>
          <FillBtn>Get More Info</FillBtn>
        </div>
      </div>
    </div>
  );
};

export default About;
