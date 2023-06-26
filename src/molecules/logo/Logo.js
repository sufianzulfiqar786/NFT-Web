import React from "react";

// svg
import logo from "../../assets/images/home/logo.svg";

const Logo = ({ width, fontSize }) => {
  return (
    <div className=" flex flex-col items-center">
      <img src={logo} alt="logo" style={{ width: width }} />
      <p className="logo-text pt-0 md:pt-3 text-[#71F6FF] font-['Silkscreen'] leading-[15px] tracking-[-1px]" style={{ fontSize: fontSize }}>
        FREE MINT. BLUE-CHIP UTILITY.
      </p>
    </div>
  );
};

export default Logo;
