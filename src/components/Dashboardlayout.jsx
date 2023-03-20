import React, { useEffect } from "react";
import DashboardFooter from "./DashboardFooter";
import Notification from "./Notification";

const Dashboardlayout = ({ children, notify }) => {
  return (
    <div className="relative px-6 overflow-hidden flex flex-col items-center bg-hero-pattern h-screen ">
      {notify && <Notification />}
      {children}
      <DashboardFooter />
    </div>
  );
};

export default Dashboardlayout;
