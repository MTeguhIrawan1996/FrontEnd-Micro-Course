import React from "react";
import { Layout } from "../../components";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
