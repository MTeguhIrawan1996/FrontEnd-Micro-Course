import React from "react";
import IconPreview from "../../public/images/icon-preview.svg";
import { clases } from "../constants";
import Image from "next/image";
import Link from "next/link";

const ListImageCourses = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-8 w-full">
      {clases.map((data, i) => (
        <div
          className="flex justify-center items-center"
          key={`${data.title}-${i}`}
        >
          <div className="h-[170px] w-full rounded-lg overflow-hidden relative">
            <Image
              src={data.imgUrl}
              fill
              quality={80}
              alt={data.title}
              className="w-full h-full object-cover"
              priority
              sizes="max-w-full"
            />
            <div className="absolute opacity-0 hover:opacity-100 bg-primary-hover/10 inset-0 backdrop-blur-sm transition-all ease-linear duration-300 delay-0 cursor-pointer flex justify-center items-center w-full group">
              <div className="w-[20%] aspect-square rounded-full opacity-0 bg-orange-400 flex justify-center items-center group-hover:opacity-100 transition-opacity ease-linear duration-[0.5s] delay-0">
                <Link href={`/courses/${i + 1}`} className="w-full">
                  <IconPreview className="w-[80%] h-[80%] mx-auto text-transparent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListImageCourses;
