import axios from "axios";
import { BaseURL } from "../constants/BaseURL";

export const findContestResults = (id: string, setContestInfo: Function): Promise<void> => {
  return axios
    .get(`${BaseURL}/concursos/${id}`)
    .then((res) => {
        setContestInfo(res.data)
    })
    .catch((err) => {
      console.log(err.response);
    });
};
