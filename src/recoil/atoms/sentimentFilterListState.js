import { atom } from "recoil";

export const sentimentFilterListState = atom({
  key: "sentimentFilterListState",
  default: [
    { id: 1, name: "Negative", isSelected: true },
    { id: 0, name: "Nautral", isSelected: true },
    { id: 2, name: "Positive", isSelected: true },
  ],
});
