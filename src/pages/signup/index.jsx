import React, { useState } from "react";
import Layout from "../layout/layout";
import styles from "../../styles";
import { FormSelect, Input, Navbar, TitleText } from "../../components";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
    occupation: "",
  });
  const { email, password, fullname, occupation } = formData;

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  return (
    <Layout title="Sign Up">
      <section className={`${styles.xPaddings} py-8 relative`}>
        <Navbar
          iconStyle="text-primary-color"
          linkStyle="text-primary-black"
          title="Sign Up"
        />
        <div
          className={`${styles.yPaddings} ${styles.innerWidth} mx-auto lg:px-12 lg:mt-20 lg:mb-12 flex justify-center items-start`}
        >
          <div className="lg:flex-[0.75] z-10 flex flex-col justify-center items-center gap-6">
            <TitleText
              title={
                <>
                  <span className="text-primary-color">Grow Skills</span> From,
                  Anywhere
                </>
              }
              textStyles="text-secondary-black"
            />
            <div className="flex flex-col md:justify-start justify-center items-start w-full gap-8">
              <form className="w-full flex flex-col justify-start items-start gap-4">
                <label className="block lg:w-[80%] w-full">
                  <span className="text-secondary-black block mb-2">
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
                <label className="block lg:w-[80%] w-full">
                  <span className="text-secondary-black block mb-2">
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
                <label className="block lg:w-[80%] w-full">
                  <span className="text-secondary-black block mb-2">
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
                className="btn-primary rounded-none text-sm bg-orange-400 lg:w-[80%] w-full text-center"
              >
                Daftar
              </Link>
            </div>
          </div>
          <div className="lg:flex-[1.15] z-10 w-full lg:flex hidden justify-center items-center relative">
            <div className="z-10 rounded-tl-[50px] rounded-sm overflow-hidden w-[369px] h-[440px] absolute translate-y-6 translate-x-6">
              <Image
                src="/signup2.png"
                alt="hero2"
                width={500}
                height={500}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start px-5 py-2 gap-2 bg-white w-[300px] absolute right-0 -translate-x-10 bottom-0 translate-y-14 rounded-lg shadow-lg shadow-primary-black/40 z-20">
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
    </Layout>
  );
};

export default SignIn;
