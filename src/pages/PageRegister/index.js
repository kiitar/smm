import React from "react";

function TopNav() {
  return (
    <div className="container-register">
      <div className="box-register">
        <h2>DLT MONITOR</h2>
        <h3>Password settings</h3>
        <div>Enter password which will be used for this user</div>
        <h4>chakri.psu@gmail.com</h4>
        <div className="box-register-body">
          <div className="box-input-register">
            <i className="fa fa-lock icon-input-register"></i>
            <input type="text" className="input-register" placeholder=" Enter your new password..." />
          </div>

          <div className="box-input-register">
            <i className="fa fa-lock icon-input-register"></i>
            <input type="text" className="input-register" placeholder=" Repeat new password..." />
          </div>

          <button className="btn-register">SAVE</button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
