import React from "react";
import { Star, TitleText } from "../../components";
import Image from "next/image";
import styles from "../../styles";
import TestiImg from "../../../public/images/testiImg.png";
import { Testimonials } from "../../constants";

const Testimonial = () => {
  return (
    <section className={`px-6 py-6 sm:px-16 sm:py-8`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col items-start justify-start lg:px-12`}
      >
        <TitleText
          title={
            <>
              Happy <span className="text-primary-hover">Student</span>
            </>
          }
          textStyles="md:text-[24px] text-[18px] text-primary-black mb-4"
        />
        <div className="flex w-full flex-col items-start justify-start gap-8">
          {Testimonials.map((data, index) => (
            <div
              className="flex w-full flex-col items-start justify-start gap-4"
              key={`Testimonial-${index}`}
            >
              <Star rating={data.rating} />
              <div className="w-full md:w-[50%]">
                <p className="text-secondary-black">{data.desc}</p>
              </div>
              <div className="mt-2 flex w-full items-center justify-start gap-3">
                <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src={TestiImg}
                    alt="Testimonial-01"
                    className="mx-auto h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <TitleText
                    title={<>{data.name}</>}
                    textStyles="md:text-[16px] text-[12px] text-primary-black font-medium text-start"
                  />
                  <p className="text-sm font-medium text-secondary-black">
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
