import React from "react";
import { Layout } from "../../components";

const DetailMyCourses = () => {
  return <div>DetailMyCourses</div>;
};

export default DetailMyCourses;

DetailMyCourses.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
