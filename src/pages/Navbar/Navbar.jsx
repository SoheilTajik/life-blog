import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header>
      <div className={`${Styles.container} ${Styles.containerNav}`}>
        <div className="siteTitle">
          <h1>Living the simple life</h1>
          <p className={Styles.subtitle}>A blog exploring minimalism in life</p>
        </div>
        <nav className={Styles.navbar}>
          <ul className="navList">
            <li className="navListItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/about" className="navLink">
                About Us
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/posts" className="navLink">
                Recent Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
