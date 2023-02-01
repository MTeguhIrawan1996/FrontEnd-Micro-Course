import React from "react";
import styles from "../../styles";
import { partners } from "../../constants";

const Partners = () => {
  return (
    <section className={`${styles.paddings}`}>
      <div
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-wrap gap-10`}
      >
        {partners.map((partner, i) => (
          <div className="w-[160px] h-[100px]" key={i}>
            <partner.imgUrl className="w-full object-contain h-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
