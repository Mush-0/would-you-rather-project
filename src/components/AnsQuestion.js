import React from "react";
import { connect } from "react-redux";
import { chosenAnswer, optionScore } from "../helpers/helpers";

function AnsQuestion(props) {
  const { theAuthor, theQuestion, authedUser } = props;

  const userAnswer = chosenAnswer(theQuestion, authedUser);

  //   optOne,optTwo shape {text: "", votes: [userIds]}
  return (
    <div className="bordered medium-container flex-container ">
      <img
        className="avatar"
        alt="Author avatar"
        src={theAuthor.avatarURL}
      ></img>

      <div className="flex-container flex-column">
        <h2>Would you rather?...</h2>

        <p>
          <span className={userAnswer === "optionOne" ? "marked" : ""}>
            {theQuestion.optionOne.text + "   "}
          </span>
          "Votes percent {optionScore("optionOne", theQuestion)}"
          <br />
          <br />
          <span className={userAnswer === "optionTwo" ? "marked" : ""}>
            {theQuestion.optionTwo.text + "   "}
          </span>
          "Votes percent: {optionScore("optionTwo", theQuestion)}"
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
export default connect(mapStateToProps)(AnsQuestion);
