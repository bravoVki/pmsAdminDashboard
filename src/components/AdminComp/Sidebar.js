import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";

function Sidebar({ onTabClick, openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand ">
          <BsCart3 className="icon_header " />
          Admin Dashboard<hr></hr>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          XX
        </span>
      </div>

      <ul className="sidebar-list">
        <li
          onClick={() => onTabClick("dashboard")}
          className="sidebar-list-item"
        >
          <BsGrid1X2Fill className="icon" />
          Dashboard
        </li>
        <li
          onClick={() => onTabClick("products")}
          className="sidebar-list-item"
        >
          <BsFillArchiveFill className="icon" />
          Products
        </li>
        <li
          onClick={() => onTabClick("categories")}
          className="sidebar-list-item"
        >
          <BsFillGrid3X3GapFill className="icon" />
          Categories
        </li>
        <li className="sidebar-list-item" onClick={() => onTabClick("users")}>
          <BsPeopleFill className="icon" />
          Users
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
