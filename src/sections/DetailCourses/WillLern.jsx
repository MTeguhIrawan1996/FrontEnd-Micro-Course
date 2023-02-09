import React, { useEffect, useState } from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import IconPlay from "../../../public/images/icon-play.svg";
import IconLock from "../../../public/images/icon-lock.svg";
import { learnList } from "../../constants";

const WillLern = () => {
  const [keys, setKeys] = useState([{ key: 0 }]);

  const handleClick = (key) => {
    setKeys((prevKeys) => {
      const filteredKeys = prevKeys.filter((k) => k.key !== key);
      const updatedKeys = [...prevKeys, { key: key }];
      return prevKeys.some((k) => k.key === key) ? filteredKeys : updatedKeys;
    });
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const open = (i) => {
    return keys?.some((k) => k.key === i);
  };
  return (
    <section className={`sm:px-16 sm:py-8 px-6 py-6`}>
      <div
        className={`${styles.innerWidth} lg:px-12 mx-auto flex justify-start items-start flex-col`}
      >
        <TitleText
          title={
            <>
              You Will <span className="text-primary-hover">Learn</span>
            </>
          }
          textStyles="md:text-[24px] text-[18px] text-primary-black mb-4"
        />
        {learnList.map((data, i) => (
          <Accordion
            open={open(i)}
            animate={customAnimation}
            key={`${data.title}-${i}`}
            className="w-full md:w-[70%] lg:w-[50%] drop-shadow-lg"
          >
            <div
              className={`flex justify-between items-center px-4 py-2 bg-white text-sm font-normal w-full max-w-full group cursor-pointer border-solid border-[1px] border-zinc-400 ${
                keys?.some((k) => k.key === i)
                  ? ""
                  : learnList.length - 1 === i
                  ? "border-b-[1px]"
                  : "border-b-0"
              }`}
              onClick={() => {
                handleClick(i);
              }}
            >
              <span className="font-normal text-secondary-black first-letter:uppercase">
                {data.title}
              </span>
              <ChevronDownIcon
                className={`h-4 w-4 text-zinc-700 group-hover:text-zinc-400 ${
                  open(i) && "rotate-180"
                }`}
              />
            </div>
            {data.list.map((sublist, d) => (
              // Elemnt List
              <AccordionBody
                className={`
                } w-full bg-zinc-200`}
                key={`${sublist.title}-${d}`}
              >
                <div className="px-6 py-2 cursor-pointer hover:bg-secondary-black text-secondary-black group text-sm font-normal transition-all delay-0 duration-[0.1s] ease-linear flex justify-between items-center">
                  <span className="group-hover:text-white">
                    {sublist.title}
                  </span>
                  {sublist.access && (
                    <IconPlay className="h-5 w-5 group-hover:text-primary-hover" />
                  )}
                  {!sublist.access && (
                    <IconLock className="h-5 w-5 group-hover:text-red-400" />
                  )}
                </div>
              </AccordionBody>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default WillLern;
