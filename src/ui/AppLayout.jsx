import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main className="px-[30px] lg:px-[80px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
