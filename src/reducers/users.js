import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...action.payload.users };
    case ADD_QUESTION:
      const { id, author } = action.payload;
      const newQuestions = state[author].questions.concat([id]);
      return {
        ...state,
        [author]: { ...state[author], questions: newQuestions },
      };
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action.payload;
      const newAnswers = { ...state[authedUser].answers, [qid]: answer };
      return {
        ...state,
        [authedUser]: { ...state[authedUser], answers: newAnswers },
      };
    default:
      return state;
  }
}
