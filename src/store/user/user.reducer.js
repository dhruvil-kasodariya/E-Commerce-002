import { USER_ACTION_TYPES } from "./user.type";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  currentUser: null,
  isLoding: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      toast.success("Sign in Success", {
        position: toast.POSITION.TOP_CENTER,
      });
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      toast.success("Sign Out Success", {
        position: toast.POSITION.TOP_CENTER,
      });
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      toast.error(payload.code, {
        position: toast.POSITION.TOP_CENTER,
      });
      return { ...state, error: payload };
    default:
      return state;
  }
};
