import React from "react";
import { Outlet } from "react-router-dom";
import { Bar } from "./Bar";


const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-sky-300">
        <Bar/>
      </div>
      <div className="w-4/5 h-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;