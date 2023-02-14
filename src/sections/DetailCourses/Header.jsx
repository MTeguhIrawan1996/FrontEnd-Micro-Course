import React from "react";
import { Navbar, TitleText, TypingText } from "../../components";
import Image from "next/image";
import styles from "../../styles";
import DetailImage from "../../../public/images/clas1.png";
import StudentIc from "../../../public/images/icon-nametag.svg";
import VideoIc from "../../../public/images/icon-playback.svg";

const HeaderDetailCourses = () => {
  return (
    <section className={`${styles.xPaddings} relative pt-8`}>
      <Navbar iconStyle="text-white" linkStyle="text-white" title="Courses" />
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={DetailImage}
          alt="Detail-Image"
          fill
          quality={80}
          placeholder="blur"
          className="z-0 h-full w-full bg-center bg-no-repeat object-cover"
          priority
          sizes="max-w-full"
        />
      </div>
      <div className="absolute inset-0 h-full bg-black/30 backdrop-brightness-50" />
      <div
        className={`${styles.yPaddings} ${styles.innerWidth} relative mx-auto flex flex-col items-center lg:px-12`}
      >
        <div className="pt-40 pb-60">
          <TypingText
            title={`Kelas Online:`}
            textStyles="text-white text-center"
          />
          <TitleText
            title={<>Start Vloging 101</>}
            textStyles="md:text-[60px] text-[40px] text-primary-hover text-center"
          />
        </div>
        <div className="absolute bottom-0 flex w-full translate-y-[50%] items-center justify-between gap-4 lg:gap-24 lg:px-12">
          <div className="flex w-full flex-1 flex-col items-center justify-start gap-4 overflow-hidden rounded-md bg-white p-6 shadow-lg shadow-primary-black/20 sm:items-start md:flex-row lg:p-8">
            <div className="w-[60%] md:w-[20%]">
              <StudentIc className="aspect-square w-full text-primary-hover" />
            </div>
            <div className="flex w-full flex-col items-center sm:items-start">
              <TitleText
                title={`Student`}
                textStyles="text-secondary-black text-xs md:text-sm text-start"
              />
              <TypingText
                title={<>188,309</>}
                textStyles="text-primary-black text-md md:text-2xl mt-2"
              />
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col items-center justify-start gap-4 overflow-hidden rounded-md bg-white p-6 shadow-lg shadow-primary-black/20 sm:items-start md:flex-row lg:p-8">
            <div className="w-[60%] md:w-[20%]">
              <VideoIc className="aspect-square w-full text-primary-hover" />
            </div>
            <div className="flex w-full flex-col items-center sm:items-start">
              <TitleText
                title={`Video`}
                textStyles="text-secondary-black text-xs md:text-sm text-start"
              />
              <TypingText
                title={<>1,435</>}
                textStyles="text-primary-black text-md md:text-2xl mt-2"
              />
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col items-center justify-start gap-4 overflow-hidden rounded-md bg-white p-6 shadow-lg shadow-primary-black/20 sm:items-start md:flex-row lg:p-8">
            <div className="w-[60%] md:w-[20%]">
              <StudentIc className="aspect-square w-full text-primary-hover" />
            </div>
            <div className="flex w-full flex-col items-center sm:items-start">
              <TitleText
                title={`Certificate`}
                textStyles="text-secondary-black text-xs md:text-sm"
              />
              <TypingText
                title={<>Tersedia</>}
                textStyles="text-primary-black text-md md:text-2xl mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDetailCourses;
