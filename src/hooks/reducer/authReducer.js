import { authTypes } from "../../commons/types";

const initialState = {
  isLogin: false,
  personalInfo: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.login:
      return {
        ...state,
        isLogin: true,
        personalInfo: action.payload,
      };
    case authTypes.logout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
