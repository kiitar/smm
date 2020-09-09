import React from "react";
import Button from "../Button/";


import "./style.css";


const Table = () => {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th style={{ textAlign: 'center' }}>ลำดับ</th>
            <th style={{ textAlign: 'center' }}>ผู้ใช้งาน</th>
            <th style={{ textAlign: 'center' }}>จำนวนบทสทนา/คำถาม</th>
            <th style={{ textAlign: 'center' }}>จำนวนที่ตอบได้</th>
            <th style={{ textAlign: 'center' }}>จำนวนที่ตอบไม่ได้</th>
            {/* <th style={{ textAlign: 'center' }}>เวลาเริ่ม</th>
            <th style={{ textAlign: 'center' }}>เวลาสิ้นสุด</th> */}
            <th style={{ textAlign: 'center' }}>รายละเอียด</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' }}>1</td>
            <td style={{ textAlign: 'center' }}>user01</td>
            <td className="blue" style={{ textAlign: 'center' }}>35 </td>
            <td className="green" style={{ textAlign: 'center' }}>32 </td>
            <td className="red" style={{ textAlign: 'center' }}>3 </td>
            {/* <td style={{ textAlign: 'center' }}>20.03 : 10-07-2020</td>
            <td style={{ textAlign: 'center' }}>20.41 : 10-07-2020</td> */}
            <td style={{ textAlign: 'center' }}><Button name="รายละเอียด " styleBtn="view"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;