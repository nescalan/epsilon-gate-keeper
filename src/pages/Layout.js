import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function Layout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export { Layout };
