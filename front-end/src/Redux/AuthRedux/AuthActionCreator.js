import {
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
} from "../Redux/ActionTypes";
import axios from "axios";

export const userGetRequest = (payload) => ({
  type: USER_DATA_REQUEST,
  payload,
});

export const userGetSuccess = (payload) => ({
  type: USER_DATA_SUCCESS,
  payload,
});

export const userGetfailure = (payload) => ({
  type: USER_DATA_FAILURE,
  payload,
});

export const userPostRequest = (payload) => ({
  type: USER_POST_REQUEST,
  payload,
});

export const userPostSuccess = (payload) => ({
  type: USER_POST_SUCCESS,
  payload,
});

export const userPostfailure = (payload) => ({
  type: USER_POST_FAILURE,
  payload,
});
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

export const postUser = (payload) => (dispatch) => {
  console.log("Register: ", payload);
  const { fname, lname, age, email, gender, password } = payload;
  dispatch(userPostRequest());
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
    .then((res) => dispatch(userPostSuccess(res.data)))
    .catch((err) => dispatch(userPostfailure(err)));
};
