import React from "react";

const CreateUser = () => {
  return (
    <div className="container-main">
      <div className="">
        <div className="">
          <div className="top-title">
            <div className="flex-1 bold margin-left">Create User</div>
          </div>

          <div className="flex-user">
            <div className="container-step-1">
              <div className="box-input-user">
                <h3>Create User</h3>
                <br />
                <input className="input-user" type="text" placeholder="ระบุ E-mail" />
              </div>
              <br />
              <div className="radio-flex">
                <div className="box-radio">
                  <input type="radio" className="radio" name="radio" id="" />
                  <div className="span-user">
                    <div className="border-radio">Standard</div>
                    <div className="law-admin">- Read Keyword</div>
                    <div className="law-admin">- Monitoring</div>
                    <div className="law-admin">- Summary</div>
                  </div>
                </div>
                <div className="box-radio">
                  <input className="radio" type="radio" name="radio" id="" />
                  <div className="span-user"></div>
                  <div className="border-radio">Administrator</div>
                  <div className="law-admin">- Create, Read, Update and Delete Keyword</div>
                  <div className="law-admin">- Create User</div>
                  <div className="law-admin">- Monitoring</div>
                  <div className="law-admin">- Summary</div>
                </div>
              </div>
              <div>
                <button className="btn-user">ส่งอีเมล์</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
