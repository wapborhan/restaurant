import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light p-3 fixed-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="m-0">
              Restaurent &#169; Copyright 2022 | Design By{" "}
              <a
                className="text-warning"
                target="_blank"
                href="http://www.wapborhan.com"
              >
                Borhan Uddin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
