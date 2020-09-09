import React from "react";
// import TableTopMassage from "../../components/TableTopMassage";
// import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
// import Button from "../../components/Button";
import { Line } from "react-chartjs-2";
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

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container-main">
      <div className="">
        <div className="">
          <div className="top-title">
            <div className="margin-left flex-1 bold">Social Monitoring</div>
          </div>

          <div className="chart-1">
            <Line
              data={data}
              width={100}
              height={50}
              options={{ responsive: true, maintainAspectRatio: false }}
              className="chart-data"
            />
          </div>
          <div className="box-checkbox flex">
            <div className=" flex-check">
              <div className="checkbox">
                <i className="fa fa-hdd-o icon-chechbook"></i>
                <span className="span-checkbook font-checkbook">All</span>
                <span className="font-checkbook">1512</span>
              </div>

              <div className="checkbox">
                <i className="fa fa-facebook-square icon-chechbook"></i>
                <span className="span-checkbook font-checkbook">facebook</span>
                <span className="font-checkbook">520</span>
              </div>

              <div className="checkbox">
                <i className="fa fa-twitter icon-chechbook"></i>
                <span className="span-checkbook font-checkbook">twitter</span>
                <span className="font-checkbook">315</span>
              </div>

              <div className="checkbox">
                <i className="fa fa-youtube-play icon-chechbook"></i>
                <span className="span-checkbook font-checkbook">youtube</span>
                <span className="font-checkbook">85</span>
              </div>

              <div className="checkbox">
                <i className="fa fa-chrome icon-chechbook"></i>
                <span className="span-checkbook font-checkbook">Webside</span>
                <span className="font-checkbook">641</span>
              </div>

              <div className="checkbox">
                <i className="fa fa-newspaper-o icon-chechbook"></i>
                <span className="span-checkbook font-checkbook">News</span>
                <span className="font-checkbook">58</span>
              </div>
            </div>

            <div className="flex-center">
              <div className="btn-message-1">
                <div>Negative</div>
                <div className="number-Negative">-350</div>
                <div>message</div>
              </div>
              <div className="btn-message">
                <div>Neutral</div>
                <div className="number-Negative">600</div>
                <div>message</div>
              </div>
              <div className="btn-message-2">
                <div>Positive</div>
                <div className="number-Negative">+250</div>
                <div>message</div>
              </div>
            </div>

            <div className="">
              <MuiPickersUtilsProvider style={{ width: "100%" }} utils={DateFnsUtils}>
                <Grid container justify="space-around">
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

          <div className="container-monitor">
            <div className="box-monitor-1">
              <div className="block  bottom-socail">
                <div className="top-title">
                  <div className="margin-left flex-1 bold">Data Monitoring</div>
                </div>

                <div className="data-monitor">
                  <div className="box-message-data-1">
                    <div className="flex-data">
                      <i className="fa fa-twitter icon-message-data"></i>
                      <div className="bold">
                        <div className="font-data-title">Apirom Singhapookam</div>
                        <div className="font-data ">
                          <i class="fa fa-calendar icon-date"></i>
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

                  <div className="box-message-data-1">
                    <div className="flex-data">
                      <i className="fa fa-twitter icon-message-data"></i>
                      <div className="bold">
                        <div className="font-data-title">Apirom Singhapookam</div>
                        <div className="font-data">
                          <i class="fa fa-calendar icon-date"></i>
                          <span className="icon-date-1">20-08-2020</span>
                          <div className="red margin">Negative</div>
                        </div>
                      </div>
                    </div>
                    <span className="font-data-title">
                      สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                      กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                      เรซซิ่ง มอเตอร์สปอร์ต 2020”
                    </span>
                  </div>

                  <div className="box-message-data-1">
                    <div className="flex-data">
                      <i className="fa fa-twitter icon-message-data"></i>
                      <div className="bold">
                        <div className="font-data-title">Apirom Singhapookam</div>
                        <div className="font-data">
                          <i class="fa fa-calendar icon-date"></i>
                          <span className="icon-date-1">20-08-2020</span>
                          <div className="red margin ">Negative</div>
                        </div>
                      </div>
                    </div>
                    <span className="font-data-title">
                      สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                      กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                      เรซซิ่ง มอเตอร์สปอร์ต 2020”
                    </span>
                  </div>

                  <div className="box-message-data-1">
                    <div className="flex-data">
                      <i className="fa fa-twitter icon-message-data"></i>
                      <div className="bold">
                        <div className="font-data-title">Apirom Singhapookam</div>
                        <div className="font-data">
                          <i class="fa fa-calendar icon-date"></i>
                          <span className="icon-date-1">20-08-2020</span>
                          <div className="blue margin">Neutral</div>
                        </div>
                      </div>
                    </div>
                    <span className="font-data-title">
                      สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                      กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า กาซู
                      เรซซิ่ง มอเตอร์สปอร์ต 2020”
                    </span>
                  </div>

                  <div className="box-message-data-1">
                    <div className="flex-data">
                      <i className="fa fa-twitter icon-message-data"></i>
                      <div className="bold">
                        <div className="font-data-title">Apirom Singhapookam</div>
                        <div className="font-data ">
                          <i class="fa fa-calendar icon-date"></i>
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
                </div>

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
            <div className="box-monitor-2">
              <iframe src="https://www.sanook.com/news/" className="iframe" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddKeyword;
