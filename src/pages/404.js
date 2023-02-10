import React from "react";
import { Layout, TitleText } from "../components";
import Link from "next/link";
import Image from "next/image";
import Img404 from "../../public/404.png";

const Custom404 = () => {
  return (
    <section className="h-screen p-16">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="h-[250px] aspect-square relative">
          <Image
            src={Img404}
            alt="404"
            fill
            className="h-full w-full object-contain mx-auto"
            quality={100}
            sizes="max-w-full"
            priority
          />
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <TitleText
            title={
              <>
                Opps! <span className="text-primary-hover">404</span> NotFound
              </>
            }
            textStyles="text-primary-black md:text-[24px] text-[22px] mt-2"
          />
          <p className="lg:px-8 px-4 text-center mt-2 text-secondary-black font-light">
            The page that you requested is not found in our system
          </p>
          <Link
            href="/"
            className="px-6 py-2 text-white font-medium z-10 hover:bg-primary-hover focus:ring-2 focus:ring-sky-300 transition-all ease-cubic-bezier duration-300 delay-0 active:bg-secondary-color drop-shadow-lg rounded-none text-sm bg-orange-400 mt-6"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page) {
  return <Layout title="404">{page}</Layout>;
};
