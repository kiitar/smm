import { atom } from "recoil";

export const sentimentFilterListState = atom({
  key: "sentimentFilterListState",
  default: [
    { id: 1, name: "negative", isSelected: true },
    { id: 0, name: "neutral", isSelected: true },
    { id: 2, name: "positive", isSelected: true },
  ],
});
