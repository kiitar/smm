import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { forgotPassword } from "../../graphql/Auth";
import { RequestAPI } from "../../utils";

const ForgetPassword = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const submit = async () => {
    if (email.length < 1) {
      toast.error("กรุณากรอก Email !", { position: toast.POSITION.TOP_RIGHT });
      return;
    }

    let { data, errors } = await RequestAPI(forgotPassword, {
      email: email,
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
  return (
    <div className="center white">
      <ToastContainer />
      {/* <div className="box-input-user">
        <h3>Forget Password</h3>
        <br />
        <input className="input-user" type="text" placeholder="ระบุ E-mail" />
      </div>
      <br />
      <div>
        <button className="btn-user">ส่งอีเมล์</button>
      </div> */}
      <div className="box-register">
        <h2>DLT MONITOR</h2>
        <h3>Forget Password</h3>
        <div>Enter password which will be used for this user</div>
        <h4></h4>
        <div className="box-register-body">
          <div className="box-input-register">
            <i className="fa fa-envelope icon-input-register"></i>
            <input
              type="text"
              className="input-register"
              placeholder="ระบุ E-mail ..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <button className="btn-register" onClick={submit}>
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
