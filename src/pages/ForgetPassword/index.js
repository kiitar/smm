import React from "react";

const ForgetPassword = () => {
  return (
    <div className="center white">
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
            <input type="text" className="input-register" placeholder="ระบุ E-mail ..." />
          </div>

          <button className="btn-register">Send Email</button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
