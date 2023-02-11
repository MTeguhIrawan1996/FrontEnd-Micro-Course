import React from "react";
import IconPlay from "../../../public/images/icon-play.svg";
import { clases } from "../../constants";
import Image from "next/image";
import { TitleText } from "..";
import Link from "next/link";

const ListMyClass = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4">
      {clases.map((data, i) => (
        <div
          className="flex flex-col items-start justify-center"
          key={`${data.title}-${i}`}
        >
          <div className="relative h-[170px] w-full overflow-hidden rounded-lg">
            <Image
              src={data.imgUrl}
              fill
              quality={80}
              alt={data.title}
              className="h-full w-full object-cover"
              priority
              sizes="max-w-full"
            />
            <div className="group absolute inset-0 flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary-hover/10 opacity-0 backdrop-blur-sm transition-all delay-0 duration-300 ease-linear hover:opacity-100">
              <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-orange-400 opacity-0 transition-opacity delay-0 duration-[0.5s] ease-linear group-hover:opacity-100">
                <Link href={`/dashboard/${i + 1}`} className="w-full">
                  <IconPlay className="mx-auto aspect-square w-[80%] text-transparent" />
                </Link>
              </div>
            </div>
          </div>
          <TitleText
            title={<>{data.title}</>}
            textStyles="text-primary-black md:text-[18px] text-[14px] mt-4"
          />
          <p className="text-sm font-medium text-secondary-black">
            {data.level}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListMyClass;
