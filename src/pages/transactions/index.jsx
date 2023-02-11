import React from "react";
import { Layout, TitleText, TypingText } from "../../components";
import styles from "../../styles";

const Transactions = () => {
  return (
    <section className={`${styles.paddings} max-h-screen overflow-y-auto`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center gap-6`}
      >
        <div className="flex w-full flex-col items-start justify-start">
          <TitleText
            title={<>Transactions</>}
            textStyles="md:text-[24px] text-[18px] text-primary-black"
          />
          <TypingText title="Keep on track what you’ve invested" />
        </div>
        <div className="">Detail Transactions</div>
      </div>
    </section>
  );
};

export default Transactions;

Transactions.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
