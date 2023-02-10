import { Layout } from "../components";
import { Category, Header, NewClases, Partners } from "../sections";

export default function Home() {
  return (
    <>
      <Header />
      <Partners />
      <NewClases />
      <Category />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title="Online Courses">{page}</Layout>;
};
