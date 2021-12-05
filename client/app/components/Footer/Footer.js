import React from "react";
import FooterScss from "./Footer.scss";

const Footer = () => {
  var date = new Date();
  var currentYear = date.getFullYear();
  return (
    <div>
      <p className="footer">© Copyright MERN-Project {currentYear} </p>
    </div>
  );
};

export default Footer;
