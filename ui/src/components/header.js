import * as React from "react";

const Header = (props) => {
  const title = "Employee Listing";

  return (
    <header className="z-20 flex flex-grow flex-shrink-0 flex-col w-full shadow-none sticky top-0 bg-primary-500 text-white font-black border-t-4 border-solid border-primary-700">
      <div className="flex items-center px-2 h-12 text-2xl sm:text-3xl text-white">
        <span className="flex justify-center flex-shrink-0 tracking-wide font-sans font-light text-xs transform -rotate-90 uppercase">
          {title
            .split(/ /)
            .map((t) => t[0])
            .join("")}
        </span>
        <h6 className="flex-1 tracking-tighter font-serif font-black">
          Employee Listing
        </h6>
        <p className="text-base font-normal leading-6 tracking-tighter pr-2 font-sans">
          Robert Garrison
        </p>
      </div>
    </header>
  );
};

export default Header;
