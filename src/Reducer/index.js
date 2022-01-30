// import ACTION from "./Action"
import { SAVE_USER_DETAIL, IS_USER_LOGGED_IN, ROLE_OF_USER } from "./Action";

const initialState = {
  user: null,
  role_of_user: null,
  is_user_logged_in: false,
};

const rootReducer = (state = initialState, Action) => {
  switch (Action.type) {
    case SAVE_USER_DETAIL:
      console.log(Action.payload, "<<<< saving this in reducer");
      return { ...state, user: Action.payload };
      break;
    case IS_USER_LOGGED_IN:
      return { ...state, is_user_logged_in: Action.payload };
      break;
    case ROLE_OF_USER:
      return { ...state, role_of_user: Action.payload };
      break;
    default:
      return state;
  }
};
export default rootReducer;
