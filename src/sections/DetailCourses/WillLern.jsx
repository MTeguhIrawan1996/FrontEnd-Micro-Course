import React, { useState } from "react";
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

  const open = (i) => {
    return keys?.some((k) => k.key === i);
  };

  return (
    <section className={`px-6 py-6 sm:px-16 sm:py-8`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col items-start justify-start lg:px-12`}
      >
        <TitleText
          title={
            <>
              You Will <span className="text-primary-hover">Learn</span>
            </>
          }
          textStyles="md:text-[24px] text-[18px] text-primary-black mb-4"
        />
        <div className="hide-scrollbar flex max-h-[75vh] w-full flex-col items-start justify-start gap-2 overflow-hidden overflow-y-auto">
          {learnList.data.map((data, i) => (
            <Accordion
              open={open(i)}
              className="w-full rounded-lg bg-zinc-200 px-4 py-4 text-sm font-normal md:w-[70%] lg:w-[50%]"
              key={`${data.title}-${i}`}
            >
              <div
                className={`group flex w-full max-w-full items-center justify-between`}
              >
                <span className="font-normal text-primary-black first-letter:uppercase">
                  {data.title}
                </span>
                <div
                  className="h-8 w-8 cursor-pointer rounded-full bg-zinc-300 p-2"
                  onClick={() => {
                    handleClick(i);
                  }}
                >
                  <ChevronDownIcon
                    className={`h-4 w-4 text-zinc-700 group-hover:text-zinc-400 ${
                      open(i) && "rotate-180"
                    }`}
                  />
                </div>
              </div>
              <AccordionBody
                className={`mt-2 flex w-full flex-col items-start justify-start gap-2`}
              >
                {data.list.map((sublist, d) => (
                  // Elemnt List
                  <div
                    className="group flex w-full cursor-pointer items-center justify-between rounded-2xl bg-secondary-black px-6 py-2 text-sm font-normal transition-all delay-0 duration-[0.1s] ease-linear hover:bg-primary-hover"
                    key={`${sublist.title}-${d}`}
                  >
                    <span className="text-white">{sublist.title}</span>
                    {sublist.access && (
                      <IconPlay className="h-5 w-5 text-yellow-400" />
                    )}
                    {!sublist.access && (
                      <IconLock className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WillLern;
