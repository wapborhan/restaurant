import React from "react";
import { Navbr, NavbarBrand } from "reactstrap";
import Navbar from "reactstrap/lib/Navbar";

const Navigation = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <NavbarBrand href="/">Resturant</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navigation;
