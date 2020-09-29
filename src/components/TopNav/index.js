import React from "react";
import "./style.css";
import { AuthContext, NavContext, DisplayContext } from "../../App";
import { Modal as Modals } from "../../components/Modal";
import { modalLogoutState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";

function TopNav() {
  const Auth = React.useContext(AuthContext);
  const Nav = React.useContext(NavContext);
  const Display = React.useContext(DisplayContext);
  const [modalLogout, setModalLogout] = useRecoilState(modalLogoutState);

  const handleClick = () => {
    setModalLogout(true);
  };

  const onClose = () => {
    setModalLogout(false);
  };

  const onSubmit = () => {
    setModalLogout(false);
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
        {modalLogout && <Modals text={"ยืนยันการออกจากระบบ"} onClose={onClose} onSubmit={onSubmit} />}
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
