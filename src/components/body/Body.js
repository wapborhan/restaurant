import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "../NotFound";
import { Routes, Route, Navigate } from "react-router-dom";

const Body = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/menu" exact element={<Menu />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/about" exact element={<About />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
    </Routes>
  );
};

export default Body;
