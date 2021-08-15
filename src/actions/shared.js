import { receiveAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { _getQuestions, _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialReceive(authedUser) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(receiveAuthedUser(authedUser));
    _getUsers().then((users) => dispatch(receiveUsers(users)));
    _getQuestions()
      .then((questions) => dispatch(receiveQuestions(questions)))
      .then(() => dispatch(hideLoading()));
  };
}
