import { atom } from "recoil";

export const monitorFilterList = atom({
  key: "monitorFilterList",
  default: [
    { id: 0, name: "All", isSelected: true, icon: "fa fa-hdd-o" },
    { id: 1, name: "Facebook", isSelected: false, icon: "fa fa-facebook-square" },
    { id: 2, name: "Twitter", isSelected: false, icon: "fa fa-twitter" },
    { id: 3, name: "Instragram", isSelected: false, icon: "fa fa-instagram" },
    { id: 4, name: "Youtube", isSelected: false, icon: "fa fa-youtube-play" },
    { id: 5, name: "Website", isSelected: false, icon: "fa fa-chrome" },
    { id: 6, name: "News", isSelected: false, icon: "fa fa-newspaper-o" },
  ],
});
