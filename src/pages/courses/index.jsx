import React from "react";
import { HeaderCourses, NewClases } from "../../sections";
import { Layout } from "../../components";

const Courses = () => {
  return (
    <>
      <HeaderCourses />
      <NewClases />
    </>
  );
};

export default Courses;

Courses.getLayout = function getLayout(page) {
  return <Layout title="Online Courses">{page}</Layout>;
};
