import {
  PATIENT_DATA_REQUEST,
  PATIENT_DATA_SUCCESS,
  PATIENT_DATA_FAILURE,
  DOCTOR_DATA_REQUEST,
  DOCTOR_DATA_SUCCESS,
  DOCTOR_DATA_FAILURE,
  LOGIN_DATA_REQUEST,
  LOGIN_DATA_SUCCESS,
  LOGIN_DATA_FAILURE,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE,
} from "./ActionTypes";

export const initstate = {
  patientData: [],
  isLoading: false,
  isError: false,
  isUpdate: false,
};

const patientReducer = (state = initstate, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case PATIENT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PATIENT_DATA_SUCCESS:
      return {
        ...state,
        patientData: payload,
        isLoading: false,
      };
    case PATIENT_DATA_FAILURE:
      return {
        ...state,
      };
    case DOCTOR_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DOCTOR_DATA_SUCCESS:
      return {
        ...state,
        isError: false,
      };
    case DOCTOR_DATA_FAILURE:
      return {
        ...state,
      };
    case LOGIN_DATA_REQUEST:
      return {
        ...state,
      };
    case LOGIN_DATA_SUCCESS:
      return {
        ...state,
        isError: true,
      };
    case LOGIN_DATA_FAILURE:
      return {
        ...state,
      };
    case UPDATE_DATA_REQUEST:
      return {
        ...state,
      };
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        isUpdate: true,
      };
    case UPDATE_DATA_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default patientReducer;
