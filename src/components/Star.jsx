import React from "react";
import StarIcons from "../../public/images/star.svg";

const Star = ({ rating }) => {
  return (
    <div className="flex justify-start items-start gap-2">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <React.Fragment key={`Star-${index}`}>
            <StarIcons
              className={`h-6 w-6 ${
                index <= rating ? "text-yellow-500" : "text-zinc-400"
              }`}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Star;
