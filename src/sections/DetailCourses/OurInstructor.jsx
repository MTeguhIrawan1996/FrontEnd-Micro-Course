import React from "react";
import Image from "next/image";
import { TitleText } from "../../components";
import styles from "../../styles";
import InImg from "../../../public/images/mtr.png";

const OurInstructor = () => {
  return (
    <section className={`sm:px-16 sm:py-8 px-6 py-6`}>
      <div
        className={`${styles.innerWidth} lg:px-12 mx-auto flex justify-start items-start flex-col`}
      >
        <TitleText
          title={
            <>
              Our <span className="text-primary-hover">Instructor</span>
            </>
          }
          textStyles="md:text-[24px] text-[18px] text-primary-black mb-4"
        />
        <div className="w-full flex justify-start items-center gap-3">
          <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src={InImg}
              alt="MTR-01"
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex-1">
            <TitleText
              title={<>Jhon Doe</>}
              textStyles="md:text-[18px] text-[14px] text-primary-black font-medium text-start"
            />
            <p className="text-secondary-black font-medium text-sm">
              Website Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInstructor;
