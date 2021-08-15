import React from "react";
import { connect } from "react-redux";
import AnsQuestion from "./AnsQuestion";
// import Question from "./Question";
import { chosenAnswer } from "../helpers/helpers";

function AnsList(props) {
  const { answeredQuestionsIds } = props;
  return (
    <div className="container">
      <ul>
        {answeredQuestionsIds.map((id) => (
          <li key={id}>
            <AnsQuestion id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  const answeredQuestionsIds = Object.keys(state.questions)
    .filter((id) => chosenAnswer(state.questions[id], state.authedUser))
    .sort(
      (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
    );

  return { answeredQuestionsIds };
}
export default connect(mapStateToProps)(AnsList);
