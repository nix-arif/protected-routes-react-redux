import { Axios } from "axios";
import {
  USER_ISAUTHENTICATED_FAILURE,
  USER_ISAUTHENTICATED_REQUEST,
  USER_ISAUTHENTICATED_SUCCESS,
} from "./userTypes";

const userIsAuthenticatedRequest = () => {
  return {
    type: USER_ISAUTHENTICATED_REQUEST,
  };
};

const userIsAuthenticatedSuccess = (data) => {
  return {
    type: USER_ISAUTHENTICATED_SUCCESS,
    payload: data,
  };
};

const userIsAuthenticatedFailure = (error) => {
  return {
    type: USER_ISAUTHENTICATED_FAILURE,
    payload: error,
  };
};

export const fetchUserIsAuthenticated = (result) => {
  return function (dispatch) {
    Axios.post("/isAuthed").then().catch();
  };
};
