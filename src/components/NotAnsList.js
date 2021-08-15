import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { chosenAnswer } from "../helpers/helpers";

function NotAnsList(props) {
  const { notAnsweredQuestionsIds } = props;
  return (
    <div className="container">
      <ul>
        {notAnsweredQuestionsIds.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  const notAnsweredQuestionsIds = Object.keys(state.questions)
    .filter((id) => chosenAnswer(state.questions[id], state.authedUser))
    .sort(
      (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
    );

  return { notAnsweredQuestionsIds };
}
export default connect(mapStateToProps)(NotAnsList);
