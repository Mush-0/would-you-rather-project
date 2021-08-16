import React from "react";
import { connect } from "react-redux";

import { handleAnswerQuestion } from "../actions/questions";

function NotAnsQuestion(props) {
  const { id, theAuthor, theQuestion, authedUser, dispatch } = props;
  function chooseOption(e, answer) {
    e.preventDefault();
    dispatch(handleAnswerQuestion(authedUser, id, answer));
  }
  //   optOne,optTwo shape {text: "", votes: [userIds]}
  return (
    <div className="bordered medium-container flex-container">
      <img
        className="avatar"
        alt="Author avatar"
        src={theAuthor.avatarURL}
      ></img>
      <div className="flex-container flex-column">
        <h2>Would you rather?...</h2>
        <p>
          <span
            onClick={(e) => chooseOption(e, "optionOne")}
            className="choose"
          >
            {theQuestion.optionOne.text}
          </span>
          <br />
          <br />
          <span
            onClick={(e) => chooseOption(e, "optionTwo")}
            className="choose"
          >
            {theQuestion.optionTwo.text}
          </span>
        </p>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const theQuestion = state.questions[id];
  const theAuthor = state.users[theQuestion.author];

  return {
    theAuthor,
    theQuestion,
    authedUser: state.authedUser,
  };
}
export default connect(mapStateToProps)(NotAnsQuestion);
