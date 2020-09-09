import React from "react";

const ForgetPassword = () => {
  return (
    <div className="center white">
      <div className="box-input-user">
        <h3>Forget Password</h3>
        <br />
        <input className="input-user" type="text" placeholder="ระบุ E-mail" />
      </div>
      <br />
      <div>
        <button className="btn-user">ส่งอีเมล์</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
