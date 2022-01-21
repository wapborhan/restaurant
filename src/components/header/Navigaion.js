import React from "react";
import { Navbr, NavbarBrand } from "reactstrap";
import Navbar from "reactstrap/lib/Navbar";

const Navigation = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
