import React from "react";
import { connect } from "react-redux";
import { chosenAnswer, optionScore } from "../helpers/helpers";
import { handleAnswerQuestion } from "../actions/questions";

function NotAnsQuestion(props) {
  const { id, theAuthor, theQuestion, authedUser, dispatch } = props;
  const { name, avatarURL } = theAuthor;
  const { optionOne, optionTwo } = theQuestion;

  function chooseOption(answer) {
    dispatch(handleAnswerQuestion(authedUser, id, answer));
  }
  //   optOne,optTwo shape {text: "", votes: [userIds]}
  return (
    <div className="bordered-container container">
      <h3 className="center">Would you rather?...</h3>
      <img
        className="avatar"
        alt="Author avatar"
        src={theAuthor.avatarURL}
      ></img>
      <p onClick={(e) => chooseOption("optionOne")} className="option">
        {theQuestion.optionOne.text}
      </p>

      <p onClick={(e) => chooseOption("optionTwo")} className="option">
        {theQuestion.optionTwo.text}
      </p>
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
