import React, { useState } from "react";
import styles from "../../styles";
import { FormSelect, Input, Layout, Navbar, TitleText } from "../../components";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
    occupation: "",
  });
  const { email, password, fullname, occupation } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  return (
    <section className={`${styles.xPaddings} relative py-8`}>
      <Navbar
        iconStyle="text-primary-color"
        linkStyle="text-primary-black"
        title="Sign Up"
      />
      <div
        className={`${styles.yPaddings} ${styles.innerWidth} mx-auto flex items-start justify-center lg:mt-20 lg:mb-12 lg:px-12`}
      >
        <div className="z-10 flex flex-col items-center justify-center gap-6 lg:flex-[0.75]">
          <TitleText
            title={
              <>
                <span className="text-primary-color">Grow Skills</span> From,
                Anywhere
              </>
            }
            textStyles="text-secondary-black"
          />
          <div className="flex w-full flex-col items-start justify-center gap-8 md:justify-start">
            <form className="flex w-full flex-col items-start justify-start gap-4">
              <label className="block w-full lg:w-[80%]">
                <span className="mb-2 block text-secondary-black">
                  Full Name
                </span>
                <Input
                  placeholder="Your Name"
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  value={fullname}
                  autoComplete="off"
                  styleInput="border-solid border-[1px] border-secondary-black"
                />
              </label>
              <label className="block w-full lg:w-[80%]">
                <span className="mb-2 block text-secondary-black">
                  Email Address
                </span>
                <Input
                  placeholder="Your email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  autoComplete="off"
                  styleInput="border-solid border-[1px] border-secondary-black"
                />
              </label>
              <label className="block w-full lg:w-[80%]">
                <span className="mb-2 block text-secondary-black">
                  Password
                </span>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  autoComplete="off"
                  styleInput="border-solid border-[1px] border-secondary-black"
                />
              </label>
              <FormSelect
                placeholder="Select your focus"
                name="occupation"
                styleInput="border-solid border-[1px] border-secondary-black"
                value={occupation}
                onClick={handleChange}
              >
                <option value="">Select your focus</option>
                <option value="chocolate">Chocolate</option>
                <option value="strawberry">Strawberry</option>
                <option value="vanilla">Vanilla</option>
              </FormSelect>
            </form>
            <Link
              href="/"
              className="btn-primary w-full rounded-none bg-orange-400 text-center text-sm lg:w-[80%]"
            >
              Daftar
            </Link>
          </div>
        </div>
        <div className="relative z-10 hidden w-full items-center justify-center lg:flex lg:flex-[1.15]">
          <div className="absolute z-10 h-[440px] w-[369px] translate-y-6 translate-x-6 overflow-hidden rounded-sm rounded-tl-[50px]">
            <Image
              src="/signup2.png"
              alt="hero2"
              fill
              quality={100}
              className="h-full w-full object-cover"
              sizes="max-w-full"
              priority
            />
          </div>
          <div className="absolute right-0 bottom-0 z-20 flex w-[300px] -translate-x-10 translate-y-14 flex-col items-start justify-start gap-2 rounded-lg bg-white px-5 py-2 shadow-lg shadow-primary-black/40">
            <h1 className="font-semibold text-zinc-600">
              Semua materi terstruktrur baik dan mentor yang sangat lihai
            </h1>
            <span className="font-light text-zinc-400">
              James, Apps Developer
            </span>
          </div>
          <div className="h-[442px] w-[360px] rounded-sm rounded-tl-[50px] border-2 border-solid border-secondary-color" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page) {
  return <Layout title="Online Courses">{page}</Layout>;
};
