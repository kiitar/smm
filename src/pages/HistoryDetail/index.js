import React from "react";
// import TableTopMassage from "../../components/TableTopMassage";
// import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { Line } from "react-chartjs-2";
// import Button from "../../components/Button";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

const AddKeyword = () => {
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

  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container-main">
      <div className="">
        <div className="">
          <div className="top-title">
            <div className="margin-left flex-1 bold">Summary</div>
          </div>

          <div className="box-keyword">
            <div className="flex-1">
              <div>กรมขนส่ง</div>
              <div className="font-data">You current project</div>
            </div>
            <div className="flex-title">
              <div className="btn-active-1">Day</div>
              <div className="btn-active">Week</div>
              <div className="btn-active">Mouth</div>
            </div>
            <div className="margin-date"></div>
            <div className="flex-title-1">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <div className="margin-date"></div>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div>
          </div>

          <div className="box-summery">
            <div className="flex-1 box-detail">
              <div className="top-title">
                <div className="flex-1 bold">The most popular mentions</div>
              </div>
              <div>
                {/* <div className="box-message-data">
                  <div className="flex-data">
                    <i className="fa fa-twitter icon-message-data"></i>
                    <div className="bold">
                      <div className="font-data-title">Apirom Singhapookam</div>
                      <div className="font-data ">
                        <i className="fa fa-calendar icon-date"></i>
                        <span className="icon-date-1">20-08-2020</span>
                        <div className="green margin">Positive</div>
                      </div>
                    </div>
                  </div>
                  <span className="font-data-title">
                    สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                    กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                    เรซซิ่ง มอเตอร์สปอร์ต 2020”
                  </span>
                </div> */}

                {/* <div className="box-message-data">
                  <div className="flex-data">
                    <i className="fa fa-twitter icon-message-data"></i>
                    <div className="bold">
                      <div className="font-data-title">Apirom Singhapookam</div>
                      <div className="font-data ">
                        <i className="fa fa-calendar icon-date"></i>
                        <span className="icon-date-1">20-08-2020</span>
                        <div className="green margin">Positive</div>
                      </div>
                    </div>
                  </div>
                  <span className="font-data-title">
                    สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                    กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                    เรซซิ่ง มอเตอร์สปอร์ต 2020”
                  </span>
                </div> */}

                <div className="box-message-data">
                  <div className="flex-data">
                    <i className="fa fa-twitter icon-message-data"></i>
                    <div className="bold">
                      <div className="font-data-title">Apirom Singhapookam</div>
                      <div className="font-data ">
                        <i className="fa fa-calendar icon-date"></i>
                        <span className="icon-date-1">20-08-2020</span>
                        <div className="green margin">Positive</div>
                      </div>
                    </div>
                  </div>
                  <span className="font-data-title">
                    สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                    กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                    เรซซิ่ง มอเตอร์สปอร์ต 2020”
                  </span>
                </div>

                <div className="box-message-data">
                  <div className="flex-data">
                    <i className="fa fa-twitter icon-message-data"></i>
                    <div className="bold">
                      <div className="font-data-title">Apirom Singhapookam</div>
                      <div className="font-data ">
                        <i className="fa fa-calendar icon-date"></i>
                        <span className="icon-date-1">20-08-2020</span>
                        <div className="green margin">Positive</div>
                      </div>
                    </div>
                  </div>
                  <span className="font-data-title">
                    สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                    กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                    เรซซิ่ง มอเตอร์สปอร์ต 2020”
                  </span>
                </div>

                <div className="box-message-data">
                  <div className="flex-data">
                    <i className="fa fa-twitter icon-message-data"></i>
                    <div className="bold">
                      <div className="font-data-title">Apirom Singhapookam</div>
                      <div className="font-data ">
                        <i className="fa fa-calendar icon-date"></i>
                        <span className="icon-date-1">20-08-2020</span>
                        <div className="green margin">Positive</div>
                      </div>
                    </div>
                  </div>
                  <span className="font-data-title">
                    สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                    กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                    เรซซิ่ง มอเตอร์สปอร์ต 2020”
                  </span>
                </div>

                <div className="block center bottom-socail">
                  <div className="pagination-center">
                    <Pagination
                      count={10}
                      shape="rounded"
                      // onChange={(e, p) => {
                      //   handleOnChangePage(p);
                      // }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-date"></div>

            <div className="flex-1 box-detail">
              <div className="top-title">
                <div className="flex-1 bold">Summary</div>
              </div>
              <div className="box-keyword-1">
                <div className="flex-1">
                  <div className="title-summary">MENTIONS</div>
                  <div>35</div>
                  <div className="message-summary green">+35 (+100%)</div>
                </div>
                <div className="flex-1">
                  <div className="title-summary">SM REACH</div>
                  <div>0</div>
                  <div className="message-summary">0 (100%)</div>
                </div>
                <div className="flex-1">
                  <div className="title-summary">INTERACTION</div>
                  <div>0</div>
                  <div className="message-summary">0 (100%)</div>
                </div>
                <div className="flex-1">
                  <div className="title-summary">POSITIVE</div>
                  <div>6</div>
                  <div className="message-summary green">+6 (+100%)</div>
                </div>
                <div className="flex-1">
                  <div className="title-summary">NEGATIVE</div>
                  <div>8</div>
                  <div className="message-summary red">+8 (+100%)</div>
                </div>
              </div>

              <div className="box-chart-summary">
                <div className="top-title">
                  <div className="flex-1 bold">Mentions</div>
                </div>
                <Line
                  data={data}
                  width={100}
                  height={50}
                  options={{ responsive: true, maintainAspectRatio: false }}
                  className="chart-data"
                />
              </div>

              <div className="box-chart-summary">
                <div className="top-title">
                  <div className="flex-1 bold">Social Media Reach</div>
                </div>
                <Line
                  data={data}
                  width={100}
                  height={50}
                  options={{ responsive: true, maintainAspectRatio: false }}
                  className="chart-data"
                />
              </div>
            </div>
          </div>

          <div className="box-summery">
            <div className="flex-13 box-detail">
              <div className="top-title">
                <div className="flex-1 bold">The most influential sites</div>
              </div>
              <div>
                <table>
                  <tr>
                    <td className="td-line ">youtube.com</td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-comments-o"></i> 64
                      </div>
                      <div className="message-summary">MENTIONS</div>
                    </td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-eye"></i> 33 B
                      </div>
                      <div className="message-summary">VISITS</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-line ">tiktok.com</td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-comments-o"></i> 125
                      </div>
                      <div className="message-summary">MENTIONS</div>
                    </td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-eye"></i> 439 M
                      </div>
                      <div className="message-summary">VISITS</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-line ">sootinclaimon.wordpress.c...</td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-comments-o"></i> 349
                      </div>
                      <div className="message-summary">MENTIONS</div>
                    </td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-eye"></i> 432 M
                      </div>
                      <div className="message-summary">VISITS</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-line ">pantip.com</td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-comments-o"></i> 285
                      </div>
                      <div className="message-summary">MENTIONS</div>
                    </td>
                    <td className="td-line center">
                      <div className="div-flex-center">
                        <i className="fa fa-eye"></i> 69 M
                      </div>
                      <div className="message-summary">VISITS</div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="margin-date"></div>

            <div className="flex-15 flex-display">
              <div className="flex-1 box-detail">
                <div className="top-title">
                  <div className="flex-1 bold">
                    <i className="fa fa-pie-chart"></i> Stats
                  </div>
                </div>
                <table>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-tv"></i> 33 B <span className="message-summary green">+52%</span>
                      </div>
                      <div className="message-summary">NON-SOCIAL MENTIONS</div>
                    </td>
                    <td className="td-line "></td>
                  </tr>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-share-alt"></i> 439 M <span className="message-summary green">+854%</span>
                      </div>
                      <div className="message-summary">SOCIAL MEDIA MENTIONS</div>
                    </td>
                    <td className="td-line "></td>
                  </tr>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-play"></i> 432 M <span className="message-summary green">+42%</span>
                      </div>
                      <div className="message-summary">VIDEOS</div>
                    </td>
                    <td className="td-line "></td>
                  </tr>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-retweet"></i> 69 M <span className="message-summary green">+302%</span>
                      </div>
                      <div className="message-summary">SOCIAL MEDIA SHARES</div>
                    </td>
                    <td className="td-line "></td>
                  </tr>
                </table>
              </div>

              <div className="margin-date"></div>

              <div className="flex-1 box-detail">
                <div className="top-title">
                  <div className="flex-1 bold">
                    <i className="fa fa-share-alt"></i> Sources
                  </div>
                </div>
                <table>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-play"></i> 64 <span className="message-summary green">+1302%</span>
                      </div>
                      <div className="message-summary">VIDEOS</div>
                    </td>
                    <td className="td-line"></td>
                  </tr>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-share-alt"></i> 125 <span className="message-summary green">+252%</span>
                      </div>
                      <div className="message-summary">WEB</div>
                    </td>
                    <td className="td-line "></td>
                  </tr>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-newspaper-o"></i> 349 <span className="message-summary green">+652%</span>
                      </div>
                      <div className="message-summary">NEWS</div>
                    </td>
                    <td className="td-line "></td>
                  </tr>
                  <tr>
                    <td className="td-line ">
                      <div>
                        <i className="fa fa-rss"></i> 285 <span className="message-summary green">+52%</span>
                      </div>
                      <div className="message-summary">BLOGS</div>
                    </td>
                    <td className="td-line "></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddKeyword;
