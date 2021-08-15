import { RECEIVE_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = "", action) {
  switch (action.type) {
    case RECEIVE_AUTHED_USER:
      return action.payload.authedUser;
    default:
      return state;
  }
}
