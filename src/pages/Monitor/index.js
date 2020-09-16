import React, { useState } from "react";
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import {
  monitorFilterList,
  sentimentFilterListState,
  currentKeywordState,
  monitorDataState,
  currentLinkState,
  currentDiffDateState,
  currentStartDateState,
} from "../../recoil/atoms";
import moment from "moment";
import { getDataMonitor } from "../../graphql/Monitor";
import { RequestAPI } from "../../utils";

import { Line } from "react-chartjs-2";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";
import "date-fns";

const Monitor = () => {
  // Recoil State
  const currentKeyword = useRecoilValue(currentKeywordState);
  const [currentLink, setCurrentLink] = useRecoilState(currentLinkState);
  const [currentDiffDate, setCurrentDiffDate] = useRecoilState(currentDiffDateState);
  const [sentimentFilterList, setSentimentFilterList] = useRecoilState(sentimentFilterListState);
  const [monitorData, setMonitorData] = useRecoilState(monitorDataState);
  const [monitorFilterLists, setMonitorFilterLists] = useRecoilState(monitorFilterList);
  const resetList = useResetRecoilState(monitorFilterList);
  const resetSentimentList = useResetRecoilState(sentimentFilterListState);
  const resetCurrentLink = useResetRecoilState(currentLinkState);
  const resetMonitorData = useResetRecoilState(monitorDataState);
  // const resetCurrentDiffDate = useResetRecoilState(currentDiffDateState);

  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState(moment(Date.now()).subtract(currentDiffDate, "days"));
  const [endDate, setEndDate] = useState(moment(Date.now()));
  const [mentionCount, setMentionCount] = useState([0, 0, 0, 0, 0, 0, 0]);
  const handleOnChangePage = (p) => {
    setPage(p);
  };

  const handleEndDate = (date) => {
    setCurrentDiffDate(null);
    setEndDate(date);
  };
  const handleStartDate = (date) => {
    setCurrentDiffDate(null);
    setStartDate(date);
  };

  const handleSelect = (v) => {
    if (v.id === 0) {
      return;
    } else {
      let arr = monitorFilterLists.map((v) => v);
      arr.splice(0, 1, {
        id: 0,
        sid: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        name: "All",
        isSelected: false,
        icon: "fa fa-hdd-o",
      });
      arr.splice(v.id, 1, { id: v.id, sid: v.sid, name: v.name, isSelected: !v.isSelected, icon: v.icon });
      let check = arr.filter((v) => v.isSelected === true);
      console.log(`handleSelect -> check`, check);
      resetCurrentLink();
      resetMonitorData();
      if (check.length === 6) {
        return resetList();
      } else if (check.length >= 1 && check.length < 6) {
        arr.splice(0, 1, {
          id: 0,
          sid: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          name: "All",
          isSelected: false,
          icon: "fa fa-hdd-o",
        });
        setMonitorFilterLists([...arr]);
      } else {
        arr.splice(0, 1, {
          id: 0,
          sid: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          name: "All",
          isSelected: true,
          icon: "fa fa-hdd-o",
        });
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
    labels: [
      "10/09/2020 00:00",
      "10/09/2020 01:00",
      "10/09/2020 02:00",
      "10/09/2020 03:00",
      "10/09/2020 04:00",
      "10/09/2020 05:00",
      "10/09/2020 06:00",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 15, 38, 86, 21],
        // fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 33, 53, 85, 15],
        // fill: false,
        borderColor: "#742774",
      },
    ],
  };

  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const fetchData = async () => {
    let offset = `${(page - 1) * 5}`;

    let sentiment = sentimentFilterList
      .filter((v) => {
        if (v.isSelected === true) return v;
      })
      .map((v) => v.name);

    let source = monitorFilterLists
      .filter((v) => {
        if (v.isSelected === true) return v;
      })
      .map((v) => v.sid)
      .flat();

    // let source = [].concat.apply([], list);

    let std = moment(startDate).format("YYYY-MM-DD HH:mm:ss");
    let end = moment(endDate).format("YYYY-MM-DD HH:mm:ss");

    let { data, errors } = await RequestAPI(getDataMonitor, {
      keywords_id: currentKeyword.id,
      sources_filter: source,
      sentiment_filter: sentiment,
      offset: parseInt(offset),
      limit: 5,
      start_date: std,
      end_date: end,
    });

    if (data) {
      setMonitorData(data.getDataMonitor);
      let { data_mention } = data.getDataMonitor;
      let fb = data_mention[0].count;
      let tw = data_mention[1].count;
      let yt = data_mention[2].count;
      let ig = data_mention[3].count;
      let pt = data_mention[4].count;
      let sn = data_mention[5].count;
      let tn = data_mention[6].count;
      let dd = data_mention[7].count;
      let dn = data_mention[8].count;
      let tr = data_mention[9].count;
      let mc = data_mention[10].count;
      let mg = data_mention[11].count;
      let ks = data_mention[12].count;
      let all = data_mention[13].count;

      if (data.getDataMonitor.data_info.length) {
        setMentionCount([all, fb, tw, yt, ig, pt + sn + tn + dd, dn + tr + mc + mg + ks]);
        setCurrentLink(data.getDataMonitor.data_info[0].url);
      }
    }
  };

  const stableLoad = React.useCallback(fetchData, [
    currentKeyword,
    monitorFilterLists,
    sentimentFilterList,
    page,
    startDate,
    endDate,
  ]);

  React.useEffect(() => {
    // effect
    stableLoad();
    return () => {
      console.log("unmount");
      // resetCurrentDiffDate();
    };
  }, [stableLoad]);

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
              <div className="font-data">Your current keyword</div>
            </div>
            <div className="flex-title">
              <div
                className={currentDiffDate === 1 ? `btn-active-1` : `btn-active`}
                onClick={() => {
                  setEndDate(moment(Date.now()));
                  setStartDate(moment(Date.now()).subtract(1, "days"));
                  setCurrentDiffDate(1);
                }}
              >
                Day
              </div>
              <div
                className={currentDiffDate === 7 ? `btn-active-1` : `btn-active`}
                onClick={() => {
                  setEndDate(moment(Date.now()));
                  setStartDate(moment(Date.now()).subtract(7, "days"));
                  setCurrentDiffDate(7);
                }}
              >
                Week
              </div>
              <div
                className={currentDiffDate === 30 ? `btn-active-1` : `btn-active`}
                onClick={() => {
                  setEndDate(moment(Date.now()));
                  setStartDate(moment(Date.now()).subtract(1, "month"));
                  setCurrentDiffDate(30);
                }}
              >
                Month
              </div>
            </div>
            <div className="margin-date"></div>
            <div className="flex-title-1">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline1"
                    label="Start Date"
                    value={startDate}
                    maxDate={endDate}
                    onChange={(date) => handleStartDate(date)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <div className="margin-date"></div>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline2"
                    label="End Date"
                    value={endDate}
                    minDate={moment(startDate).add(1, "days")}
                    maxDate={new Date()}
                    onChange={(date) => handleEndDate(date)}
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
                      <span className="font-checkbook">{mentionCount[i]}</span>
                    </div>
                  );
                } else if (v.isSelected && v.id !== 0) {
                  return (
                    <div className={`checkbox checked`} key={i} onClick={() => handleSelect(v)}>
                      <i className={`${v.icon} icon-chechbook`}></i>
                      <span className="span-checkbook font-checkbook">{v.name}</span>
                      <span className="font-checkbook">{mentionCount[i]}</span>
                    </div>
                  );
                } else {
                  return (
                    <div className={`checkbox`} key={i} onClick={() => handleSelect(v)}>
                      <i className={`${v.icon} icon-chechbook`}></i>
                      <span className="span-checkbook font-checkbook">{v.name}</span>
                      <span className="font-checkbook">{mentionCount[i]}</span>
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
            </div>
          </div>

          <div className="container-monitor">
            <div className="box-monitor-1">
              <div className="block  bottom-socail">
                <div className="top-title">
                  <div className="margin-left flex-1 bold">Data Monitoring</div>
                </div>

                <div className="data-monitor">
                  {monitorData === null && (
                    <div className={"center"}>
                      <br />
                      <CircularProgress />
                      <p>กำลังโหลดข้อมูล ...</p>
                    </div>
                  )}
                  {monitorData !== null && !monitorData.data_info.length && (
                    <div className={"center"}>
                      <br />
                      <CircularProgress />
                      <p>กำลังโหลดข้อมูล ...</p>
                    </div>
                  )}
                  {monitorData !== null &&
                    monitorData.data_info.length &&
                    monitorData.data_info.map((v, i) => {
                      return (
                        <div
                          className="box-message-data-1"
                          key={i}
                          onClick={() => {
                            console.log("CLG : ", v.url);
                            setCurrentLink(v.url);
                          }}
                        >
                          <div className="flex-data">
                            <i className="fa fa-twitter icon-message-data"></i>
                            <div className="bold">
                              <div className="font-data-title">{v.title}</div>
                              <div className="font-data ">
                                <i className="fa fa-calendar icon-date"></i>
                                <span className="icon-date-1">
                                  {moment(parseInt(v.post_date)).format("DD-MM-YYYY")}
                                </span>
                                <div
                                  className={`${
                                    v.sentiment === "positive" ? "green" : v.sentiment === "negative" ? "red" : null
                                  } margin`}
                                >
                                  {v.sentiment}
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="font-data-title">{v.short_content}</span>
                        </div>
                      );
                    })}
                </div>

                {monitorData !== null && monitorData.data_info.length > 0 && (
                  <div className="pagination-center">
                    <Pagination
                      count={Math.ceil(monitorData.rows / 5)}
                      shape="rounded"
                      onChange={(e, p) => {
                        handleOnChangePage(p);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="box-monitor-2">
              {!currentLink.length && (
                <div className={"center"}>
                  <br />
                  <CircularProgress />
                  <p>กำลังโหลดข้อมูล ...</p>
                </div>
              )}
              {currentLink.length !== 0 && (
                <iframe
                  src={currentLink}
                  className="iframe"
                  frameBorder="0"
                  title="This is a unique title"
                  target="_blank"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
