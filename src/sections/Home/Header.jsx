import React, { useState } from "react";
import styles from "../../styles";
import Image from "next/image";
import { Button, Input, Navbar, TitleText } from "../../components";
import Circle from "../../../public/images/circle-accent-1.svg";
import Hero from "../../../public/images/hero.png";
import { useDispatch } from "react-redux";
import { setEmailSignUp } from "../../../features/signUpSlice";
import { useRouter } from "next/router";

const Header = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setEmailSignUp({ emailState: email }));
    router.push("/signup");
  };

  return (
    <section className={`${styles.xPaddings} relative bg-primary-color py-8`}>
      <div className="gradient-01 absolute top-0 z-0" />
      <Circle className="absolute left-0 bottom-0 aspect-square w-[20%]" />
      <Navbar iconStyle="text-white" linkStyle="text-white" />
      <div
        className={`${styles.yPaddings} ${styles.innerWidth} mx-auto flex flex-col items-center justify-center gap-16 lg:mt-20 lg:mb-12 lg:flex-row lg:items-start lg:gap-0 lg:px-12`}
      >
        <div className="z-10 flex flex-[0.85] flex-col items-center justify-center gap-6">
          <TitleText
            title={
              <>
                <span className="text-primary-hover">The New</span> Way to
                Achieve Good <span className="text-primary-hover">Skills</span>
              </>
            }
          />
          <p className="w-full text-center text-sm font-light text-white md:text-start">
            We provide tons of pathskill that you can choose and focus on
          </p>
          <div className="flex w-full items-center justify-center md:justify-start">
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
            {/* <Link
              href="/signup"
              className="btn-primary flex h-10 items-center justify-center rounded-none bg-orange-400 text-sm focus:ring-0"
            >
              Daftar Now
            </Link> */}
            <Button
              text="Daftar Now"
              onClick={handleClick}
              styles="rounded-none bg-orange-400 text-sm focus:ring-0 h-10"
            />
          </div>
        </div>
        <div className="relative z-10 hidden w-full flex-[1.15] items-center justify-center lg:flex">
          <div className="absolute z-10 h-[440px] w-[369px] translate-y-6 translate-x-6 overflow-hidden rounded-sm rounded-tl-[50px]">
            <Image
              src={Hero}
              alt="hero"
              fill
              quality={100}
              priority
              placeholder="blur"
              className="z-10 h-full w-full bg-center bg-no-repeat object-contain"
              sizes="max-w-full"
            />
          </div>
          <div className="absolute right-0 top-0 z-20 flex w-[300px] -translate-x-10 -translate-y-6 flex-col items-start justify-start gap-2 rounded-lg bg-white px-5 py-2 shadow-lg shadow-primary-black/40">
            <h1 className="font-semibold text-zinc-600">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </h1>
            <span className="font-light text-zinc-400">
              Alyssa, Apps Developer
            </span>
          </div>
          <div className="h-[442px] w-[360px] rounded-sm rounded-tl-[50px] border-2 border-solid border-secondary-color" />
        </div>
      </div>
    </section>
  );
};

export default Header;
