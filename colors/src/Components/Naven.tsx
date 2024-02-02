import React, { useState } from "react";
import { Link } from "react-router-dom";

const Naven = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const openMenu = (): void => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {toggleMenu ? (
        <nav className="nav open">
          <ul className="nav_ul open">
            <li className="nav_li">
              <Link to="/" className="nav_link">
                Hem
              </Link>
            </li>
            <li className="nav_li">
              <Link to="/search" className="nav_link">
                Sök
              </Link>
            </li>
            <li className="nav_li">
              <Link to="/admin" className="nav_link">
                Admin
              </Link>
            </li>
          </ul>
          <div onClick={openMenu} className="menu_btn">
            <span className="burger open"></span>
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <h1 className="menu">Menu</h1>
          <div onClick={openMenu} className="menu_btn">
            <span className="burger"></span>
          </div>
        </nav>
      )}
    </>
  );
};

export default Naven;
