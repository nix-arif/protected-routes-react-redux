import Axios from "axios";
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

export const fetchUserIsAuthenticated = () => {
  return function (dispatch) {
    dispatch(userIsAuthenticatedRequest());
    Axios.post("/login")
      .then((response) => {
        dispatch(userIsAuthenticatedSuccess(response.data.isAuthed));
      })
      .catch((error) => {
        dispatch(userIsAuthenticatedFailure(error));
      });
  };
};
