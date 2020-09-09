import CryptoJS from "crypto-js";
import axios from "axios";
import { useLocalStorage } from ".";

export const RequestAPI = (gql, variables) => {
  let variableHeader = JSON.stringify(variables).replace(/\s+/g, "");
  let timestamp = Date.now();
  // let strToSign = `${timestamp}POST${process.env.REACT_APP_API_URL}/${variableHeader}`;
  let strToSign = `${timestamp}POST${process.env.REACT_APP_API_URL}${variableHeader}`;
  let hat_signature = CryptoJS.HmacSHA512(strToSign, process.env.REACT_APP_API_SIGNATURE).toString(CryptoJS.enc.Hex);
  let token = useLocalStorage.getItem("token");

  const data = JSON.stringify({
    query: gql,
    variables: variables,
  });

  const config = {
    method: "post",
    url: process.env.REACT_APP_API_URL,
    headers: {
      "smm-access-key": `${process.env.REACT_APP_API_KEY}`,
      "smm-access-timestamp": `${timestamp}`,
      "smm-access-sign": `${hat_signature}`,
      "smm-access-token": token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const requestApi = async () => {
    const response = await axios(config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { errors: [{ message: err.message }] };
      });
    return response;
  };

  return requestApi();
};

export default RequestAPI;
