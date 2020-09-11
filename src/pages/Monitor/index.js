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
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import { monitorFilterList, sentimentFilterListState, currentKeywordState, monitorDataState } from "../../recoil/atoms";
import { getDataMonitor } from "../../graphql/Monitor";
import { RequestAPI } from "../../utils";

import CircularProgress from "@material-ui/core/CircularProgress";

// import { RequestAPI } from "../../utils";
// import { getKeywords, deleteKeywords } from "../../graphql/Keywords";

const Monitor = () => {
  const currentKeyword = useRecoilValue(currentKeywordState);
  console.log(`Monitor -> currentKeyword`, currentKeyword);
  const resetList = useResetRecoilState(monitorFilterList);
  const [monitorFilterLists, setMonitorFilterLists] = useRecoilState(monitorFilterList);

  const resetSentimentList = useResetRecoilState(sentimentFilterListState);
  const [sentimentFilterList, setSentimentFilterList] = useRecoilState(sentimentFilterListState);

  const [monitorData, setMonitorData] = useRecoilState(monitorDataState);
  console.log(`Monitor -> monitorData`, monitorData);

  const handleSelect = (v) => {
    if (v.id === 0) {
      return;
    } else {
      let arr = monitorFilterLists.map((v) => v);
      arr.splice(0, 1, { id: 0, name: "All", isSelected: false, icon: "fa fa-hdd-o" });
      arr.splice(v.id, 1, { id: v.id, name: v.name, isSelected: !v.isSelected, icon: v.icon });
      let check = arr.filter((v) => v.isSelected === true);
      console.log(`handleSelect -> check`, check);
      if (check.length === 6) {
        return resetList();
      } else if (check.length >= 1 && check.length < 6) {
        arr.splice(0, 1, { id: 0, name: "All", isSelected: false, icon: "fa fa-hdd-o" });
        setMonitorFilterLists([...arr]);
      } else {
        arr.splice(0, 1, { id: 0, name: "All", isSelected: true, icon: "fa fa-hdd-o" });
        setMonitorFilterLists([...arr]);
      }
    }
  };

  const handleSelectSentiment = (v, i) => {
    console.log(v);
    let arr = sentimentFilterList.map((v) => v);
    arr.splice(i, 1, { id: v.id, name: v.name, isSelected: !v.isSelected });
    let check = arr.filter((v) => v.isSelected === true);
    console.log(`handleSelectSentiment -> check`, check);
    if (!check.length) {
      return resetSentimentList();
    } else {
      setSentimentFilterList([...arr]);
      return;
    }
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

  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  let a = [27, 2, 3, 4, 5, 6, 7];

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const fetchData = async () => {
    console.log("888899");

    // let offset = `${addKeyword.page - 1}0`;
    let { data, errors } = await RequestAPI(getDataMonitor, {
      keywords_id: currentKeyword.id,
      sources_filter: [1, 2, 3, 4],
      sentiment_filter: ["A", "B", "C"],
      offset: 0,
      limit: 10,
      start_date: "2020-09-09 14:04:10.668",
      end_date: "2020-09-11 14:04:10.668",
    });
    console.log(`fetchData -> errors`, errors);

    if (data) {
      console.log("tt: ", data.getDataMonitor);
      setMonitorData({ ...data.getDataMonitor });
    }
    // console.log(`fetchData -> errors`, errors);
    // if (data) {
    //   setAddKeyword({ ...addKeyword, rows: data.getKeywords.rows, keywordsData: [...data.getKeywords.data] });
    // }
  };

  const stableLoad = React.useCallback(fetchData, [currentKeyword, monitorFilterLists, sentimentFilterList]);

  React.useEffect(() => {
    // effect
    stableLoad();
    return () => {
      console.log("5555556666");
    };
  }, [stableLoad]);

  // let { data_info, rows } = monitorData;

  return (
    <div className="container-main">
      <div className="">
        <div className="">
          <div className="top-title">
            <div className="margin-left flex-1 bold">Social Monitoring</div>
          </div>
          <div className="box-keyword">
            <div className="flex-1">
              <div>{currentKeyword.keyword}</div>
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
              {monitorFilterLists.map((v, i) => {
                if (v.id === 0) {
                  return (
                    <div className={`checkbox ${v.isSelected ? "checked" : null}`} key={i} onClick={resetList}>
                      <i className={`${v.icon} icon-chechbook`}></i>
                      <span className="span-checkbook font-checkbook">{v.name}</span>
                      <span className="font-checkbook">{a[i]}</span>
                    </div>
                  );
                } else if (v.isSelected && v.id !== 0) {
                  return (
                    <div className={`checkbox checked`} key={i} onClick={() => handleSelect(v)}>
                      <i className={`${v.icon} icon-chechbook`}></i>
                      <span className="span-checkbook font-checkbook">{v.name}</span>
                      <span className="font-checkbook">{a[i]}</span>
                    </div>
                  );
                } else {
                  return (
                    <div className={`checkbox`} key={i} onClick={() => handleSelect(v)}>
                      <i className={`${v.icon} icon-chechbook`}></i>
                      <span className="span-checkbook font-checkbook">{v.name}</span>
                      <span className="font-checkbook">{a[i]}</span>
                    </div>
                  );
                }
              })}
            </div>

            <div className="flex-center">
              {sentimentFilterList.map((v, i) => {
                let { name, id, isSelected } = v;
                return (
                  <div
                    className={`btn-message-${id} ${isSelected ? `btn-selected-${id}` : null}`}
                    key={i}
                    onClick={() => {
                      handleSelectSentiment(v, i);
                    }}
                  >
                    <div>{name}</div>
                    <div className="number-Negative">600</div>
                    <div>message</div>
                  </div>
                );
              })}
              {/* <div className="btn-message-1">
                <div>Negative</div>
                <div className="number-Negative">-350</div>
                <div>message</div>
              </div>
              
              <div className="btn-message-2">
                <div>Positive</div>
                <div className="number-Negative">+250</div>
                <div>message</div>
              </div> */}
            </div>

            {/* <div className="">
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
                    id="date-picker-inline2"
                    label="Date picker inline2"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div> */}
          </div>

          <div className="container-monitor">
            <div className="box-monitor-1">
              <div className="block  bottom-socail">
                <div className="top-title">
                  <div className="margin-left flex-1 bold">Data Monitoring</div>
                </div>

                <div className="data-monitor">
                  {null === null && (
                    <div className={"center"}>
                      <br />
                      <CircularProgress />
                      <p>กำลังโหลดข้อมูล ...</p>
                    </div>
                  )}
                  {monitorData !== null &&
                    monitorData.data_info &&
                    monitorData.data_info.map((v) => {
                      return (
                        <div className="box-message-data-1">
                          <div className="flex-data">
                            <i className="fa fa-twitter icon-message-data"></i>
                            <div className="bold">
                              <div className="font-data-title">Apirom Shapookam</div>
                              <div className="font-data ">
                                <i className="fa fa-calendar icon-date"></i>
                                <span className="icon-date-1">20-08-2020</span>
                                <div className="green margin">Positive</div>
                              </div>
                            </div>
                          </div>
                          <span className="font-data-title">
                            สิ้นสุดการรอคอย กลับมาเร่งเต็มสปีดเพื่อช่วงชิงความเป็นหนึ่ง
                            กับบทพิสูจน์ความเร็วแรงเต็มสมรรถนะของการแข่งขันรถยนต์วันเมคเรซใหญ่ที่สุดในเอเชีย “โตโยต้า
                            กาซู เรซซิ่ง มอเตอร์สปอร์ต 2020”
                          </span>
                        </div>
                      );
                    })}

                  {/* <div className="box-message-data-1">
                    <div className="flex-data">
                      <i className="fa fa-twitter icon-message-data"></i>
                      <div className="bold">
                        <div className="font-data-title">Apirom Singhapookam</div>
                        <div className="font-data">
                          <i className="fa fa-calendar icon-date"></i>
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
                          <i className="fa fa-calendar icon-date"></i>
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
                          <i className="fa fa-calendar icon-date"></i>
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

                  <div className="box-message-data-1"> */}
                  {/* <div className="flex-data">
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
                </div>

                <div className="pagination-center">
                  <Pagination
                    count={1}
                    shape="rounded"
                    // onChange={(e, p) => {
                    //   handleOnChangePage(p);
                    // }}
                  />
                </div>
              </div>
            </div>

            <div className="box-monitor-2">
              <iframe
                src="https://www.sanook.com/news/"
                className="iframe"
                frameBorder="0"
                title="This is a unique title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
