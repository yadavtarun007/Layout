import React from "react";

const Image = () => {
  return (
    <div className="h-[42rem] w-[100%] mx-auto px-5">
      <div className="relative h-[100%] w-[100%]">
        <img
          src="https://www.thegardener.co.za/wp-content/uploads/2018/05/Fotolia_79072223_Subscription_Monthly_XXL.jpg"
          alt="This is image"
          className="h-full w-full block"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="h-full w-full bg-black absolute opacity-40 top-0 left-0"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-white text-6xl mb-6">100% Organic</h1>
            <button className="border-white border-2 text-white px-6 py-3 rounded-full">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
