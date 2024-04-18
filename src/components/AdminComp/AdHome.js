import React from "react";

import Dashboard from "../Products/Dashboard";
import Products from "../Products/Products";
import Categories from "../Products/Categories";
import RegisteredUsers from "../RegisteredUsers";

function AdHome({ selectedTab }) {
  return (
    <>
      <main className="main-container">
        {selectedTab === "users" && <RegisteredUsers />}
        {selectedTab === "dashboard" && <Dashboard />}
        {selectedTab === "products" && <Products />}
        {selectedTab === "categories" && <Categories />}
      </main>
    </>
  );
}

export default AdHome;
