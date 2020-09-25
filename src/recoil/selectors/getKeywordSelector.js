import { selector } from "recoil";
import { userState, fetchKeywordState } from "../atoms";
import { RequestAPI } from "../../utils";
import { getKeywords } from "../../graphql/Keywords";

export const getKeywordSelector = selector({
  key: "getKeywordSelector",
  get: async ({ get }) => {
    let user = get(userState);
    let fetch = get(fetchKeywordState);
    console.log(`fetch`, fetch);
    let { data, errors } = await RequestAPI(getKeywords, {
      users_id: user.userId,
      offset: 0,
      limit: 100,
    });
    console.log(`errors`, errors);
    console.log(`data`, data);
    return data.getKeywords.data;
  },
});
