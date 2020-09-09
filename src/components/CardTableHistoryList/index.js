import React from "react";
import Button from "../../components/Button";

import "./style.css";


const CardTable = () => {

  return (
    <div>
      <div className="container-card">
        <div className="data-card-title">
          ลำดับ 1
        </div>
        <div className="data-card">
          ผู้ใช้งาน
        </div>
        <div className="data-card-word">
          user01
        </div>
        <div className="data-card">
          จำนวนบทสนทนา/คำถาม
        </div>
        <div className="data-card-word">
          35
        </div>
        <div className="data-card">
          จำนวนที่ตอบได้
        </div>
        <div className="data-card-word">
          32
        </div>
        <div className="data-card">
          จำนวนที่ตอบไม่ได้
        </div>
        <div className="data-card-word">
          3
        </div>
        <div className="data-card">
          สถานะ
        </div>
        <div className="data-card-word center">
          <Button name="รายละเอียด " styleBtn="view" />
        </div>
      </div>

      <div className="container-card">
        <div className="data-card-title">
          ลำดับ 1
        </div>
        <div className="data-card">
          ผู้ใช้งาน
        </div>
        <div className="data-card-word">
          user01
        </div>
        <div className="data-card">
          จำนวนบทสนทนา/คำถาม
        </div>
        <div className="data-card-word">
          35
        </div>
        <div className="data-card">
          จำนวนที่ตอบได้
        </div>
        <div className="data-card-word">
          32
        </div>
        <div className="data-card">
          จำนวนที่ตอบไม่ได้
        </div>
        <div className="data-card-word">
          3
        </div>
        <div className="data-card">
          เวลาเริ่ม-เวลาสิ้นสุด
        </div>
        <div className="data-card-word">
          20.03:10-07-2020 - 20.41:10-07-2020
        </div>
        <div className="data-card">
          สถานะ
        </div>
        <div className="data-card-word center">
          <Button name="รายละเอียด " styleBtn="view" />
        </div>
      </div>
      

      
    </div>
  );
};

export default CardTable;