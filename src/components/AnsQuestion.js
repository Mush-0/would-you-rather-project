import React from "react";
import { connect } from "react-redux";
import { chosenAnswer, optionScore } from "../helpers/helpers";

function AnsQuestion(props) {
  const { id, theAuthor, theQuestion, authedUser, dispatch } = props;
  const { name, avatarURL } = theAuthor;
  const { optionOne, optionTwo } = theQuestion;
  const userAnswer = chosenAnswer(theQuestion, authedUser);

  //   optOne,optTwo shape {text: "", votes: [userIds]}
  return (
    <div className="bordered-container container">
      <h3 className="center">Would you rather?...</h3>
      <img
        className="avatar"
        alt="Author avatar"
        src={theAuthor.avatarURL}
      ></img>
      <p className={userAnswer === "optionOne" ? "marked option" : "option"}>
        {theQuestion.optionOne.text}
      </p>
      <span> score {optionScore("optionOne", theQuestion)}</span>
      <p className={userAnswer === "optionTwo" ? "marked option" : "option"}>
        {theQuestion.optionTwo.text}
      </p>
      <span> score: {optionScore("optionTwo", theQuestion)}</span>
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
export default connect(mapStateToProps)(AnsQuestion);
