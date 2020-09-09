import React from "react";
import Button from "../Button";
import ChipInput from "material-ui-chip-input";
import "./style.css";
// import { useRecoilState, useResetRecoilState } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { addKeywordState, userState } from "../../recoil/atoms";
import { RequestAPI } from "../../utils";
import { createKeywords } from "../../graphql/Keywords";

const ModalKeyword = () => {
  const user = useRecoilValue(userState);
  const [addKeyword, setAddKeyword] = useRecoilState(addKeywordState);

  const handleInputKeyword = (e) => {
    setAddKeyword({ ...addKeyword, keywordInput: e.target.value });
  };

  const handleAddInclude = (text) => {
    console.log(text);
    setAddKeyword({ ...addKeyword, includeWord: [...addKeyword.includeWord, text] });
  };
  const handleDeleteInclude = async (text, i) => {
    let arr = [...addKeyword.includeWord];
    arr.splice(i, 1);
    setAddKeyword({ ...addKeyword, includeWord: [...arr] });
  };

  const handleAddExclude = (text) => {
    console.log(text);
    setAddKeyword({ ...addKeyword, excludeWord: [...addKeyword.excludeWord, text] });
  };
  const handleDeleteExclude = async (text, i) => {
    let arr = [...addKeyword.excludeWord];
    arr.splice(i, 1);
    setAddKeyword({ ...addKeyword, excludeWord: [...arr] });
  };

  const handleCreateKeyword = async () => {
    console.log("create");
    if (!addKeyword.keywordInput.length) {
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
    }
    console.log(`handleCreateKeyword -> data`, data);
    console.log(`handleCreateKeyword -> errors`, errors);
  };

  return (
    <div className="modal">
      <div className="container-create">
        <div>
          <div>Keyword</div>
          <div className="flex-create">
            <textarea
              className="text-area"
              placeholder="เพิ่ม Keyword"
              maxlength="50"
              onChange={(e) => handleInputKeyword(e)}
            />
            <em>{`${addKeyword.keywordInput.length}/50`}</em>
          </div>
          <div style={{ margin: "20px 0" }} />
        </div>
        <div>include Word</div>
        <ChipInput
          value={addKeyword.includeWord}
          onAdd={(chip) => handleAddInclude(chip)}
          onDelete={(chip, index) => handleDeleteInclude(chip, index)}
        />
        <div style={{ margin: "20px 0" }} />
        <div>exclude Word</div>
        <ChipInput
          value={addKeyword.excludeWord}
          onAdd={(chip) => handleAddExclude(chip)}
          onDelete={(chip, index) => handleDeleteExclude(chip, index)}
        />
        <div style={{ margin: "20px 0" }} />
        {/* <div style={{ margin: "100px 0" }}></div> */}
        {addKeyword.errorMessage !== "" && (
          <p style={{ color: "orange" }}>{`* Warning ! ${addKeyword.errorMessage} `}</p>
        )}
        <div className="flex center">
          <div className="padding-btn">
            <Button
              name="Training"
              styleBtn="create"
              onClick={() => {
                handleCreateKeyword();
              }}
            />
          </div>

          <div className="padding-btn">
            <Button
              name="Close"
              styleBtn="close"
              onClick={() => {
                setAddKeyword({
                  ...addKeyword,
                  modalCreate: false,
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
