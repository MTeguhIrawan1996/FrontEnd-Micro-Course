import React from "react";
import styles from "../../styles";
import { Input, Navbar, TitleText, TypingText } from "../../components";

const HeaderCourses = () => {
  return (
    <section className={`${styles.xPaddings} bg-secondary-black pt-8`}>
      <Navbar iconStyle="text-white" linkStyle="text-white" />
      <div
        className={`${styles.yPaddings} ${styles.innerWidth} relative mx-auto flex w-full flex-col items-center justify-center gap-2`}
      >
        <div className="flex w-full flex-col items-center justify-center pb-20">
          <TitleText
            title={<>Library</>}
            textStyles="md:text-[60px] text-[40px] text-primary-hover text-center"
          />
          <p className="w-[80%] text-center text-sm font-light text-white lg:w-[30%]">
            Jangan mau kalah update dengan yang lainnya. Yuk ikuti perkembangan
            teknologi.
          </p>
        </div>
        <div className="absolute bottom-0 flex h-16 w-full translate-y-[50%] items-center justify-center md:w-1/2">
          <Input
            placeholder="Masukkan kata kunci pencarian"
            type="text"
            name="search"
            onChange={() => {}}
            autoComplete="off"
            styleInput="border-solid border-[1px] border-secondary-black"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderCourses;
