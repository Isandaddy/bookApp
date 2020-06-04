import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  //Initialization
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    window.M.Sidenav.init(elems, { edge: "right" });
  });
  return (
    <>
      <nav className="z-depth-0">
        <div className="nav-wrapper">
          <a href="/" className="brand">
            book<span>App</span>
          </a>
          <a
            href="#!"
            className="right sidenav-trigger"
            data-target="slide-out"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/" className="waves-effect sidenav-close">
            <i className="material-icons">home</i>Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="waves-effect sidenav-close">
            <i className="material-icons">business</i>About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="waves-effect sidenav-close">
            <i className="material-icons">mail</i>Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
