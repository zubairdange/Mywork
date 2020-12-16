import React from "react";

//import { MyNavBar } from "../MynavBar/MyNavBar";
import { MyCarousel } from "./MyCarousel";
import { SSidebar } from "../SSidebar/SSidebar";
import { NavLink } from "react-router-dom";
export const MyHome = () => {
  return (
    <React.Fragment>
      <SSidebar />
      <MyCarousel />
    </React.Fragment>
  );
};
