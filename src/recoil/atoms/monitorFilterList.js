import { atom } from "recoil";

export const monitorFilterList = atom({
  key: "monitorFilterList",
  default: [
    { id: 0, sid: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], name: "All", isSelected: true, icon: "fa fa-hdd-o" },
    { id: 1, sid: [1], name: "Facebook", isSelected: false, icon: "fa fa-facebook-square" },
    { id: 2, sid: [2], name: "Twitter", isSelected: false, icon: "fa fa-twitter" },
    { id: 3, sid: [3], name: "Youtube", isSelected: false, icon: "fa fa-youtube-play" },
    { id: 4, sid: [4], name: "Instragram", isSelected: false, icon: "fa fa-instagram" },
    { id: 5, sid: [5, 6, 7, 8], name: "Website", isSelected: false, icon: "fa fa-chrome" },
    { id: 6, sid: [9, 10, 11, 12, 13], name: "News", isSelected: false, icon: "fa fa-newspaper-o" },
  ],
});
