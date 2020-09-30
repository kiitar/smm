import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import "../../style/layout.css";
import { AuthContext } from "../../App";
import { RequestAPI } from "../../utils";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { getSignIn, getToken } from "../../graphql/Auth";
const Login = () => {
  const Auth = React.useContext(AuthContext);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const forget = () => {};

  const handleClick = async () => {
    if (!user) {
      setErrMessage("* username is required.");
      setErr(true);
      return;
    }
    if (!pass) {
      setErrMessage("* password is required.");
      setErr(true);
      return;
    }

    let { data, errors } = await RequestAPI(getSignIn, {
      email: user,
    });
    console.log(`handleClick -> errors`, errors);
    console.log(`handleClick -> data`, data);

    if (data) {
      let { data: ex, errors: xe } = await RequestAPI(getToken, {
        id: parseInt(data.getSignIn.id),
        checksum: data.getSignIn.checksum,
        password: pass,
      });
      console.log(`Login -> errors2`, xe);
      console.log(`Login -> data2`, ex);
      if (ex) {
        Auth.setAuth(true);
      }
    }

    // if (user !== "admin") {
    //   setErrMessage("* username is not correct.");
    //   setErr(true);
    //   return;
    // }

    // if (user === "admin" && pass === "dltadmin") {
    //   console.log("Login");
    //   localStorage.setItem("auth", true);

    //   Auth.setAuth(true);
    // } else {
    //   setErrMessage("* wrong password.");
    //   setErr(true);
    //   return;
    // }
  };

  const handlePassword = (e) => {
    setErr(false);
    setPass(e.target.value);
    if (e.key === "Enter") {
      handleClick();
    }
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
          <p className="txt-name">Social Monitoring</p>
        </div>
        <div className="container-input-login">
          <div className="icon-input">
            <i className="fa fa-user" />
          </div>
          <div>
            <input
              className="input-login"
              placeholder="Username"
              value={user}
              onChange={(e) => {
                setErr(false);
                setUser(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="container-input-login">
          <div className="icon-input">
            <i className="fa fa-lock" />
          </div>
          <div>
            <input
              className="input-login"
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                handlePassword(e);
              }}
              onKeyDown={(e) => handlePassword(e)}
            ></input>
          </div>
        </div>
        <Link className="btn-forget" to="/forget_password">
          <button className="btn-forget">Forget Password?</button>
        </Link>
        {/*  */}
        {/* <br /> */}
        <div className="container-btn-login">
          <button className="btn-login" onClick={handleClick}>
            Login
          </button>
          <br />
          <br />
          {err && <p className="txt-err">{errMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
