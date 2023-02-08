import React from "react";
import { TitleText } from "../../components";
import styles from "../../styles";

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
        <div className="w-full bg-red-500 h-[100px]"></div>
      </div>
    </section>
  );
};

export default OurInstructor;
