import axios from "axios";
import { BACKEND } from "./Constants";
export const getAllUser = async (role, successCallBack) => {
  try {
    const { data } = await axios.get(`${BACKEND}/user/${role}`);
    successCallBack({ success: data.success, user: data.users });
  } catch (e) {
    console.log(e);
  }
};
