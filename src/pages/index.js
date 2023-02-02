import Layout from "./layout/layout";
import { Category, Header, NewClases, Partners } from "../sections";

export default function Home() {
  return (
    <Layout title="Halaman Utama">
      <Header />
      <Partners />
      <NewClases />
      <Category />
    </Layout>
  );
}
