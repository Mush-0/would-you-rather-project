// Function to get which answer the authedUser has choosen
/**
 *
 *
 * @returns - "optionOne"|"optionTwo"|null
 */
export function chosenAnswer(question, authedUser) {
  const votedForOne = question.optionOne.votes.includes(authedUser);
  const votedForTwo = question.optionTwo.votes.includes(authedUser);
  const chosenAnswer = votedForOne
    ? "optionOne"
    : votedForTwo
    ? "optionTwo"
    : null;
  return chosenAnswer;
}

/**
 * Function to find how much votes certain option got
 * @param {String} option - "optionOne" or "optionTwo"
 * @param {Object} question - Should be Object containing the question data
 * @returns - Score shape example "1/3"
 */
export function optionScore(option, question) {
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionVotes = question[option].votes.length;
  return `${optionVotes}/${totalVotes}`;
}
