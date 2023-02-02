import React from "react";
import styles from "../../styles";
import { ListCategory, TitleText, TypingText } from "../../components";

const Category = () => {
  return (
    <section className={`${styles.paddings}`}>
      <div
        className={`${styles.innerWidth} lg:px-12 mx-auto flex justify-center items-center flex-col gap-6`}
      >
        <div className="flex flex-col justify-start items-start w-full">
          <TypingText title="Category" />
          <TitleText
            title={
              <>
                Explore & <span className="text-primary-hover">Learn</span>
              </>
            }
            textStyles="md:text-[24px] text-[18px] text-primary-black"
          />
        </div>
        {/* List Hare */}
        <ListCategory />
      </div>
    </section>
  );
};

export default Category;
