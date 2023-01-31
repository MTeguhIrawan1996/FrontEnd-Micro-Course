import Head from "next/head";
import { Footer } from "../../components";

const layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="overflow-hidden bg-white">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default layout;
