import React from "react";
import "./style.css";

const CreateMenu2 = (props) => {
  // const { Modal, Question, Answer, WarningMessage } = React.useContext(TrainingContext);
  // const [, setModal] = Modal;
  // const [, setQuestion] = Question;
  // const [answer, setAnswer] = Answer;
  // const [warningMessage, setWarningMessage] = WarningMessage;

  // const handleClick = () => {
  //   console.log("close2");
  //   setWarningMessage("");
  //   setModal(false);
  // };

  // const handleAddAnswer = () => {
  //   console.log("add ans");
  //   let ans = answer;
  //   ans.push("");
  //   setAnswer([...ans]);
  //   console.log(answer);
  // };

  // const handleRemoveAnswer = () => {
  //   let ans = answer;
  //   if (answer.length > 1) {
  //     ans.pop();

  //     setAnswer([...ans]);
  //   } else {
  //     setWarningMessage("ไม่สามารถลบคำตอบนี้ได้");
  //   }
  // };

  // const handleInputAnswer = (e, i) => {
  //   let ans = answer;
  //   ans.splice(i, 1, e.target.value);
  //   setWarningMessage("");
  //   setAnswer([...ans]);
  // };

  // const handleInputQuestion = (e) => {
  //   setWarningMessage("");
  //   setQuestion(e.target.value);
  // };

  return (
    <div className="modal">
      <div className="container-create">
        <div>
          <div>คำถาม</div>
          {/* <div className="flex-create">
            <textarea className="text-area" placeholder="เพิ่มคำถาม..." onChange={(e) => handleInputQuestion(e)} />
            <em>0/50</em>
          </div>
          <div style={{ margin: "20px 0" }} />
          {answer.map((v, i) => {
            return (
              <div className="massage-padding" key={i}>
                <div>คำตอบ</div>
                <div className="flex-create">
                  <textarea
                    key={i}
                    className="text-area"
                    placeholder="เพิ่มคำตอบ..."
                    onChange={(e) => {
                      handleInputAnswer(e, i);
                    }}
                  />
                  <em>0/250</em>
                </div>
              </div>
            );
          })}
          <div className="right flex">
            {answer.length > 1 && (
              <div>
                <Button name="ลบคำตอบ -" styleBtn="delete" onClick={handleRemoveAnswer} />
              </div>
            )}
            <div style={{ margin: "0 10px" }}></div>
            <div>
              <Button name="เพิ่มคำตอบ +" styleBtn="create" onClick={handleAddAnswer} />
            </div>
          </div> */}
        </div>
        {/* 
        <div style={{ margin: "100px 0" }}></div>
        {warningMessage !== "" && <p style={{ color: "orange" }}>{`* Warning ! ${warningMessage} `}</p>}
        <div className="flex center">
          <div className="padding-btn">
            <Button name="Training" styleBtn="create" onClick={props.handleValidate} />
          </div>
          <div className="padding-btn">
            <Button name="Close" styleBtn="close" onClick={handleClick} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CreateMenu2;
