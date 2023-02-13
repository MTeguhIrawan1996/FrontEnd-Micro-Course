import React from "react";
import { Layout } from "../../components";
import styles from "../../styles";

const Library = () => {
  return (
    <div className="max-h-screen overflow-y-auto">
      <div className={`h-[200vh] ${styles.paddings}`}>Comming Soon</div>
    </div>
  );
};

export default Library;

Library.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
