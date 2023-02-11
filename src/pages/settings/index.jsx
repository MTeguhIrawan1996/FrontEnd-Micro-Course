import React, { useState } from "react";
import {
  FormSelect,
  Input,
  Layout,
  TitleText,
  TypingText,
} from "../../components";
import styles from "../../styles";
import Link from "next/link";
import Image from "next/image";
import DefaultImg from "../../../public/images/default-img.png";

const Settings = () => {
  const [formData, setformData] = useState({
    fullname: "M Teguh Irawan",
    email: "teguhirawan1996@gmail.com",
    password: "",
    occupation: "",
  });
  const { email, password, fullname, occupation } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  return (
    <section className={`${styles.paddings} max-h-screen overflow-y-auto`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center gap-6`}
      >
        <div className="flex w-full flex-col items-start justify-start">
          <TitleText
            title={<>Settings</>}
            textStyles="md:text-[24px] text-[18px] text-primary-black"
          />
          <TypingText title="Secure your data informasi" />
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <div className="relative flex h-[90px] w-[90px] items-center justify-center">
            <Image
              src={DefaultImg}
              alt="User-01"
              className="mx-auto aspect-square w-full rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label className="block">
              <input
                type="file"
                className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
              />
            </label>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-8 md:justify-start">
          <form className="flex w-full flex-col items-start justify-start gap-4">
            <label className="block w-full lg:w-[50%]">
              <span className="mb-2 block text-secondary-black">Full Name</span>
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
            <label className="block w-full lg:w-[50%]">
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
            <label className="block w-full lg:w-[50%]">
              <span className="mb-2 block text-secondary-black">Password</span>
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
              width="w-full lg:w-[50%]"
            >
              <option value="">Select your focus</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="vanilla">Vanilla</option>
            </FormSelect>
          </form>
          <Link
            href="/"
            className="btn-primary w-full rounded-none bg-orange-400 text-center text-sm lg:w-[50%]"
          >
            Simpan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Settings;

Settings.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
