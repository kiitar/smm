import { selector } from "recoil";
import { userState, addKeywordState } from "../atoms";
import { RequestAPI } from "../../utils";
import { getKeywords } from "../../graphql/Keywords";

export const addKeywordSelector = selector({
  key: "addKeywordSelector",
  get: async ({ get }) => {
    let user = get(userState);
    let addKeyword = get(addKeywordState);
    const { data, errors } = await RequestAPI(getKeywords, {
      users_id: user.userId,
      offset: addKeyword.offset,
      limit: addKeyword.limit,
    });
    console.log(`errors`, errors);
    console.log(`data`, data);
    return data;
  },
});

// function CurrentUserInfo() {
//   const userName = useRecoilValue(currentUserNameQuery);
//   return <div>{userName}</div>;
// }
