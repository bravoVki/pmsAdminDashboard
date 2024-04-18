import React from "react";
import { useState } from "react";
import AdHeader from "./AdHeader";
import Sidebar from "./Sidebar";

import AdHome from "./AdHome";

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <AdHeader OpenSidebar={OpenSidebar} />
      <Sidebar
        onTabClick={handleTabClick}
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <AdHome selectedTab={selectedTab} />
    </div>
  );
}
export default Admin;
