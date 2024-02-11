import React from "react";

const Card = ({ source }) => {
  return (
    <div className="w-[19rem] h-[21.5rem] shadow-lg hover:drop-shadow-lg rounded bg-gray-100">
      <img
        className="h-52 w-full object-cover p-2  block"
        src={source}
        alt="Card image"
      />

      <div className="py-2 px-2">
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          Title of the card
        </a>
        <p className="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button className="bg-green-400 hover:bg-green-500 py-1 px-3 font-semibold rounded-2xl shadow-md my-1">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
