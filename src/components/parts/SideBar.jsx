import {
  BookOpenIcon,
  ChevronDoubleLeftIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  PencilSquareIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import UserImg from "../../../public/images/user.png";
import { TitleText } from "./CustomTexts";
import Link from "next/link";

const menuItems = [
  { id: 1, label: "My Class", icon: PencilSquareIcon, link: "/" },
  { id: 2, label: "Library", icon: BookOpenIcon, link: "/posts" },
  { id: 3, label: "Transactions", icon: CreditCardIcon, link: "/users" },
  { id: 4, label: "Settings", icon: Cog6ToothIcon, link: "/tutorials" },
];

const SideBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);

  return (
    <section
      className={`z-50 flex min-h-screen flex-col justify-between bg-footer-color px-6 pt-6 pb-4 transition-all delay-0 duration-300 ease-cubic-bezier sm:relative ${
        !toggleCollapse ? "fixed w-60 sm:w-80" : "w-20 items-center"
      }`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="mb-4 flex w-full items-start justify-end">
            <ChevronDoubleLeftIcon
              className={`aspect-square w-8 cursor-pointer text-white transition-all delay-0 duration-300 ease-cubic-bezier hover:text-primary-hover ${
                toggleCollapse && "rotate-180"
              }`}
              onClick={() => setToggleCollapse((state) => !state)}
            />
          </div>
          {!toggleCollapse && (
            <>
              <div className="relative mb-2 flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full border-[1px] border-solid border-white bg-footer-color">
                <Image
                  src={UserImg}
                  alt="User-01"
                  className="mx-auto aspect-square w-[80%] rounded-full object-cover"
                  priority
                />
              </div>
              <TitleText
                title={<>Teguh Irawan</>}
                textStyles="text-lg font-light"
              />
              <p className="text-sm font-medium text-secondary-black">
                Web Developer
              </p>
            </>
          )}
        </div>
        {/* Link */}
        <div className="flex flex-col items-start justify-start gap-4">
          {menuItems.map((menu, index) => (
            <Link
              href={menu.link}
              className="group flex w-full items-center justify-start gap-4 rounded-md p-1 text-sm font-semibold text-zinc-300 transition-all delay-0 duration-300 ease-cubic-bezier hover:bg-primary-hover"
              key={`menu-${index}`}
            >
              <menu.icon className="h-6 w-6 text-white" />
              {!toggleCollapse && menu.label}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/signin"
        className="group flex items-center justify-start gap-4 rounded-md p-1 text-sm font-semibold text-zinc-300 transition-all delay-0 duration-300 ease-cubic-bezier hover:bg-primary-hover"
      >
        <PowerIcon className="aspect-square w-6 cursor-pointer text-white transition-all delay-0 duration-300 ease-cubic-bezier" />
        {!toggleCollapse && <span>Logout</span>}
      </Link>
    </section>
  );
};

export default SideBar;
