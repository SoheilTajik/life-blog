import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header>
      <div className={`${Styles.container} ${Styles.containerNav}`}>
        <div className="site-title">
          <h1>Living the simple life</h1>
          <p className={Styles.subtitle}>A blog exploring minimalism in life</p>
        </div>
        <nav className={Styles.navbar}>
          <ul className="navList">
            <li className="nav-list-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/posts" className="nav-link">
                Recent Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
