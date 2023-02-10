import React from "react";
import { useRouter } from "next/router";
import {
  AboutCourses,
  HeaderCourses,
  ImageCourses,
  OurInstructor,
  Testimonial,
  WillLern,
} from "../../sections";
import { Layout } from "../../components";

const DetailCourses = () => {
  const router = useRouter();
  const { cid } = router.query;

  return (
    <>
      <HeaderCourses />
      <AboutCourses />
      <ImageCourses />
      <WillLern />
      <OurInstructor />
      <Testimonial />
    </>
  );
};

export default DetailCourses;

DetailCourses.getLayout = function getLayout(page) {
  return <Layout title="Detail Courses">{page}</Layout>;
};
