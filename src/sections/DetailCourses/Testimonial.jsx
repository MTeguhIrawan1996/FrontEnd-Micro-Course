import React from "react";
import { Star, TitleText } from "../../components";
import Image from "next/image";
import styles from "../../styles";
import TestiImg from "../../../public/images/testiImg.png";
import { Testimonials } from "../../constants";

const Testimonial = () => {
  return (
    <section className={`sm:px-16 sm:py-8 px-6 py-6`}>
      <div
        className={`${styles.innerWidth} lg:px-12 mx-auto flex justify-start items-start flex-col`}
      >
        <TitleText
          title={
            <>
              Happy <span className="text-primary-hover">Student</span>
            </>
          }
          textStyles="md:text-[24px] text-[18px] text-primary-black mb-4"
        />
        <div className="w-full flex flex-col justify-start items-start gap-8">
          {Testimonials.map((data, index) => (
            <div
              className="w-full flex justify-start items-start flex-col gap-4"
              key={`Testimonial-${index}`}
            >
              <Star rating={data.rating} />
              <div className="md:w-[50%] w-full">
                <p className="text-secondary-black">{data.desc}</p>
              </div>
              <div className="w-full flex justify-start items-center gap-3 mt-2">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
                  <Image
                    src={TestiImg}
                    alt="Testimonial-01"
                    className="object-cover w-full h-full mx-auto"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <TitleText
                    title={<>{data.name}</>}
                    textStyles="md:text-[16px] text-[12px] text-primary-black font-medium text-start"
                  />
                  <p className="text-secondary-black font-medium text-sm">
                    {data.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
