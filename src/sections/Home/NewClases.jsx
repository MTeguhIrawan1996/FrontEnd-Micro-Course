import React from "react";
import styles from "../../styles";
import { ListClasses, TitleText, TypingText } from "../../components";

const NewClases = () => {
  return (
    <section className={`${styles.paddings}`}>
      <div
        className={`${styles.innerWidth} lg:px-12 mx-auto flex justify-center items-center flex-col gap-6`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <TypingText title="New Clases" />
            <TitleText
              title={
                <>
                  Summer <span className="text-primary-hover">Productive</span>
                </>
              }
              textStyles="md:text-[24px] text-[18px] text-primary-black"
            />
          </div>
          <TypingText
            title="View All Courses"
            textStyles="cursor-pointer text-[12px] underline underline-offset-2 hover:text-primary-hover"
          />
        </div>
        <ListClasses />
      </div>
    </section>
  );
};

export default NewClases;
