import React from "react";
import "./style.css";
import { AuthContext, NavContext, DisplayContext } from "../../App";

function TopNav() {
  const Auth = React.useContext(AuthContext);
  const Nav = React.useContext(NavContext);
  const Display = React.useContext(DisplayContext);

  const handleClick = () => {
    // console.log("Logout");
    localStorage.clear();
    Auth.setAuth(false);
  };

  const handleClickSideNav = () => {
    // console.log("Sidenav");
    Nav.setAnimateNav(!Nav.animateNav);
    Display.setDisplay("block");
  };

  return (
    <div className="topnav123">
      <div className="topbar">
        <button className="hamburker" onClick={handleClickSideNav}>
          <i className="fa fa-reorder"></i>
        </button>
      </div>

      <div className="logout">
        <button className="btn_logout" onClick={handleClick}>
          <i className="fa fa-power-off"></i>
          Logout
        </button>
      </div>
    </div>
  );
}

export default TopNav;
