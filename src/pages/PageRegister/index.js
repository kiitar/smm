import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import { confirmRegister } from "../../graphql/Auth";
import { RequestAPI } from "../../utils";
import { useRecoilState } from "recoil";
import { registerState } from "../../recoil/atoms";

function PageRegister() {
  let { data } = useParams();
  let history = useHistory();

  const [register, setRegister] = useRecoilState(registerState);
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    const urlDecrypt = (urlEncrypt) => {
      let parsedWordArray = CryptoJS.enc.Base64.parse(urlEncrypt);
      let parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
      let bytes = CryptoJS.AES.decrypt(parsedStr, process.env.REACT_APP_URL_ENCRYPT);
      let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    };

    let decode = urlDecrypt(data);
    setRegister({ ...decode });
  }, []);

  const regis = async () => {
    let { data, errors } = await RequestAPI(confirmRegister, {
      token: register.token,
      email: register.email,
      username: register.username,
      password: passwordComfirm,
      firstname: register.firstname,
      lastname: register.lastname,
      phone: register.phone,
      type: register.type,
    });
    if (errors) {
      toast.error("Error !", { position: toast.POSITION.TOP_RIGHT });
      return;
    }
    if (data) {
      toast.success("บันทึกสำเร็จ !", { position: toast.POSITION.TOP_RIGHT });
      setTimeout(() => {
        history.push("/");
      }, 1000);
      return;
    }
  };
  const submit = async () => {
    if (password.length < 1 || passwordComfirm.length < 1) {
      toast.error("กรุณากรอก Password !", { position: toast.POSITION.TOP_RIGHT });
      return;
    }
    if (password !== passwordComfirm) {
      toast.error("Password ไม่ตรงกัน !", { position: toast.POSITION.TOP_RIGHT });
      return;
    }

    regis();
  };

  return (
    <>
      <ToastContainer />
      <div className="container-register">
        <div className="box-register">
          <h2>DLT MONITOR</h2>
          <h3>Password settings</h3>
          <div>Enter password which will be used for this user</div>
          <h4>{register.email ? `${register.email} ${password}` : ""}</h4>
          <div className="box-register-body">
            <div className="box-input-register">
              <i className="fa fa-lock icon-input-register"></i>
              <input
                type="password"
                className="input-register"
                placeholder=" Enter your new password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="box-input-register">
              <i className="fa fa-lock icon-input-register"></i>
              <input
                type="password"
                className="input-register"
                placeholder=" Repeat new password..."
                value={passwordComfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </div>

            <button className="btn-register" onClick={submit}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageRegister;
