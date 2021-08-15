import { _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return { type: RECEIVE_QUESTIONS, payload: { questions } };
}
function answerQuestion(questionAnswer) {
  return { type: ANSWER_QUESTION, payload: { ...questionAnswer } };
}

/**
 *
 *
 * @param {string} answer - MUST be "optionOne"|"optionTwo"
 */
export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(answerQuestion({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}
