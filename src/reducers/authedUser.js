import { RECEIVE_AUTHED_USER, REMOVE_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = "", action) {
  switch (action.type) {
    case RECEIVE_AUTHED_USER:
      return action.payload.authedUser;
    case REMOVE_AUTHED_USER:
      return "";

    default:
      return state;
  }
}
