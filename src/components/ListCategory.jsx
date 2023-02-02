import React from "react";
import category from "../constants/category";

const ListCategory = () => {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 w-full">
      {category.map((data, i) => (
        <div
          className="w-full border-solid border-[1px] border-zinc-300 rounded-sm group hover:bg-primary-color hover:shadow-lg hover:shadow-primary-color/40 hover:border-transparent cursor-pointer transition-all ease-linear duration-300 delay-0 overflow-hidden"
          key={i}
        >
          <div className="flex flex-col justify-between items-start px-4 py-6 gap-2 h-full">
            <data.imgUrl className="text-secondary-black w-[40%] aspect-square group-hover:text-white" />
            <div className="mt-10 flex flex-col justify-start items-start w-full gap-2">
              <h2 className="text-primary-black text-lg font-normal group-hover:text-white">
                {data.title}
              </h2>
              <p className="text-secondary-black text-base font-normal group-hover:text-zinc-300">
                12,493 Courses
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCategory;
