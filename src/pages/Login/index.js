import React from "react";
import logo from "../../assets/images/logo.png";
import "../../style/layout.css";
import { AuthContext } from "../../App";
const Login = () => {
  const Auth = React.useContext(AuthContext);

  const handleClick = () => {
    // console.log("Login");
    localStorage.setItem("auth", true);
    localStorage.setItem("chatbot1", JSON.stringify({ name: "DLT BOT 1", id: 1 }));
    localStorage.setItem("chatbot2", JSON.stringify({ name: "DLT BOT 2", id: 2 }));
    localStorage.setItem("currentBot", 1);

    Auth.setAuth(true);
  };

  return (
    <div className="container-Login">
      <div className="top-login">
        <div>
          <img src={logo} alt="" className="logo-login" />
        </div>
        <div className="taxt-top-login">
          <p>กรมการขนส่งทางบก</p>
          <p>Department of Land Transport</p>
        </div>
      </div>
      <div className="body-login">
        <div className="logo-body-login">
          <img src={logo} alt="" className="body-logo" />
        </div>
        <div className="txt-login">
          <p className="txt-name">กรมการขนส่งทางบก</p>
          <p className="txt-name">Department of Land Transport</p>
          <p className="txt-name">Social Monitoring and Ai Chatbot</p>
        </div>
        <div className="container-input-login">
          <div className="icon-input">
            <i className="fa fa-user" />
          </div>
          <div>
            <input className="input-login" placeholder="Username"></input>
          </div>
        </div>
        <div className="container-input-login">
          <div className="icon-input">
            <i className="fa fa-lock" />
          </div>
          <div>
            <input className="input-login" placeholder="Password"></input>
          </div>
        </div>
        <button className="btn-forget">Forget Password?</button>
        <br />
        <div className="container-btn-login">
          <button className="btn-login" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
