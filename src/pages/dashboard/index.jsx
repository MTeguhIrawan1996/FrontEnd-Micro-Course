import React from "react";
import { Layout } from "../../components";
import styles from "../../styles";

const Dashboard = () => {
  return (
    <div className="max-h-screen overflow-y-auto">
      <div className={`h-[200vh] ${styles.paddings}`}>Dashboard</div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};
