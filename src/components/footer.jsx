import React from "react";

const Footer = () => {
  return (
    <div className="h-[27rem] w-[100%] mx-auto px-5">
      <div className="relative h-[100%] w-[100%]">
        <img
          src="https://sweetmansfarm.com/wp-content/uploads/2019/03/Farm-Vegetables3_opt.jpg"
          alt="This is image"
          className="h-full w-full block"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-stretch">
          <div className="h-full w-full bg-black absolute opacity-40 top-0 left-0"></div>

          <div className="flex justify-between items-center gap-3 px-44">
            <div className="z-20 w-28">
              <h1 className="text-white text-lg mb-6">Lorem, ipsum.</h1>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, assumenda!
              </p>
            </div>
            <div className="z-20 w-28">
              <h1 className="text-white text-lg mb-6">Lorem, ipsum.</h1>
              <p className="text-sm text-green-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, assumenda!
              </p>
            </div>
            <div className="z-20 w-28">
              <h1 className="text-white text-lg mb-6">Lorem, ipsum.</h1>
              <p className="text-green-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, assumenda!
              </p>
            </div>
            <div className="z-20 w-28">
              <h1 className="text-white text-lg mb-6">Lorem, ipsum.</h1>
              <p className="text-white text-sm">Lorem ipsum dolor sit amet.</p>

              <div className="flex gap-1 py-7">
                <input
                  type="text"
                  className="bg-black opacity-70 border-2 border-white text-white placeholder-white outline-none rounded-lg w-32 block"
                  placeholder="Search..."
                />
                <button className=" bg-green-400 py-0.5 px-2 rounded-lg">
                  Srch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
