import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footerContainer}>
      <p className="footer-body">Living the Simple Life</p>
      <p className="footer-body">Copyright 2019</p>
    </footer>
  );
};

export default Footer;
