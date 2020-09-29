import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactToPrint from "react-to-print";
import Pagination from "@material-ui/lab/Pagination";
// import { Line } from "react-chartjs-2";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { getSummary } from "../../graphql/Summary";
import { currentKeywordState, currentDiffDateState } from "../../recoil/atoms";
import { RequestAPI } from "../../utils";
import { useRecoilState, useRecoilValue } from "recoil";
import moment from "moment";
// import ReactWordcloud from "react-wordcloud";
import WordCloud from "../../components/WordCloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import MentionChart from "../../components/MentionChart";
import SentimentChart from "../../components/SentimentChart";
import Report from "../../components/Report";
import Button from "../../components/Button";

const Summary = () => {
  const componentRef = useRef();
  // Recoil State

  const currentKeyword = useRecoilValue(currentKeywordState);
  // console.log(`Summary -> currentKeyword`, currentKeyword);
  const [currentDiffDate, setCurrentDiffDate] = useRecoilState(currentDiffDateState);
  // Recoil State

  // React useState
  const [startDate, setStartDate] = useState(moment(Date.now()).subtract(1, "month"));
  const [endDate, setEndDate] = useState(moment(Date.now()));
  const [page, setPage] = useState(1);
  const [currentMenu, setCurrentMenu] = useState(1);
  // const [graphSentiment, setGraphSentiment] = useState(null);
  // const [graphSources, setGraphSources] = useState(null);
  const [mostPopularMention, setMostPopularMention] = useState(null);
  console.log(`Summary -> mostPopularMention`, mostPopularMention);
  const [mostPopularDate, setMostPopularDate] = useState(null);
  console.log(`Summary -> mostPopularDate`, mostPopularDate);
  const [mostSite, setMostSite] = useState(null);
  const [sources, setSources] = useState([]);
  const [stats, setStats] = useState([]);
  const [summaryState, setSummaryState] = useState(null);
  const [wordCloud, setWordCloud] = useState(null);
  const [update, setUpdate] = useState(null);
  const [update2, setUpdate2] = useState(null);
  const [mentionGraph, setMentionGraph] = useState(null);
  const [sentimentGraph, setSentimentGraph] = useState(null);

  // React useState

  const handleEndDate = (date) => {
    setCurrentDiffDate(null);
    setEndDate(date);
  };
  const handleStartDate = (date) => {
    setCurrentDiffDate(null);
    setStartDate(date);
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

  const fetchData = async () => {
    let std = moment(startDate).format("YYYY-MM-DD HH:mm:ss");
    let end = moment(endDate).format("YYYY-MM-DD HH:mm:ss");

    let { data, errors } = await RequestAPI(getSummary, {
      keywords_id: currentKeyword.id,
      start_date: std,
      end_date: end,
    });
    console.log(`fetchData -> errors`, errors);
    if (data) {
      let {
        graph_sentiment,
        graph_sources,
        most_popular,
        most_site,
        sources,
        stats,
        summary,
        word_cloud,
      } = data.getSummary;
      setSummaryState(summary);
      setSources(sources);
      setStats(stats);
      setMostSite(most_site);
      setWordCloud(word_cloud);
      setMostPopularMention(most_popular.sources_reach);
      setMostPopularDate(most_popular.sources_date);
      setMentionGraph(graph_sources);
      setSentimentGraph(graph_sentiment);
      setUpdate(true);
      setUpdate2(true);
    }
  };

  const stableLoad = useCallback(fetchData, [currentKeyword, page, startDate, endDate]);

  useEffect(() => {
    stableLoad();
  }, [stableLoad]);

  return (
    <>
      <div style={{ overflow: "hidden", height: 0 }}>
        <div style={{ margin: 0, padding: 0 }} ref={componentRef}>
          {summaryState !== null &&
            mostPopularMention !== null &&
            mostPopularDate !== null &&
            mentionGraph !== null &&
            wordCloud !== null &&
            mostSite !== null && (
              <Report
                keyword={currentKeyword.keyword}
                startDate={startDate}
                endDate={endDate}
                summaryState={summaryState}
                mostPopularMention={mostPopularMention}
                mostPopularDate={mostPopularDate}
                mentionGraph={mentionGraph}
                redraw={update}
                words={wordCloud}
                mostSite={mostSite}
              />
            )}
        </div>
      </div>

      <div className="container-main">
        <div className="">
          <div className="">
            <div className="top-title">
              <div className="margin-left flex-1 bold">Summary</div>
              <ReactToPrint trigger={() => <Button name={"PRINT PDF"} />} content={() => componentRef.current} />
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

            <div className="box-summery">
              <div className="flex-1 box-detail">
                <div>
                  <button
                    className={currentMenu === 1 ? "btn-top active-border-bottom" : "btn-top "}
                    onClick={() => {
                      setPage(1);
                      setCurrentMenu(1);
                    }}
                  >
                    10 most popular mentions
                  </button>
                  <button
                    className={currentMenu === 2 ? "btn-top active-border-bottom" : "btn-top "}
                    onClick={() => {
                      setPage(1);
                      setCurrentMenu(2);
                    }}
                  >
                    10 Recent mentions
                  </button>
                  <div className="line-bottom"> </div>
                </div>

                {/* <div className="top-title">
                <div className="flex-1 bold">The most popular mentions</div>
              </div> */}
                <div>
                  {mostPopularDate !== null &&
                    currentMenu === 2 &&
                    mostPopularDate.map((v, i) => {
                      if (i >= (page - 1) * 4 && i < page * 4) {
                        return (
                          <div className="box-message-data" key={i}>
                            <div className="flex-data">
                              <i className="fa fa-twitter icon-message-data"></i>
                              <div className="bold">
                                <div className="font-data-title">{`${v.title}`}</div>
                                <div className="font-data ">
                                  <i className="fa fa-calendar icon-date"></i>
                                  <span className="icon-date-1">{`${moment(v.date).format("DD-MM-YYYY")}`}</span>
                                  <div className="green margin">{`${v.sources.length > 0 ? v.sources : ""}`}</div>
                                </div>
                              </div>
                            </div>
                            <span className="font-data-title">{`${v.short_content}`}</span>
                          </div>
                        );
                      }
                    })}
                  {mostPopularMention !== null &&
                    currentMenu === 1 &&
                    mostPopularMention.map((v, i) => {
                      if (i >= (page - 1) * 4 && i < page * 4) {
                        return (
                          <div className="box-message-data" key={i}>
                            <div className="flex-data">
                              <i className="fa fa-twitter icon-message-data"></i>
                              <div className="bold">
                                <div className="font-data-title">{`${v.title}`}</div>
                                <div className="font-data ">
                                  <i className="fa fa-calendar icon-date"></i>
                                  <span className="icon-date-1">{`${moment(v.date).format("DD-MM-YYYY")}`}</span>
                                  <div className="green margin">{`${v.sources.length > 0 ? v.sources : ""}`}</div>
                                </div>
                              </div>
                            </div>
                            <span className="font-data-title">{`${v.short_content}`}</span>
                          </div>
                        );
                      }
                    })}

                  {mostPopularMention !== null && currentMenu === 1 && (
                    <div className="block center bottom-socail">
                      <div className="pagination-center">
                        <Pagination
                          count={Math.ceil(mostPopularMention.length / 4)}
                          shape="rounded"
                          onChange={(e, p) => {
                            setPage(p);
                          }}
                        />
                      </div>
                    </div>
                  )}
                  {mostPopularDate !== null && currentMenu === 2 && (
                    <div className="block center bottom-socail">
                      <div className="pagination-center">
                        <Pagination
                          count={Math.ceil(mostPopularDate.length / 4)}
                          shape="rounded"
                          onChange={(e, p) => {
                            setPage(p);
                          }}
                        />
                      </div>
                    </div>
                  )}
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
                    {summaryState !== null && summaryState !== undefined && (
                      <div style={{ textAlign: "center" }}>{`${summaryState[0].count}`}</div>
                    )}
                    {(summaryState === null || summaryState === undefined) && (
                      <div style={{ textAlign: "center" }}>{"0"}</div>
                    )}
                    {/* <div className="message-summary green">+35 (+100%)</div> */}
                  </div>
                  <div className="flex-1">
                    <div className="title-summary">REACH</div>
                    {summaryState !== null && summaryState !== undefined && (
                      <div style={{ textAlign: "center" }}>{`${summaryState[1].count}`}</div>
                    )}
                    {(summaryState === null || summaryState === undefined) && (
                      <div style={{ textAlign: "center" }}>{"0"}</div>
                    )}
                    {/* <div className="message-summary">0 (100%)</div> */}
                  </div>
                  <div className="flex-1">
                    <div className="title-summary">NEGATIVE</div>
                    {summaryState !== null && <div style={{ textAlign: "center" }}>{`${summaryState[2].count}`}</div>}
                    {summaryState == null && <div style={{ textAlign: "center" }}>{"0"}</div>}
                    {/* <div className="message-summary">0 (100%)</div> */}
                  </div>
                  <div className="flex-1">
                    <div className="title-summary">NEUTRAL</div>
                    {summaryState !== null && summaryState !== undefined && (
                      <div style={{ textAlign: "center" }}>{`${summaryState[3].count}`}</div>
                    )}
                    {(summaryState === null || summaryState === undefined) && (
                      <div style={{ textAlign: "center" }}>{"0"}</div>
                    )}
                    {/* <div className="message-summary green">+6 (+100%)</div> */}
                  </div>
                  <div className="flex-1">
                    <div className="title-summary">POSITIVE</div>
                    {summaryState !== null && summaryState !== undefined && (
                      <div style={{ textAlign: "center" }}>{`${summaryState[4].count}`}</div>
                    )}
                    {(summaryState === null || summaryState === undefined) && (
                      <div style={{ textAlign: "center" }}>{"0"}</div>
                    )}
                    {/* <div className="message-summary red">+8 (+100%)</div> */}
                  </div>
                </div>

                <div className="box-chart-summary">
                  <div className="top-title">
                    <div className="flex-1 bold">Mentions</div>
                  </div>
                  {/* <Line
                  data={data}
                  width={100}
                  height={50}
                  options={{ responsive: true, maintainAspectRatio: false }}
                  className="chart-data"
                /> */}
                  {mentionGraph !== null && (
                    <div className="chart-data">
                      <MentionChart labels={mentionGraph.labels} datasets={mentionGraph.datasets} redraw={update} />
                    </div>
                  )}
                </div>

                <div className="box-chart-summary">
                  <div className="top-title">
                    <div className="flex-1 bold">Sentiments</div>
                  </div>
                  {/* <Line
                  data={data}
                  width={100}
                  height={50}
                  options={{ responsive: true, maintainAspectRatio: false }}
                  className="chart-data"
                /> */}
                  {sentimentGraph !== null && (
                    <div className="chart-data">
                      <SentimentChart
                        labels={sentimentGraph.labels}
                        datasets={sentimentGraph.datasets}
                        redraw={update2}
                      />
                    </div>
                  )}
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
                    <tbody>
                      {mostSite !== null &&
                        mostSite.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td className="td-line ">{`${v.site}`}</td>
                              <td className="td-line center">
                                <div className="div-flex-center">
                                  <i className="fa fa-comments-o"></i> {`${v.mentions}`}
                                </div>
                                <div className="message-summary">MENTIONS</div>
                              </td>
                              <td className="td-line center">
                                <div className="div-flex-center">
                                  <i className="fa fa-eye"></i> {`${v.reach}`}
                                </div>
                                <div className="message-summary">VISITS</div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
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
                    {stats.length > 0 && (
                      <tbody>
                        {stats.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td className="td-line ">
                                <div>
                                  <i className="fa fa-tv"></i> {`${v.mentions}`}
                                </div>
                                <div className="message-summary">{v.site}</div>
                              </td>
                              <td className="td-line "></td>
                            </tr>
                          );
                        })}
                      </tbody>
                    )}
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
                    <tbody>
                      {sources.length > 0 &&
                        sources.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td className="td-line ">
                                <div>
                                  {v.sources === "community" ? (
                                    <i className="fa fa-share-alt"></i>
                                  ) : v.sources === "news" ? (
                                    <i className="fa fa-newspaper-o"></i>
                                  ) : (
                                    <i className="fa fa-comments-o"></i>
                                  )}{" "}
                                  {}
                                  {`${v.count}`}
                                </div>
                                <div className="message-summary">{`${v.sources}`}</div>
                              </td>
                              <td className="td-line"></td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="box-keyword-2">
              Word Cloud
              <div style={{ width: "100%" }}>{wordCloud !== null && <WordCloud words={wordCloud} />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
