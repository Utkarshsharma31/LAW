// import ACTION from "./Action"
import { SAVE_USER_DETAIL } from "./Action";

const initialState = {
  user: null,
};

const rootReducer = (state = initialState, Action) => {
  switch (Action.type) {
    case SAVE_USER_DETAIL:
      return { ...state, user: Action.payload };
      break;
    default:
      return state;
  }
};
export default rootReducer;
