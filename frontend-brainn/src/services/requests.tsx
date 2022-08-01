import axios from "axios";
import { BaseURL } from "../constants/BaseURL";

export const findLotteries = () => {
  return axios
    .get(`${BaseURL}/loterias`)
    .then((res) => res.data)
    .catch((err) => console.log(err.response));
};
