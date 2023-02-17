import React, { useState } from "react";
import { Button, Layout, TitleText, TypingText } from "../../components";
import styles from "../../styles";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const DetailMyCourses = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
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
                styles="bg-orange-400 px-12 rounded-xl drop-shadow-none"
              />
              <Button text="Next" styles="px-12 rounded-xl drop-shadow-none" />
            </div>
          </div>
          <div className="hide-scrollbar flex h-[50vh] flex-col items-start justify-start gap-2 overflow-y-auto bg-yellow-400">
            <Accordion
              open={open === 1}
              icon={<ChevronDownIcon id={1} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<ChevronDownIcon id={2} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<ChevronDownIcon id={3} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 1}
              icon={<ChevronDownIcon id={1} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<ChevronDownIcon id={2} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<ChevronDownIcon id={3} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 1}
              icon={<ChevronDownIcon id={1} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<ChevronDownIcon id={2} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<ChevronDownIcon id={3} open={open} />}
              className="w-full bg-zinc-400 px-4 py-2 text-sm font-normal md:w-[70%] lg:w-[50%]"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`group flex w-full max-w-full cursor-pointer items-center justify-between`}
              >
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
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
