import axios from "axios";
import { BACKEND } from "./Constants";
export const match_token = async (token, successCallBack) => {
  try {
    const { data } = await axios.post(`${BACKEND}/login/token`, { token });
    // console.log(data, "token");
    successCallBack(data);
  } catch (e) {
    console.log(e);
  }
};


