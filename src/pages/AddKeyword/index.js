import React, { useEffect, useCallback, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
// import Button from "../../components/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { addKeywordState, userState, fetchKeywordState, modalConfirmState } from "../../recoil/atoms";

import CircularProgress from "@material-ui/core/CircularProgress";
import ModalKeyword from "../../components/ModalKeyword";
import { RequestAPI } from "../../utils";
import { getKeywords, deleteKeywords } from "../../graphql/Keywords";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Modal as Modals } from "../../components/Modal";

const AddKeyword = () => {
  const [addKeyword, setAddKeyword] = useRecoilState(addKeywordState);
  const [fetchKeyword, setFetchKeyword] = useRecoilState(fetchKeywordState);
  const user = useRecoilValue(userState);
  const [modalConfirm, setModalConfirm] = useRecoilState(modalConfirmState);
  const [deleteId, setDeleteId] = useState(null);
  // const [view, setView] = useState(false);

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
      toast.success("บันทึกสำเร็จ !", { position: toast.POSITION.TOP_RIGHT });
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

  const onClose = () => {
    setModalConfirm(false);
  };

  const onSubmit = () => {
    setModalConfirm(false);
    deleteKeyword(deleteId);
  };

  const handleSubmit = (id) => {
    setDeleteId(id);
    setModalConfirm(true);
  };

  return (
    <div className="container-main">
      <ToastContainer />
      {modalConfirm && <Modals text={"ยืนยันการลบข้อมูล"} onClose={onClose} onSubmit={onSubmit} />}
      {/* <div>{addKeyword.modalCreate && <ModalKeyword action={"create"} />}</div> */}
      {addKeyword.modalCreate && <ModalKeyword action={"create"} />}
      {addKeyword.modalView && <ModalKeyword action={"view"} />}
      {addKeyword.modalEdit && <ModalKeyword action={"edit"} />}
      <div className="page-main">
        <div className="padding-page">
          <div className="top-title">
            <div className="margin-left flex-1 bold">Create Keyword</div>
            <div>
              <button
                className="btn-create-keyword"
                onClick={async () => {
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
                    console.log(`v`, v);
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
                              <a
                                onClick={() => {
                                  setAddKeyword({
                                    ...addKeyword,
                                    keywordInput: v.keyword,
                                    includeWord: v.require_keyword,
                                    excludeWord: v.exclude_keyword,
                                    modalView: true,
                                  });
                                }}
                              >
                                ดูรายละเอียด{" "}
                              </a>
                              <a
                                onClick={() => {
                                  setAddKeyword({
                                    ...addKeyword,
                                    keywordInput: v.keyword,
                                    includeWord: v.require_keyword,
                                    excludeWord: v.exclude_keyword,
                                    modalEdit: true,
                                    editKeywordId: v.id,
                                    editProjectId: v.project_id,
                                  });
                                }}
                              >
                                แก้ไข
                              </a>
                              <a
                                onClick={() => {
                                  handleSubmit(v.id);
                                }}
                              >
                                ลบ
                              </a>
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
