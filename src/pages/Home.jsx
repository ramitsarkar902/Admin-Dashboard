import React from "react";
import Chart from "../components/chart/Chart";
import { FeaturedInfo } from "../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../data";
function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active User" />
    </div>
  );
}

export default Home;
