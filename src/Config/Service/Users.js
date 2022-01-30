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

export const updateUserProfile = async (formData, successCallBack) => {
  try {
    const { data } = await axios.patch(`${BACKEND}/user/update`, formData);
    console.log(data, "<<<<");
    successCallBack(data);
  } catch (e) {
    console.log(e);
  }
};


// export const getSearchedUsers=async (role,successCallBack)=>{
//   try{
//     const {data}=await axios.get(`${BACKEND}/user/`)
//   }catch(e){console.log(e)}
// }