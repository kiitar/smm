import React, { useState } from "react";
import { registerUsers } from "../../graphql/Auth";
import { RequestAPI } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const CreateUser = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(1);
  console.log(`CreateUser -> role`, role);
  const submit = async () => {
    if (email.length < 1) {
      toast.error("กรุณากรอก Email !", { position: toast.POSITION.TOP_RIGHT });
      return;
    }

    let { data, errors } = await RequestAPI(registerUsers, {
      email: email,
      role: role === 1 ? "member" : "admin",
    });
    if (errors) {
      toast.error("มีบางอย่างผิดพลาด !", { position: toast.POSITION.TOP_RIGHT });
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
    <div className="container-main">
      <ToastContainer />
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
                <input
                  className="input-user"
                  type="text"
                  placeholder="ระบุ E-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="radio-flex">
                <div className="box-radio">
                  <input
                    type="radio"
                    className="radio"
                    name="radio"
                    id=""
                    value={1}
                    checked={role === 1 ? true : false}
                    onChange={() => {
                      setRole(1);
                    }}
                  />
                  <div className="span-user">
                    <div className="border-radio">Standard</div>
                    <div className="law-admin">- Read Keyword</div>
                    <div className="law-admin">- Monitoring</div>
                    <div className="law-admin">- Summary</div>
                  </div>
                </div>
                <div className="box-radio">
                  <input
                    className="radio"
                    type="radio"
                    name="radio"
                    id=""
                    value={2}
                    checked={role === 2 ? true : false}
                    onChange={() => {
                      setRole(2);
                    }}
                  />
                  <div className="span-user"></div>
                  <div className="border-radio">Administrator</div>
                  <div className="law-admin">- Create Keyword</div>
                  <div className="law-admin">- Create User</div>
                  <div className="law-admin">- Monitoring</div>
                  <div className="law-admin">- Summary</div>
                </div>
              </div>
              <div>
                <button className="btn-user" onClick={submit}>
                  ส่งอีเมล์
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
