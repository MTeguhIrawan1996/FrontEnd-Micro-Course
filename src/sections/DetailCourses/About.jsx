import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";

const About = () => {
  return (
    <section className={`sm:px-16 sm:py-8 px-6 py-6 mt-28 md:mt-20`}>
      <div
        className={`${styles.innerWidth} lg:px-12 mx-auto flex justify-start items-start flex-col gap-4`}
      >
        <TitleText
          title={
            <>
              About <span className="text-primary-hover">Courses</span>
            </>
          }
          textStyles="md:text-[24px] text-[18px] text-primary-black"
        />
        <div className="w-full md:w-[85%]">
          <p className="text-secondary-black text-lg">
            MERN Stack adalah bagian dari Full-Stack Web Developer yang
            difokuskan kepada JavaScript (Full-Stack JavaScript Developer). M
            untuk MongoDB, E untuk ExpressJS, R untuk ReactJS, dan N untuk
            NodeJS. Kalian akan mempelajari semua hal tersebut pada kelas ini.
            Tapi bukan hanya sekedar ngoding aja namun kalian akan mulai dari
            bagian UI dan UX sehingga paham betul bagaimana caranya membangun
            suatu website yang memiliki better experience. Setelah proses
            Wireframe selesai maka akan dilanjutkan kepada tahap Visual Design
            dan Web Development. Silakan bergabung untuk mempelajarinya lebih
            lanjut. Kami akan tunggu kalian di kelas ya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
