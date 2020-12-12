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
} from "../Redux/ActionTypes";
import axios from "axios";

export const patientGetRequest = (payload) => ({
  type: PATIENT_DATA_REQUEST,
  payload,
});

export const patientGetSuccess = (payload) => ({
  type: PATIENT_DATA_SUCCESS,
  payload,
});

export const patientGetfailure = (payload) => ({
  type: PATIENT_DATA_FAILURE,
  payload,
});

export const doctorGetRequest = (payload) => ({
  type: DOCTOR_DATA_REQUEST,
  payload,
});

export const doctorGetSuccess = (payload) => ({
  type: DOCTOR_DATA_SUCCESS,
  payload,
});

export const doctorGetfailure = (payload) => ({
  type: DOCTOR_DATA_FAILURE,
  payload,
});

export const loginGetRequest = (payload) => ({
  type: LOGIN_DATA_REQUEST,
  payload,
});

export const loginGetSuccess = (payload) => ({
  type: LOGIN_DATA_SUCCESS,
  payload,
});

export const loginGetfailure = (payload) => ({
  type: LOGIN_DATA_FAILURE,
  payload,
});

export const updateGetRequest = (payload) => ({
  type: UPDATE_DATA_REQUEST,
  payload,
});

export const updateGetSuccess = (payload) => ({
  type: UPDATE_DATA_SUCCESS,
  payload,
});

export const updateGetfailure = (payload) => ({
  type: UPDATE_DATA_FAILURE,
  payload,
});

export const getPatientData = (search) => (dispatch) => {
  search = "" || search;
  console.log("SEARCH....", search);
  dispatch(patientGetRequest());
  return (
    axios
      .get("http://localhost:8080/users/getPatient")
      // .then((res) => console.log(res.data))
      .then((res) => dispatch(patientGetSuccess(res.data)))
      .catch((err) => dispatch(patientGetfailure(err)))
  );
};

export const loginRequest = (payload) => (dispatch) => {
  console.log("LOGIN: ", payload);
  const { email, password } = payload;
  dispatch(loginGetRequest());
  return axios
    .post("http://localhost:8080/users/login", {
      email: email,
      password: password,
    })
    .then((res) => res)
    .then((res) => dispatch(loginGetSuccess(res.data)))
    .catch((err) => dispatch(loginGetfailure(err)));
};

export const postDoctor = (payload) => (dispatch) => {
  console.log("Register: ", payload);
  const { fname, lname, age, email, gender, password } = payload;
  dispatch(doctorGetRequest());
  return axios
    .post("http://localhost:8080/users/register", {
      fname: fname,
      lname: lname,
      age: age,
      email: email,
      gender: gender,
      password: password,
    })
    .then((res) => console.log(res.data))
    .then((res) => dispatch(doctorGetSuccess(res.data)))
    .catch((err) => dispatch(doctorGetfailure(err)));
};

export const updateUsersData = (payload) => (dispatch) => {
  console.log("UPDATE: ", payload);
  dispatch(updateGetRequest());
  axios
    .put(`http://localhost:8080/users/${payload.id}`, {
      fname: payload.fname,
      lname: payload.lname,
      age: payload.age,
      email: payload.email,
      gender: payload.gender,
    })
    .then((res) => res.data)
    .then((res) => dispatch(updateGetSuccess(res)))
    .catch((error) => dispatch(updateGetfailure(error)));
};
