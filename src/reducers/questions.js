import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...action.payload.questions };

    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action.payload;
      const newVotes = [...state[qid][answer].votes, authedUser];
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: { ...state[qid][answer], votes: newVotes },
        },
      };
    case ADD_QUESTION:
      const questionId = action.payload.id;
      return { ...state, [questionId]: action.payload };
    default:
      return state;
  }
}
