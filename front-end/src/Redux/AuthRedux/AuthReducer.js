import {
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
} from "./ActionTypes";

export const initstate = {
  //   patientData: [],
  isLoading: false,
  isError: false,
  isUpdate: false,
};

const userReducer = (state = initstate, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case USER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        // patientData: payload,
        isLoading: false,
      };
    case USER_DATA_FAILURE:
      return {
        ...state,
      };
    case USER_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_POST_SUCCESS:
      return {
        ...state,
        isError: false,
      };
    case USER_POST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
