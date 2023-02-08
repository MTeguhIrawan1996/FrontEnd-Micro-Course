import React from "react";
import { useRouter } from "next/router";
import Layout from "../../pages/layout/layout";
import {
  AboutCourses,
  HeaderCourses,
  ImageCourses,
  OurInstructor,
} from "../../sections";
import WillLern from "../../sections/DetailCourses/WillLern";

const DetailCourses = () => {
  const router = useRouter();
  const { cid } = router.query;

  return (
    <Layout>
      <HeaderCourses />
      <AboutCourses />
      <ImageCourses />
      <WillLern />
      <OurInstructor />
    </Layout>
  );
};

export default DetailCourses;
