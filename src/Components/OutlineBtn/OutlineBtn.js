import React from "react";

const OutlineBtn = ({ children }) => {
  return (
    <div>
      <button className="btn btn-outline border-[#FFFFFF] w-[170px] h-[56px] text-white text-[18px] font-semibold rounded-[5px] ">
        {children}
      </button>
    </div>
  );
};

export default OutlineBtn;
