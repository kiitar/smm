import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.css";
import { NavContext, DisplayContext } from "../../App";
import { Hamburker, HamburkerNone, SelectBot, SelectBotWidth } from "./styled";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  currentMenuState,
  currentKeywordState,
  currentLinkState,
  monitorDataState,
  userState,
  itemFocusState,
} from "../../recoil/atoms";
import { getKeywordSelector } from "../../recoil/selectors";
import Divider from "@material-ui/core/Divider";
import { getKeywords } from "../../graphql/Keywords";
import { RequestAPI } from "../../utils";
const SideNav = (props) => {
  const Nav = React.useContext(NavContext);
  const Display = React.useContext(DisplayContext);

  const [select, setSelect] = useState(false);
  // const [keywords, setKeywords] = useState(null);

  const resetCurrentLink = useResetRecoilState(currentLinkState);
  const resetItemFocus = useResetRecoilState(itemFocusState);
  const resetMonitorData = useResetRecoilState(monitorDataState);
  const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState);
  const [currentKeyword, setCurrentKeyword] = useRecoilState(currentKeywordState);
  let keywords = useRecoilValue(getKeywordSelector);
  // let [user] = useResetRecoilState(userState);

  // side-effects
  // useEffect(async () => {
  //   let { data, errors } = await RequestAPI(getKeywords, {
  //     users_id: user.userId,
  //     offset: 0,
  //     limit: 100,
  //   });

  //   console.log(`errors`, errors);
  //   console.log(`data`, data);
  //   setKeywords(data.getKeywords.data);
  // }, [keywords]);

  const handleClickMenu = (id) => {
    setCurrentMenu(id);
    setSelect(false);
    Nav.setAnimateNav("0px");
    Display.setDisplay("none");
  };

  const handleSelectBot = (keyword) => {
    resetItemFocus();
    resetCurrentLink();
    resetMonitorData();

    setCurrentKeyword({ ...keyword });
    setSelect(!select);
  };

  const handleClickCloseNav = () => {
    Nav.setAnimateNav("0px");
    Display.setDisplay("none");
  };

  const handleClickSelectBot = () => {
    setSelect(!select);
  };

  return (
    <Hamburker animateNav={props.animateNav}>
      <HamburkerNone display={props.display}>
        <div className="icon-logo">
          <div className="box-close">
            <button className="close-sidenav" onClick={() => handleClickCloseNav()}>
              <i className="fa fa-close"></i>
            </button>
          </div>
          <img src={logo} alt="" className="logo" />
          <br />
          <p className="name-logo">กรมการขนส่งทางบก</p>
          <p className="name-logo">Department of Land Transport</p>
        </div>
        <nav>
          <ul id="Mydiv" className="sidenav-container">
            {/* <li onClick={() => handleClickMenu(1)} className={`nav-container ${currentMenu === 1 ? "active" : null}`}>
              <Link className="link" to="/tranning">
                <div className={`${currentMenu === 1 ? "menu-active" : "menu"}`}>
                  <i className="fa fa-android icon_nav"></i>
                  Tranning
                </div>
              </Link>
            </li> */}
            <Suspense fallback={<p>Loading ...</p>}>
              <div className={`nav-container`}>
                <div onClick={() => handleClickSelectBot()} className={`menu`}>
                  <i className="fa fa-pie-chart icon_nav"></i>
                  {currentKeyword === null && "เลือก Keyword"}
                  {currentKeyword !== null && currentKeyword.keyword}
                  {/* {`${currentBot === 1 ? "Keyword 1" : "Keyword 2"}`} */}
                  <i className="fa fa-sort-down"></i>
                </div>
              </div>

              <SelectBotWidth selectWidth={select}>
                <SelectBot select={select}>
                  {keywords.map((keyword, i) => {
                    return (
                      <li onClick={() => handleSelectBot(keyword)} key={i}>
                        <div className="container-select">
                          <div className="menu chatbot-menu">{keyword.keyword}</div>
                        </div>
                      </li>
                    );
                  })}
                </SelectBot>
              </SelectBotWidth>
            </Suspense>
            <Divider />

            {currentKeyword !== null && (
              <>
                {" "}
                <li
                  onClick={() => handleClickMenu(2)}
                  className={`nav-container ${currentMenu === 2 ? "active" : null}`}
                >
                  <Link className="link" to="/monitor">
                    <div className={`${currentMenu === 2 ? "menu-active" : "menu"}`}>
                      <i className="fa fa-bar-chart-o icon_nav"></i>
                      Monitoring
                    </div>
                  </Link>
                </li>
                <Divider />
                <li
                  onClick={() => handleClickMenu(3)}
                  className={`nav-container ${currentMenu === 3 ? "active" : null}`}
                >
                  <Link className="link" to="/summary">
                    <div className={`${currentMenu === 3 ? "menu-active" : "menu"}`}>
                      <i className="fa fa-rotate-left icon_nav"></i>
                      Summary
                    </div>
                  </Link>
                </li>
                <Divider />
              </>
            )}
            <li onClick={() => handleClickMenu(1)} className={`nav-container ${currentMenu === 1 ? "active" : null}`}>
              <Link className="link" to="/">
                <div className={`${currentMenu === 1 ? "menu-active" : "menu"}`}>
                  <i className="fa fa-plus-circle icon_nav"></i>
                  Add Keyword
                </div>
              </Link>
            </li>
            <Divider />
            <li onClick={() => handleClickMenu(4)} className={`nav-container ${currentMenu === 4 ? "active" : null}`}>
              <Link className="link" to="/create_user">
                <div className={`${currentMenu === 4 ? "menu-active" : "menu"}`}>
                  <i className="fa fa-address-book icon_nav"></i>
                  Create User
                </div>
              </Link>
            </li>
            <Divider />

            {/* <li onClick={() => handleClickMenu(1)} className={`nav-container ${currentMenu === 1 ? "active" : null}`}>
              <Link className="link" to="/page_register">
                <div className={`${currentMenu === 1 ? "menu-active" : "menu"}`}>
                  <i className="fa fa-address-book icon_nav"></i>
                  Page Register
                </div>
              </Link>
            </li>
            <li onClick={() => handleClickMenu(1)} className={`nav-container ${currentMenu === 1 ? "active" : null}`}>
              <Link className="link" to="/forget_password">
                <div className={`${currentMenu === 1 ? "menu-active" : "menu"}`}>
                  <i className="fa fa-address-book icon_nav"></i>
                  ForgetPassword
                </div>
              </Link>
            </li> */}

            {/* <li onClick={() => handleClickMenu(1)} className={`nav-container ${currentMenu === 1 ? "active" : null}`}>/forget_password
              <Link className="link" to="/chatbot">
                <div className={`${currentMenu === 1 ? "menu-active" : "menu"}`}>
                  <i className="fa fa-comments icon_nav"></i>
                  ChatBot
                </div>
              </Link>
            </li> */}
            {/* <li onClick={() => handleClickMenu(1)} className={`nav-container ${currentMenu === 1 ? "active" : null}`}>
              <Link className="link" to="/config">
                <div className={`${currentMenu === 1 ? "menu-active" : "menu"}`}>
                  <i className="fa fa-cogs icon_nav"></i>
                    Config
                </div>
              </Link>
            </li> */}
          </ul>
        </nav>
      </HamburkerNone>
    </Hamburker>
  );
};

export default SideNav;
