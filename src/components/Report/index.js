import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import words from "./word";

function Report() {
  const options = {
    rotations: 1,
    rotationAngles: [0],
    fontFamily: "Prompt",
    fontSizes: [10, 28],
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        // fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        // fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <body>
      <div className="container-page-report">
        <br />
        <div className="center-text-report">
          <h4>KEYWORD</h4>
          <h1>เมาไม่ขับ</h1>
          <br />
          <br />
          <h3>DATE RANGE</h3>
          <label for="">20 กรกฎาคม 2020 - 20 สิงหาคม 2020 (30 days)</label>
        </div>
      </div>
      <div className="container-page-report">
        <br />
        <div className="center-summary">
          <h3 className="h3">Summary of mentions</h3>
          <div className="flex-report">
            <div id="container-chart-report" style={{ width: "50%" }}>
              <div className="pd-box-report">
                <h4 style={{ marginBottom: "5px", color: "#777" }}>VOLUME OF MENTIONS</h4>
                <div className="flex-report">
                  <i className="fa fa-bar-chart" style={{ fontSize: "18px", marginTop: "5px" }}></i>
                  <div style={{ fontSize: "18px", margin: "0 10px" }}>30</div>
                </div>
              </div>
            </div>
            <div id="container-chart-report">
              <div className="pd-box-report">
                <h4 style={{ marginBottom: "5px", color: "#777" }}>NATURAL</h4>
                <div className="flex-report">
                  <i className="fa fa-random" style={{ fontSize: "18px", marginTop: "5px" }}></i>
                  <div style={{ fontSize: "18px", margin: "0 10px" }}>30</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-report">
            <div id="container-chart-report">
              <div className="pd-box-report">
                <h4 style={{ marginBottom: "5px", color: "#777" }}>POSITIVE</h4>
                <div className="flex-report">
                  <i className="fa fa-thumbs-o-up" style={{ fontSize: "18px", marginTop: "5px" }}></i>
                  <div style={{ fontSize: "18px", margin: "0 10px" }}>30</div>
                </div>
              </div>
            </div>
            <div id="container-chart-report">
              <div className="pd-box-report">
                <h4 style={{ marginBottom: "5px", color: "#777" }}>NEGATIVE</h4>
                <div className="flex-report">
                  <i className="fa fa-thumbs-down" style={{ fontSize: "18px", marginTop: "5px" }}></i>
                  <div style={{ fontSize: "18px", margin: "0 10px" }}>30</div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="h3">Volume of mentions graph</h3>
          <div id="container-chart-report" style={{ width: "100%" }}>
            <Line
              data={data}
              // width={100}
              height={250}
              options={{ responsive: true, maintainAspectRatio: false }}
              className="chart-data"
            />
          </div>
          {/* <br /> */}
          {/* <h3 className="h3">Mentions per category (comparing to previous period)</h3> */}
          {/* <div className="flex-report">
            <div className="flex-report jus flex-report-1">
              <div>
                <i className="fa fa-share-alt icon-z" style={{ fontSize: "24px", width: "120px" }}></i>
              </div>
              <div>
                <div>6</div>
                <div>TWITTER</div>
              </div>
            </div>
            <div className="flex-report jus flex-report-1">
              <div>
                <i className="fa fa-youtube-play icon-z" style={{ fontSize: "24px", width: "120px" }}></i>
              </div>
              <div>
                <div>12</div>
                <div>VIDEOS</div>
              </div>
            </div>
            <div className="flex-report jus flex-report-1">
              <div>
                <i className="fa fa-newspaper-o icon-z" style={{ fontSize: "24px", width: "120px" }}></i>
              </div>
              <div>
                <div>18</div>
                <div>NEWS</div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex-report">
            <div className="flex-report jus flex-report-1">
              <div>
                <i className="fa fa-share-alt icon-z" style={{ fontSize: "24px", width: "120px" }}></i>
              </div>
              <div>
                <div>3</div>
                <div>WEB</div>
              </div>
            </div>
            <div className="flex-report jus flex-report-1">
              <div>
                <i className="fa fa-rss icon-z" style={{ fontSize: "24px", width: "120px" }}></i>
              </div>
              <div>
                <div>10</div>
                <div>BLOGS</div>
              </div>
            </div>
            <div className="flex-report jus flex-report-1">
              <div>
                <i className="fa fa-comments-o icon-z" style={{ fontSize: "24px", width: "120px" }}></i>
              </div>
              <div>
                <div>6</div>
                <div>FORUMS</div>
              </div>
            </div>
          </div> */}
          <h3 className="h3">Word Cloud</h3>
          <div id="container-chart-report" style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <ReactWordcloud words={words} options={options} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-page-report">
        <br />
        <div className="flex-report">
          <div className="flex-report-1">
            <h4 className="h3">Most popular mentions</h4>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
          </div>
          <div style={{ width: "15px" }}></div>
          <div className="flex-report-1">
            <h4 className="h3">Recent mentions</h4>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
            <div className="box-mentions-report">
              <div className="flex-report al-center">
                <i className="fa fa-share-alt icon-m-report"></i>
                <div className="flex-report-1">
                  <div>NAMETEST</div>
                  <div className="col-vol">
                    <i className="fa fa-share-alt"></i> link.com
                  </div>
                </div>
                <div className="col-vol">
                  <i className="fa fa-calendar"></i> 2020-05-19 20.53
                </div>
              </div>
              <span>ฝันร้ายนำโชค! ปู่ถูกลอตเตอรี่ 12 ล้าน สุดฮาบอกจะเปลี่ยนเมียใหม่ เพราะชอบบ่นตอน</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-page-report">
        <br />
        <div className="flex-report">
          <i className="fa fa-line-chart col-vol" style={{ fontSize: "24px", margin: "20px" }}></i>
          <h3 className="h3">Most active sites</h3>
        </div>
        {/* <br /> */}
        <table className="table-report">
          <tr>
            <th className="th-report" style={{ textAlign: "center", width: "50px" }}>
              No.
            </th>
            <th className="th-report">SITE</th>
            <th className="th-report" style={{ textAlign: "right", width: "100px" }}>
              <i className="fa fa-comments col-vol"></i> MENTIONS
            </th>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              1
            </td>
            <td className="td-report">youtube.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              2
            </td>
            <td className="td-report">twitter</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              7
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              3
            </td>
            <td className="td-report">kaidee.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              8
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              4
            </td>
            <td className="td-report">thairath.co.th</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              5
            </td>
            <td className="td-report">gobear.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              6
            </td>
            <td className="td-report">kaidee.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              8
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              7
            </td>
            <td className="td-report">thairath.co.th</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              8
            </td>
            <td className="td-report">gobear.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              9
            </td>
            <td className="td-report">kaidee.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              8
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              10
            </td>
            <td className="td-report">thairath.co.th</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1
            </td>
          </tr>
        </table>
        <br />
        <div className="flex-report">
          <i className="fa fa-bullhorn col-vol" style={{ fontSize: "24px", margin: "20px" }}></i>
          <h3 className="h3">Most influential sites</h3>
        </div>
        {/* 
        <br /> */}
        <table className="table-report">
          <tr>
            <th className="th-report" style={{ textAlign: "center", width: "50px" }}>
              No.
            </th>
            <th className="th-report">SITE</th>
            <th className="th-report" style={{ textAlign: "right", width: "100px" }}>
              <i className="fa fa-eye col-vol"></i> VISITS
            </th>
            <th className="th-report" style={{ textAlign: "right", width: "150px" }}>
              <i className="fa fa-heart col-vol"></i> INFLUENCE SCORE
            </th>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              1
            </td>
            <td className="td-report">youtube.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              2
            </td>
            <td className="td-report">twitter</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              2.8B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              7/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              3
            </td>
            <td className="td-report">kaidee.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              8/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              4
            </td>
            <td className="td-report">thairath.co.th</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              5
            </td>
            <td className="td-report">gobear.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              6
            </td>
            <td className="td-report">kaidee.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              8/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              7
            </td>
            <td className="td-report">thairath.co.th</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              8
            </td>
            <td className="td-report">gobear.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              9
            </td>
            <td className="td-report">kaidee.com</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              8/10
            </td>
          </tr>
          <tr>
            <td className="td-report" style={{ textAlign: "center" }}>
              10
            </td>
            <td className="td-report">thairath.co.th</td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              10B
            </td>
            <td className="td-report" style={{ textAlign: "right", width: "100px" }}>
              1/10
            </td>
          </tr>
        </table>
      </div>
    </body>
  );
}

export default Report;
