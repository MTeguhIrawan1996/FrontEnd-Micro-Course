import React from "react";
import { Button, Layout, TitleText, TypingText } from "../../components";
import styles from "../../styles";
import Image from "next/image";
import { transactions } from "../../constants";

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
        {transactions.map((data, index) => (
          <div
            className="flex w-full flex-col items-center justify-start gap-6 lg:flex-row"
            key={`${data}-${index}`}
          >
            <div className="h-[170px] w-full overflow-hidden rounded-sm bg-red-300 lg:h-[100px] lg:w-[170px]">
              <Image
                src={data.imgUrl}
                alt="Transaction-img"
                className="h-full w-full object-cover"
                priority
                placeholder="blur"
              />
            </div>
            <div className="flex h-[100px] w-full flex-1 flex-col items-center justify-between gap-4 lg:flex-row lg:justify-start">
              <div className="w-full overflow-hidden lg:w-[50%]">
                <TitleText
                  title={data.title}
                  textStyles="text-[16px] text-primary-black text-start"
                />
                <p className="text-sm text-secondary-black">{data.level}</p>
              </div>
              <div className="flex w-full items-center justify-between gap-2 lg:justify-around lg:gap-4">
                <TypingText title={`Rp${data.price}`} textStyles="font-light" />
                <TypingText title={data.date} textStyles="font-light" />
              </div>
            </div>
            <Button text="Lihat Kelas" styles="bg-zinc-300 font-light" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Transactions;

Transactions.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
