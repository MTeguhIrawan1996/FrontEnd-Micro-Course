import React from "react";
// import { useRouter } from "next/router";
import { Layout } from "../../components";
import {
  AboutCourses,
  HeaderDetailCourses,
  ImageCourses,
  OurInstructor,
  StickyPrice,
  Testimonial,
  WillLern,
} from "../../sections";

const DetailCourses = () => {
  // const router = useRouter();
  // // const { cid } = router.query;

  return (
    <>
      <HeaderDetailCourses />
      <AboutCourses />
      <ImageCourses />
      <WillLern />
      <OurInstructor />
      <Testimonial />
      <StickyPrice />
    </>
  );
};

export default DetailCourses;

DetailCourses.getLayout = function getLayout(page) {
  return <Layout title="Online Courses">{page}</Layout>;
};
