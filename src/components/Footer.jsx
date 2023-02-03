import React, { useState } from "react";
import styles from "../styles";
import Link from "next/link";
import footer from "../constants/footer";
import Button from "./Button";
import Input from "./Input";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className={`sm:px-16 px-6 pt-12 bg-footer-color mt-12`}>
      <div className={`${styles.innerWidth} lg:px-12 mx-auto`}>
        <div className="flex flex-col justify-between items-start">
          <div className="flex flex-wrap justify-start items-start w-full gap-6">
            {footer.map((data, i) => (
              <div
                className={`${
                  i === 0 || i === 1
                    ? "lg:flex-[2] w-[40%]"
                    : "lg:flex-[3] w-full"
                } flex flex-col gap-4 lg:w-full`}
                key={i}
              >
                <h2 className="text-lg text-white">{data.title}</h2>
                <ul className="flex flex-col gap-2">
                  {data.list.map((l, indexL) => (
                    <li key={indexL}>
                      <Link
                        href={l.to}
                        className="text-secondary-black cursor-pointer hover:text-primary-hover hover:underline hover:underline-offset-1"
                      >
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:flex-[4] flex flex-col gap-4 w-full">
              <h2 className="text-lg text-white">Promotions</h2>
              <p className="text-secondary-black">
                Submit your emil for new update
              </p>
              <div className="flex md:justify-start justify-start items-start w-full">
                <div className="flex-1">
                  <Input
                    placeholder="Your email"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete="off"
                  />
                </div>
                <Button
                  text="Daftar Now"
                  styles="rounded-none text-sm bg-orange-400"
                />
              </div>
            </div>
          </div>
          <div className="border-solid border-t-[1px] border-secondary-black w-full p-8 text-center mt-12">
            <span className="text-sm text-secondary-black">
              {new Date().getFullYear()} Copyright Micro by Ondev. All Rights
              Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
