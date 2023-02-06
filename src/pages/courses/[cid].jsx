import React from "react";
import { useRouter } from "next/router";
import Layout from "../../pages/layout/layout";
import { HeaderCourses } from "../../sections";

const DetailCourses = () => {
  const router = useRouter();
  const { cid } = router.query;

  return (
    <Layout>
      <HeaderCourses />
      <div className="h-screen"></div>
    </Layout>
  );
};

export default DetailCourses;
