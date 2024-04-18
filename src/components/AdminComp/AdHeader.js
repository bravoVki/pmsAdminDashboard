import React from "react";

import { BsSearch, BsJustify } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AdHeader({ OpenSidebar }) {
  const navigate = useNavigate();
  const logoutAdmin = () => {
    localStorage.removeItem("adminloggedin");
    navigate("/login");
  };
  return (
    <header className="adheader">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <button onClick={logoutAdmin} className="btn btn-secondary  ">
          LogOut
        </button>
      </div>
    </header>
  );
}

export default AdHeader;
