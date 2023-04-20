import React from "react";
import logo from "../assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav--content">
        <div className="nav__left">
          <Link to="/" className="nav__logo--wrapper">
            <img src={logo} alt="" className="nav__logo" />
          </Link>
        </div>
        <div className="nav__right">
          <Link to="/movies" className="nav__search--btn">
            <AiOutlineSearch className="nav__search--btn-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
