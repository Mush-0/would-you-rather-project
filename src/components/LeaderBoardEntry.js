import React from "react";
import { connect } from "react-redux";

function LeaderBoardEntry({ user }) {
  const totalUserQuestions = user.questions.length;
  const totalUserAnswers = Object.keys(user.answers).length;
  return (
    <div className="bordered medium-container flex-container ">
      <img className="avatar" alt="user avatar" src={user.avatarURL}></img>
      <h4>{user.name}</h4>
      <p>Add Questions: {totalUserQuestions}</p>
      <p>Answered Questions: {totalUserAnswers}</p>
      <p className="score">
        Total score: {totalUserQuestions + totalUserAnswers}
      </p>
    </div>
  );
}

function mapStateToProps(state, ownProp) {
  const { id } = ownProp;
  return { user: state.users[id] };
}
export default connect(mapStateToProps)(LeaderBoardEntry);
