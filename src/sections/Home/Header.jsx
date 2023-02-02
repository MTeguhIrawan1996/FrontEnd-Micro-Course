import React from "react";
import styles from "../../styles";
import Circle from "../../../public/images/circle-accent-1.svg";
import { TitleText } from "../../components/CustomTexts";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Image from "next/image";

const Header = () => {
  return (
    <section className={`${styles.xPaddings} py-8 relative bg-primary-color`}>
      <div className="absolute top-0 gradient-01 z-0" />
      <Circle className="absolute left-0 bottom-0 w-[20%] aspect-square" />
      <Navbar />
      <div
        className={`${styles.yPaddings} ${styles.innerWidth} mx-auto lg:px-12 lg:mt-6 flex lg:flex-row flex-col justify-center items-center lg:items-start lg:gap-0 gap-16`}
      >
        <div className="flex-[0.85] z-10 flex flex-col justify-center items-center gap-6">
          <TitleText
            title={
              <>
                <span className="text-primary-hover">The New</span> Way to
                Achieve Good <span className="text-primary-hover">Skills</span>
              </>
            }
          />
          <p className="text-white font-light text-sm md:text-start text-center w-full">
            We provide tons of pathskill that you can choose and focus on
          </p>
          <div className="flex md:justify-start justify-center items-start w-full">
            <input
              className="px-4 py-2 hover:outline-none focus:outline-none bg-white text-sm font-normal placeholder:font-light lg:w-1/2 max-w-full drop-shadow-lg"
              placeholder="Your Email Address"
            />
            <Button
              text="Daftar Now"
              styles="rounded-none text-sm bg-orange-400"
            />
          </div>
        </div>
        <div className="flex-[1.15] z-10 w-full lg:flex hidden justify-center items-center relative">
          <img
            src="/hero.png"
            alt="hero"
            width={350}
            height={440}
            className="object-contain z-10 rounded-l-[50px]"
          />
          <div className="flex flex-col justify-start items-start px-5 py-2 gap-2 bg-white w-[300px] absolute left-[10%] top-[-20px] rounded-lg drop-shadow-lg z-20">
            <h1 className="text-zinc-600 font-semibold">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </h1>
            <span className="text-zinc-400 font-light">
              Alyssa, Apps Developer
            </span>
          </div>
          <div className="border-solid border-2 border-secondary-color w-[320px] aspect-square absolute right-[20%] top-[-10%] z-0 scale-110" />
        </div>
      </div>
    </section>
  );
};

export default Header;
