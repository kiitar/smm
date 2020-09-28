import React, { useState } from "react";
import Button from "../Button";
import ChipInput from "material-ui-chip-input";
import "./style.css";
// import { useRecoilState, useResetRecoilState } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { addKeywordState, userState, fetchKeywordState, modalConfirmState } from "../../recoil/atoms";
import { RequestAPI } from "../../utils";
import { createKeywords } from "../../graphql/Keywords";
import { Modal as Modals } from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ModalKeyword = ({ action }) => {
  const user = useRecoilValue(userState);
  const [addKeyword, setAddKeyword] = useRecoilState(addKeywordState);
  const [fetchKeyword, setFetchKeyword] = useRecoilState(fetchKeywordState);
  const [modalConfirm, setModalConfirm] = useRecoilState(modalConfirmState);
  // const [confirm, setConfirm] = useState(false);
  // const [modal, setModal] = useState(false);

  const notify = () => {
    toast.success("บันทึกสำเร็จ !", { position: toast.POSITION.TOP_RIGHT });
  };

  const warning = () => {
    toast.error("กรุณากรอกข้อมูล Keyword !", { position: toast.POSITION.TOP_RIGHT });
  };

  const handleInputKeyword = (e) => {
    setAddKeyword({ ...addKeyword, keywordInput: e.target.value });
  };

  const handleAddInclude = (text) => {
    // console.log(text);
    setAddKeyword({ ...addKeyword, includeWord: [...addKeyword.includeWord, text] });
  };
  const handleDeleteInclude = async (text, i) => {
    let arr = [...addKeyword.includeWord];
    arr.splice(i, 1);
    setAddKeyword({ ...addKeyword, includeWord: [...arr] });
  };

  const handleAddExclude = (text) => {
    // console.log(text);
    setAddKeyword({ ...addKeyword, excludeWord: [...addKeyword.excludeWord, text] });
  };
  const handleDeleteExclude = async (text, i) => {
    let arr = [...addKeyword.excludeWord];
    arr.splice(i, 1);
    setAddKeyword({ ...addKeyword, excludeWord: [...arr] });
  };

  const handleCreateKeyword = async () => {
    // console.log("create");
    if (!addKeyword.keywordInput.length) {
      warning();
      return;
    }

    setAddKeyword({
      ...addKeyword,
      loading: true,
    });

    let { data, errors } = await RequestAPI(createKeywords, {
      users_id: user.userId,
      project_id: user.projectId,
      keywords: [
        {
          keyword: addKeyword.keywordInput,
          require_keyword: addKeyword.includeWord,
          exclude_keyword: addKeyword.excludeWord,
        },
      ],
    });
    if (data) {
      setAddKeyword({
        ...addKeyword,
        loading: false,
        modalCreate: false,
        includeWord: [],
        excludeWord: [],
        keywordInput: "",
      });
      notify();
      setFetchKeyword(!fetchKeyword);
    }
    // console.log(`handleCreateKeyword -> data`, data);
    console.log(`handleCreateKeyword -> errors`, errors);
  };

  const onClose = () => {
    setModalConfirm(false);
  };

  const onSubmit = () => {
    setModalConfirm(false);
    handleCreateKeyword();
  };

  const handleSubmit = () => {
    // console.log("submit");

    // setWarningMessage("");
    setModalConfirm(true);
  };

  return (
    <div className="modal">
      <div className="container-create">
        {/* <ToastContainer /> */}
        {modalConfirm && <Modals onClose={onClose} onSubmit={onSubmit} />}
        <div>
          <div>Keyword</div>
          <div className="flex-create">
            {action === "view" ? (
              <textarea
                className="text-area"
                placeholder="เพิ่ม Keyword"
                maxlength="50"
                value={addKeyword.keywordInput}
                onChange={(e) => handleInputKeyword(e)}
                disabled
              />
            ) : (
              <textarea
                className="text-area"
                placeholder="เพิ่ม Keyword"
                maxlength="50"
                value={addKeyword.keywordInput}
                onChange={(e) => handleInputKeyword(e)}
              />
            )}

            <em>{`${addKeyword.keywordInput.length}/50`}</em>
          </div>
          <div style={{ margin: "20px 0" }} />
        </div>
        <div>include Word</div>
        {action === "view" ? (
          <ChipInput
            value={addKeyword.includeWord}
            onAdd={(chip) => handleAddInclude(chip)}
            onDelete={(chip, index) => handleDeleteInclude(chip, index)}
            disabled
          />
        ) : (
          <ChipInput
            value={addKeyword.includeWord}
            onAdd={(chip) => handleAddInclude(chip)}
            onDelete={(chip, index) => handleDeleteInclude(chip, index)}
          />
        )}

        <div style={{ margin: "20px 0" }} />
        <div>exclude Word</div>
        {action === "view" ? (
          <ChipInput
            value={addKeyword.excludeWord}
            onAdd={(chip) => handleAddExclude(chip)}
            onDelete={(chip, index) => handleDeleteExclude(chip, index)}
            disabled
          />
        ) : (
          <ChipInput
            value={addKeyword.excludeWord}
            onAdd={(chip) => handleAddExclude(chip)}
            onDelete={(chip, index) => handleDeleteExclude(chip, index)}
          />
        )}

        <div style={{ margin: "20px 0" }} />
        {addKeyword.errorMessage !== "" && (
          <p style={{ color: "orange" }}>{`* Warning ! ${addKeyword.errorMessage} `}</p>
        )}
        <div className="flex center">
          {action === "create" && (
            <div className="padding-btn">
              <Button
                name="Create Keyword"
                styleBtn="create"
                onClick={() => {
                  handleSubmit();
                }}
              />
            </div>
          )}

          <div className="padding-btn">
            <Button
              name="Close"
              styleBtn="close"
              onClick={() => {
                setAddKeyword({
                  ...addKeyword,
                  modalCreate: false,
                  modalView: false,
                  includeWord: [],
                  excludeWord: [],
                  keywordInput: "",
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalKeyword;
