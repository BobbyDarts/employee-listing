import * as React from "react";

const Loading = ({ message = "Please wait...", ...rest }) => {
  return (
    <section className="loading flex items-center justify-center fixed w-full h-full text-white bg-transparent -mt-12">
      <div className="flex-col border border-primary-500 px-5 py-3 rounded-lg bg-white">
        <div className="flex items-center justify-center relative w-24 h-5">
          <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary-500 animate-grow"></div>
          <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary-500 animate-slide-x-10"></div>
          <div className="absolute top-0 left-0 ml-10 w-4 h-4 rounded-full bg-primary-500 animate-slide-x-10"></div>
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary-500 animate-shrink"></div>
        </div>
        <div className="flex items-center justify-center text-xs text-primary-500 pt-4">
          {message}
        </div>
      </div>
    </section>
  );
};

export default Loading;
