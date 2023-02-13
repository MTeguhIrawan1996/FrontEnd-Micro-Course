import React from "react";
import { Layout } from "../../components";
import styles from "../../styles";

const DetailMyCourses = () => {
  return (
    <div className="max-h-screen overflow-y-auto">
      <div className={`h-[200vh] ${styles.paddings}`}>Comming Soon</div>
    </div>
  );
};

export default DetailMyCourses;

DetailMyCourses.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
