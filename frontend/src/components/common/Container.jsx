import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full md:max-w-6xl lg:max-w-7xl xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;