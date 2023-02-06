import React from "react";
import { Navbar, TitleText, TypingText } from "../../components";
import Image from "next/image";
import styles from "../../styles";
import DetailImage from "../../../public/images/clas1.png";
import StudentIc from "../../../public/images/icon-nametag.svg";
import VideoIc from "../../../public/images/icon-playback.svg";

const HeaderCourses = () => {
  return (
    <section className={`${styles.xPaddings} pt-8 relative`}>
      <Navbar iconStyle="text-white" linkStyle="text-white" title="Courses" />
      <div className="h-full w-full absolute inset-0 z-0">
        <Image
          src={DetailImage}
          alt="Detail-Image"
          fill
          quality={100}
          className="object-cover z-0 bg-no-repeat bg-center h-full w-full"
          priority
          sizes="max-w-full"
        />
      </div>
      <div className="backdrop-brightness-50 bg-black/30 absolute inset-0 h-full" />
      <div
        className={`${styles.yPaddings} ${styles.innerWidth} lg:px-12 mx-auto flex flex-col items-center relative`}
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
        <div className="lg:px-12 w-full absolute bottom-0 translate-y-[50%] flex justify-between items-center gap-4 lg:gap-24">
          <div className="w-full bg-white p-6 lg:p-8 flex-1 shadow-lg shadow-primary-black/20 rounded-md flex flex-col md:flex-row justify-start items-center sm:items-start gap-4 overflow-hidden">
            <div className="w-[60%] md:w-[20%]">
              <StudentIc className="text-primary-hover w-full aspect-square" />
            </div>
            <div className="w-full flex flex-col items-center sm:items-start">
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
          <div className="w-full bg-white p-6 lg:p-8 flex-1 shadow-lg shadow-primary-black/20 rounded-md flex flex-col md:flex-row justify-start items-center sm:items-start gap-4 overflow-hidden">
            <div className="w-[60%] md:w-[20%]">
              <VideoIc className="text-primary-hover w-full aspect-square" />
            </div>
            <div className="w-full flex flex-col items-center sm:items-start">
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
          <div className="w-full bg-white p-6 lg:p-8 flex-1 shadow-lg shadow-primary-black/20 rounded-md flex flex-col md:flex-row justify-start items-center sm:items-start gap-4 overflow-hidden">
            <div className="w-[60%] md:w-[20%]">
              <StudentIc className="text-primary-hover w-full aspect-square" />
            </div>
            <div className="w-full flex flex-col items-center sm:items-start">
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

export default HeaderCourses;
