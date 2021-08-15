import React from "react";
import { connect } from "react-redux";

function Question(props) {
  const { answered, id, theAuthor, theQuestion } = props;
  const { name, avatarURL } = theAuthor;
  const { optionOne, optionTwo } = theQuestion;
  console.log(name, avatarURL, optionOne, optionTwo);
  //   optOne,optTwo shape {text: "", votes: [userIds]}
  return <div className="container">HELLO</div>;
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const theQuestion = state.questions[id];
  const theAuthor = state.users[theQuestion.author];

  return {
    theAuthor,
    theQuestion,
  };
}
export default connect(mapStateToProps)(Question);
