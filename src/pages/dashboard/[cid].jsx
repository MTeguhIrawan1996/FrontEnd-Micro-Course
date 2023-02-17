import React, { useState } from "react";
import { Button, Layout, TitleText, TypingText } from "../../components";
import styles from "../../styles";
import dynamic from "next/dynamic";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { learnList } from "../../constants";
import IconPlay from "../../../public/images/icon-play.svg";
import IconLock from "../../../public/images/icon-lock.svg";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const DetailMyCourses = () => {
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
    <section className={`${styles.paddings} max-h-screen overflow-y-auto`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col items-start justify-center gap-6`}
      >
        <div className="flex h-[320px] w-full items-start overflow-hidden rounded-xl md:h-[520px]">
          <div className="h-full w-full overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Sya_ET05N7E"
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center pb-8">
          <div className="mb-4 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex w-full flex-col items-start justify-start">
              <TitleText
                title={
                  <>
                    Install <span className="text-primary-hover">Tools</span>
                  </>
                }
                textStyles="md:text-[24px] text-[18px] text-primary-black"
              />
              <TypingText title="Materi bagian Part I" />
            </div>
            <div className="flex w-full items-start justify-start gap-4 md:justify-end">
              <Button
                text="Prev"
                styles="bg-orange-400 px-12 rounded-xl drop-shadow-none w-full md:w-fit"
              />
              <Button
                text="Next"
                styles="px-12 rounded-xl drop-shadow-none w-full md:w-fit"
              />
            </div>
          </div>
          <div className="hide-scrollbar flex max-h-[75vh] w-full flex-col items-start justify-start gap-2 overflow-hidden overflow-y-auto">
            {learnList.map((data, i) => (
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
      </div>
    </section>
  );
};

export default DetailMyCourses;

DetailMyCourses.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
