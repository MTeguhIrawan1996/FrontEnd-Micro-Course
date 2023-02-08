import React from "react";
import styles from "../../styles";
import { ListImageCourses, TitleText } from "../../components";

const ImageCourses = () => {
  return (
    <section className="sm:px-16 sm:py-8 px-6 py-6">
      <div
        className={`${styles.innerWidth} lg:px-12 mx-auto flex justify-start items-start flex-col gap-6`}
      >
        <TitleText
          title={
            <>
              Course <span className="text-primary-hover">Photos</span>
            </>
          }
          textStyles="md:text-[24px] text-[18px] text-primary-black"
        />
        <ListImageCourses />
      </div>
    </section>
  );
};

export default ImageCourses;
