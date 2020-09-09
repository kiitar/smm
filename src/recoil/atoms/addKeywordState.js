import { atom } from "recoil";

export const addKeywordState = atom({
  key: "addKeywordState",
  default: {
    modalCreate: false,
    keywordInput: "",
    includeWord: [],
    excludeWord: [],
    errorMessage: "",
    page: 1,
    count: null,
    offset: 0,
    limit: 10,
    rows: null,
    keywordsData: [],
    loading: false,
  },
});
