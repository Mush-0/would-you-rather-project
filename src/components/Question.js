/**
 * Separated into two components -> AnsQuestion,NotAnsQuestion
 */

// import React from "react";
// import { connect } from "react-redux";
// import { chosenAnswer, optionScore } from "../helpers/helpers";
// import { handleAnswerQuestion } from "../actions/questions";

// function Question(props) {
//   const { id, theAuthor, theQuestion, authedUser, dispatch } = props;
//   const { name, avatarURL } = theAuthor;
//   const { optionOne, optionTwo } = theQuestion;
//   const userAnswer = chosenAnswer(theQuestion, authedUser);

//   function chooseOption(answer) {
//     dispatch(handleAnswerQuestion(authedUser, id, answer));
//   }
//   //   optOne,optTwo shape {text: "", votes: [userIds]}
//   return (
//     <div className="bordered-container container">
//       <h3 className="center">Would you rather?...</h3>
//       <img
//         className="avatar"
//         alt="Author avatar"
//         src={theAuthor.avatarURL}
//       ></img>
//       <p
//         onClick={(e) => chooseOption("optionOne")}
//         className={userAnswer === "optionOne" ? "marked option" : "option"}
//       >
//         {theQuestion.optionOne.text}
//       </p>
//       {userAnswer && (
//         <span> score {optionScore("optionOne", theQuestion)}</span>
//       )}
//       <p
//         onClick={(e) => chooseOption("optionTwo")}
//         className={userAnswer === "optionTwo" ? "marked option" : "option"}
//       >
//         {theQuestion.optionTwo.text}
//       </p>
//       {userAnswer && (
//         <span> score: {optionScore("optionTwo", theQuestion)}</span>
//       )}
//     </div>
//   );
// }

// function mapStateToProps(state, ownProps) {
//   const { id } = ownProps;
//   const theQuestion = state.questions[id];
//   const theAuthor = state.users[theQuestion.author];

//   return {
//     theAuthor,
//     theQuestion,
//     authedUser: state.authedUser,
//   };
// }
// export default connect(mapStateToProps)(Question);
