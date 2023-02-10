import React, { useState } from "react";
import styles from "../../styles";
import Link from "next/link";
import Image from "next/image";
import { Input, Navbar, TitleText } from "../../components";
import Circle from "../../../public/images/circle-accent-1.svg";
import Hero from "../../../public/images/hero.png";

const Header = () => {
  const [email, setEmail] = useState("");
  return (
    <section className={`${styles.xPaddings} py-8 relative bg-primary-color`}>
      <div className="absolute top-0 gradient-01 z-0" />
      <Circle className="absolute left-0 bottom-0 w-[20%] aspect-square" />
      <Navbar iconStyle="text-white" linkStyle="text-white" />
      <div
        className={`${styles.yPaddings} ${styles.innerWidth} mx-auto lg:px-12 lg:mt-20 lg:mb-12 flex lg:flex-row flex-col justify-center items-center lg:items-start lg:gap-0 gap-16`}
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
          <div className="flex md:justify-start justify-center items-center w-full">
            <div className="flex-1">
              <Input
                placeholder="Your email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
                styleInput="h-10"
              />
            </div>
            <Link
              href="/signup"
              className="btn-primary rounded-none text-sm bg-orange-400 focus:ring-0 h-10 flex justify-center items-center"
            >
              Daftar Now
            </Link>
          </div>
        </div>
        <div className="flex-[1.15] z-10 w-full lg:flex hidden justify-center items-center relative">
          <div className="z-10 rounded-tl-[50px] rounded-sm overflow-hidden w-[369px] h-[440px] absolute translate-y-6 translate-x-6">
            <Image
              src={Hero}
              alt="hero"
              fill
              quality={100}
              priority
              placeholder="blur"
              className="object-contain z-10 h-full w-full bg-no-repeat bg-center"
              sizes="max-w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-start px-5 py-2 gap-2 bg-white w-[300px] absolute right-0 -translate-x-10 top-0 -translate-y-6 rounded-lg shadow-lg shadow-primary-black/40 z-20">
            <h1 className="text-zinc-600 font-semibold">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </h1>
            <span className="text-zinc-400 font-light">
              Alyssa, Apps Developer
            </span>
          </div>
          <div className="border-solid border-2 border-secondary-color w-[360px] h-[442px] rounded-sm rounded-tl-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default Header;
