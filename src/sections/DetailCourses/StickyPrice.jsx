import React from "react";
import styles from "../../styles";
import { Button, TypingText, TitleText } from "../../components";
import { useSelector } from "react-redux";

const StickyPrice = () => {
  const { isSticky } = useSelector((state) => state.sticky);
  return (
    <section
      className={`fixed bottom-0 z-50 w-full bg-gradient-to-br from-white/70 to-secondary-black px-6 py-6 backdrop-blur-lg transition-all delay-0 duration-300 ease-in-out sm:px-16 sm:py-4 ${
        isSticky ? "opacity-100" : "translate-y-[25%] opacity-0"
      }`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex items-center justify-between lg:px-12`}
      >
        <div className="flex flex-col items-start justify-center gap-1">
          <TypingText
            title="Nama Kelas"
            textStyles="md:text-[14px] text-[12px]"
          />
          <TitleText
            title={<>Start Vloging 101</>}
            textStyles="md:text-[18px] text-[16px] text-primary-black font-lg text-primary-color"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-lg font-medium text-primary-color">Free</h2>
          <Button text="Enroll Now" styles="bg-orange-400" />
        </div>
      </div>
    </section>
  );
};

export default StickyPrice;
