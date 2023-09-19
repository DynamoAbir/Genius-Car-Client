import React from "react";

const FillBtn = ({ children }) => {
  return (
    <button className="w-[170px] h-[56px] rounded-[5px] bg-[#FF3811] text-white text-[18px] font-semibold">
      {children}
    </button>
  );
};

export default FillBtn;
