import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo/rubiLogo.svg";
import { HandleBgScroll } from "../../utility/functions";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  HandleBgScroll(showMenu);

  return (
    <>
      <header className="Header">
        <div className="Header__container">
          <nav className={showMenu ? " Header__nav" : "Header__nav--hide"}>
            <div
              onClick={() => {
                showMenu ? setShowMenu(false) : setShowMenu(true);
              }}
              className="Header__menu-toggle"
            >
              <FaBars
                className={
                  showMenu
                    ? "Header__icon Header__icon-bars--hide "
                    : "Header__icon Header__icon-bars--show "
                }
              />
              <FaTimes
                className={
                  showMenu
                    ? "Header__icon Header__icon-times--show"
                    : "Header__icon Header__icon-times--hide"
                }
              />
            </div>
            <img className="Header__link-logo" src={Logo} alt="" />

            <ul
              className={
                showMenu
                  ? "Header__nav-list Header__nav-list--show "
                  : "Header__nav-list Header__nav-list--hide "
              }
            >
              <li className="Header__nav-item">
                <NavLink
                  activeClassName="Header__nav-link--active"
                  className="Header__nav-link"
                  exact
                  to="/"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li className="Header__nav-item">
                <NavLink
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  activeClassName="Header__nav-link--active"
                  className="Header__nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="Header__nav-item">
                <NavLink
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  activeClassName="Header__nav-link--active"
                  className="Header__nav-link"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="Header__nav-item">
                <NavLink
                  className="Header__nav-link"
                  activeClassName="selected"
                  activeStyle={{ color: "#fcba58" }}
                  to="/resume"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

const MemoHeader = React.memo(Header);

export default MemoHeader;
