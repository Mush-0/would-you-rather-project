import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_AUTHED_USER = "RECEIVE_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export function receiveAuthedUser(authedUser) {
  return { type: RECEIVE_AUTHED_USER, payload: { authedUser } };
}

function removeAuthedUser() {
  return { type: REMOVE_AUTHED_USER };
}

export function handleLogout() {
  return (dispatch) => {
    dispatch(showLoading());

    setTimeout(() => {
      dispatch(removeAuthedUser());
      dispatch(hideLoading());
    }, 500);
  };
}
