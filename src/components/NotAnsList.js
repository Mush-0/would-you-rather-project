import React from "react";
import { connect } from "react-redux";
import NotAnsQuestion from "./NotAnsQuestion";
// import Question from "./Question";
import { chosenAnswer } from "../helpers/helpers";
import { Link } from "react-router-dom";

function NotAnsList(props) {
  const { notAnsweredQuestionsIds } = props;
  return (
    <div className="container">
      <ul>
        {notAnsweredQuestionsIds.map((id) => (
          <li key={id}>
            <Link to={"/questions/" + id}>
              <NotAnsQuestion id={id} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  const notAnsweredQuestionsIds = Object.keys(state.questions)
    .filter((id) => !chosenAnswer(state.questions[id], state.authedUser))
    .sort(
      (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
    );

  return { notAnsweredQuestionsIds };
}
export default connect(mapStateToProps)(NotAnsList);
