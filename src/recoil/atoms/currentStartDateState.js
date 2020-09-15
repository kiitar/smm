//currentStartDateState.js
import { atom } from "recoil";
import moment from "moment";

export const currentStartDateState = atom({
  key: "currentStartDateState",
  default: moment(Date.now()),
});
