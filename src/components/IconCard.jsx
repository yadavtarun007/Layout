import React from "react";

const IconCard = ({icon}) => {
  return (
    <div className="w-[19rem] h-[21.5rem] shadow-lg hover:drop-shadow-lg rounded bg-gray-100">
      
      <div className="p-5">
        {icon}
      </div>

      <div className="py-2 px-2">
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          Title of the card
        </a>
        <p className="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium fuga, officiis cum distinctio neque velit laudantium nulla consequatur soluta?
        </p>

        <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nam quod numquam!
        </p>
      </div>
    </div>
  );
};

export default IconCard;
