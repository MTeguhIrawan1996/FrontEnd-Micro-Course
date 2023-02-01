import Layout from "./layout/layout";
import { Header, NewClases, Partners } from "../sections";

export default function Home() {
  return (
    <Layout title="Halaman Utama">
      <Header />
      <Partners />
      <NewClases />
    </Layout>
  );
}
