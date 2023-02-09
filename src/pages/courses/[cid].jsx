import React from "react";
import { useRouter } from "next/router";
import Layout from "../../pages/layout/layout";
import {
  AboutCourses,
  HeaderCourses,
  ImageCourses,
  OurInstructor,
  Testimonial,
  WillLern,
} from "../../sections";

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
      <Testimonial />
    </Layout>
  );
};

export default DetailCourses;
