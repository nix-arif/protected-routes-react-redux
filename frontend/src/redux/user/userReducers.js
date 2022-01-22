const {
  USER_ISAUTHENTICATED_REQUEST,
  USER_ISAUTHENTICATED_SUCCESS,
  USER_ISAUTHENTICATED_FAILURE,
} = require("./userTypes");

const initialState = {
  loading: false,
  isAuthed: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ISAUTHENTICATED_REQUEST:
      return { ...state, loading: true };
    case USER_ISAUTHENTICATED_SUCCESS:
      return { loading: false, isAuthed: action.payload, error: "" };
    case USER_ISAUTHENTICATED_FAILURE:
      return { loading: false, isAuthed: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
