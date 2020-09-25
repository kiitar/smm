import React, { useEffect, useCallback } from "react";
import Pagination from "@material-ui/lab/Pagination";
// import Button from "../../components/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { addKeywordState, userState, fetchKeywordState } from "../../recoil/atoms";

import CircularProgress from "@material-ui/core/CircularProgress";
import ModalKeyword from "../../components/ModalKeyword";
import { RequestAPI } from "../../utils";
import { getKeywords, deleteKeywords } from "../../graphql/Keywords";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AddKeyword = () => {
  const [addKeyword, setAddKeyword] = useRecoilState(addKeywordState);
  const [fetchKeyword, setFetchKeyword] = useRecoilState(fetchKeywordState);
  const user = useRecoilValue(userState);

  // const notify = () => {
  //   toast.success("บันทึกสำเร็จ !", { position: toast.POSITION.TOP_RIGHT });
  // };

  const handleOnChangePage = (p) => {
    setAddKeyword({ ...addKeyword, page: p });
  };

  const deleteKeyword = async (id) => {
    setAddKeyword({ ...addKeyword, loading: true });
    let { data, errors } = await RequestAPI(deleteKeywords, {
      keywords_id: id,
      users_id: user.userId,
      project_id: user.projectId,
    });
    // console.log(`errors`, errors);
    if (data) {
      setFetchKeyword(!fetchKeyword);
      setAddKeyword({ ...addKeyword, loading: false });
    }
  };

  const fetchData = async () => {
    let offset = `${addKeyword.page - 1}0`;
    let { data, errors } = await RequestAPI(getKeywords, {
      users_id: user.userId,
      offset: parseInt(offset),
      limit: addKeyword.limit,
    });
    // console.log(`errors`, errors);
    if (data) {
      setAddKeyword({ ...addKeyword, rows: data.getKeywords.rows, keywordsData: [...data.getKeywords.data] });
    }
  };

  const stableLoad = useCallback(fetchData, [addKeyword.loading, addKeyword.page]);

  useEffect(() => {
    stableLoad();
  }, [stableLoad]);

  return (
    <div className="container-main">
      <ToastContainer />
      <div>{addKeyword.modalCreate && <ModalKeyword />}</div>
      <div className="page-main">
        <div className="padding-page">
          <div className="top-title">
            <div className="margin-left flex-1 bold">Create Keyword</div>
            <div>
              <button
                className="btn-create-keyword"
                onClick={async () => {
                  // await notify();
                  await setAddKeyword({ ...addKeyword, modalCreate: true });
                }}
              >
                + Create Keyword
              </button>
            </div>
          </div>

          <div className="body-socail">
            {addKeyword.loading && (
              <div className="center">
                <CircularProgress />
              </div>
            )}

            {addKeyword.loading !== true && addKeyword.keywordsData.length < 1 && (
              <p className="center">ยังไม่มีข้อมูล</p>
            )}
            {addKeyword.keywordsData.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th className="center">#</th>
                    <th>Keyword</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th className="center">Tool</th>
                  </tr>
                </thead>
                <tbody>
                  {addKeyword.keywordsData.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td className="center">{parseInt(`${addKeyword.page - 1}${i + 1}`)}</td>
                        <td>{v.keyword}</td>
                        <td>{v.users.username}</td>
                        <td>{v.created_at}</td>
                        <td className="center">
                          {/* 
                            <Button
                              name="Delete"
                              styleBtn="delete"
                              onClick={() => {
                                deleteKeyword(v.id);
                              }}
                            /> */}
                          <div className="dropdown">
                            <button className="dropbtn">
                              ทำรายการ <i className="	fa fa-angle-double-right"></i>
                            </button>
                            <div className="dropdown-content">
                              <a href="#">ดูรายละเอียด </a>
                              <a href="#">แก้ไข</a>
                              <a href="#">ลบ</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          {addKeyword.rows !== null && (
            <div className="block center bottom-socail">
              <div className="pagination-center">
                <Pagination
                  count={Math.ceil(addKeyword.rows / addKeyword.limit)}
                  shape="rounded"
                  onChange={(e, p) => {
                    handleOnChangePage(p);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddKeyword;
