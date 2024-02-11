import React from "react";
import Card from "./card";
import IconCard from "./IconCard";

const Grid = ({source,icon}) => {
  return (
    <div className="flex justify-center items-center  min-h-screen mx-auto">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        {Array.from({ length: 9 }).map((item, index) => {
            console.log(item);
            return(
                
                    (source)? (<Card key={index} source={source} />) : (<IconCard key={index} icon={icon} />)
                
            )
        })}
      </div>
    </div>
  );
};

export default Grid;
