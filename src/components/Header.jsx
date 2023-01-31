import React from "react";
import Image from "next/image";
import styles from "../styles";
import Circle from "../../public/images/circle-accent-1.svg";
import Link from "next/link";
import { links } from "../constants";
import { TitleText } from "./CustomTexts";
import Button from "./Button";
import Logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <section className={`${styles.xPaddings} py-8 relative bg-indigo-900`}>
      <div className="absolute top-0 gradient-01 z-0" />
      <Image
        src={Circle}
        alt="Circle"
        className="absolute left-0 bottom-0 w-[20%] aspect-square"
      />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
      >
        <Image src={Logo} alt="Logo" className="w-12 aspect-square" />
        <div className="flex justify-center items-center gap-8">
          {links.map((link, i) => (
            <Link
              href={`${link.to}`}
              key={i}
              className="md:block hidden text-white text-base font-medium z-10 transition-all ease-in duration-300 hover:text-primary-hover"
            >
              {link.name}
            </Link>
          ))}
          <Button text="Masuk" />
        </div>
      </div>
      <div
        className={`${styles.yPaddings} lg:px-12 lg:mt-6 flex lg:flex-row flex-col justify-center items-center lg:items-start lg:gap-0 gap-16`}
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
            className="w-[340px] h-[400px] object-contain z-10"
          />
          <div className="flex flex-col justify-start items-start px-5 py-2 gap-2 bg-white w-[290px] absolute left-[10%] top-[-20px] rounded-lg drop-shadow-lg z-20">
            <h1 className="text-zinc-600 font-semibold">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </h1>
            <span className="text-zinc-400 font-light">
              Alyssa, Apps Developer
            </span>
          </div>
          <div className="border-solid border-2 border-secondary-color w-[40%] aspect-square absolute right-[20%] top-[-10%] z-0" />
        </div>
      </div>
    </section>
  );
};

export default Header;
