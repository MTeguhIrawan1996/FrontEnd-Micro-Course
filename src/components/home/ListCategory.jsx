import React from "react";
import { category } from "../../constants";

const ListCategory = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
      {category.map((data, i) => (
        <div
          className="group w-full cursor-pointer overflow-hidden rounded-sm border-[1px] border-solid border-zinc-300 transition-all delay-0 duration-300 ease-linear hover:border-transparent hover:bg-primary-color hover:shadow-lg hover:shadow-primary-color/40"
          key={i}
        >
          <div className="flex h-full flex-col items-start justify-between gap-2 px-4 py-6">
            <data.imgUrl className="aspect-square w-[40%] text-secondary-black group-hover:text-white" />
            <div className="mt-10 flex w-full flex-col items-start justify-start gap-2">
              <h2 className="text-lg font-normal text-primary-black group-hover:text-white">
                {data.title}
              </h2>
              <p className="text-base font-normal text-secondary-black group-hover:text-zinc-300">
                {data.qty} Courses
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCategory;
