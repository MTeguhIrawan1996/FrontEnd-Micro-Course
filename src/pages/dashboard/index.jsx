import React from "react";
import { Layout, ListMyClass, TitleText, TypingText } from "../../components";
import styles from "../../styles";

const Dashboard = () => {
  return (
    <section className={`${styles.paddings} max-h-screen overflow-y-auto`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center gap-6`}
      >
        <div className="flex w-full flex-col items-start justify-start">
          <TitleText
            title={
              <>
                My <span className="text-primary-hover">Class</span>
              </>
            }
            textStyles="md:text-[24px] text-[18px] text-primary-black"
          />
          <TypingText title="Continue learning to pursue your dreams" />
        </div>
        <ListMyClass />
      </div>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
