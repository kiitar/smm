import React from "react";
import "./style.css";
import { TrainingContext } from "../../pages/Tranning";
import axios from "axios";

const CardTable = ({ data }) => {
  const { Mount, Loading } = React.useContext(TrainingContext);
  const [mount, setMount] = Mount;
  const [, setLoading] = Loading;

  const handleDelete = (id) => {
    setLoading(true);
    deleteTrainSet(id);
  };

  const deleteTrainSet = (id) => {
    console.log(id);
    let data = JSON.stringify({
      query:
        "mutation deleteTrainSet(\n    $id:Int!\n  ){\n    deleteTrainSet(\n        id:$id\n    ){\n        id\n  }\n}",
      variables: { id: id },
    });

    let config = {
      method: "post",
      url: "http://103.245.164.59:50002",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.data) {
          setTimeout(() => {
            setLoading(false);
            setMount(!mount);
          }, 2000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {data.map((v, i) => {
        return (
          <div className="container-card" key={i}>
            <div className="data-card-title bold">ลำดับ {i + 1}</div>
            {/* <div className="data-card">คำถาม</div> */}
            <div className="data-card-word bold">{v.message}</div>
            {/* <div className="data-card">คำตอบ</div> */}
            <div className="data-card-word">
              {v.reply_message.map((v) => {
                return <div className="box-massage-card"><div className="massage-card"> {`${v.reply_message} `} </div></div>;
                // return <span className="massage-card"> {`${v.reply_message} `}<br></br> </span>;
              })}
            </div>
            <div className="flex-card">
              <div className="data-card bold">ค่าความมั่นใจ</div>
              <div style={{width:'10px'}}></div>

             {v.confident>0.05? <div className="data-card-word green bold">{v.confident}</div>
             :<div className="data-card-word red bold">{v.confident}</div>
             }
              
            </div>
            <div className="card-btn">
              <button className="btn-card" onClick={() => handleDelete(v.id)}>
                <i className="fa fa-trash btn-card-size"></i>
              </button>
            </div>
          </div>
        );
      })}

      {/* <div className="container-card">
        <div className="data-card-title">ลำดับ 1</div>
        <div className="data-card">คำถาม</div>
        <div className="data-card-word">สวัสดีครับ สอบถามเรื่องใบขับขี่</div>
        <div className="data-card">คำตอบ</div>
        <div className="data-card-word">สวัสดีคะกรมขนส่งยินดีให้บริการคะ</div>
        <div className="data-card">ค่าความมั่นใจ</div>
        <div className="data-card-word">0.4236222222222222</div>
        <div className="card-btn">
          <button className="btn-card">
            <i className="fa fa-trash btn-card-size"></i>
          </button>
        </div>
      </div> */}

      {/* <div className="container-card">
        <div className="data-card-title">ลำดับ 1</div>
        <div className="data-card">คำถาม</div>
        <div className="data-card-word">สวัสดีครับ สอบถามเรื่องใบขับขี่</div>
        <div className="data-card">คำตอบ</div>
        <div className="data-card-word">สวัสดีคะกรมขนส่งยินดีให้บริการคะ</div>
        <div className="data-card">ค่าความมั่นใจ</div>
        <div className="data-card-word">0.4236222222222222</div>
        <div className="card-btn">
          <button className="btn-card">
            <i className="fa fa-trash btn-card-size"></i>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default CardTable;
