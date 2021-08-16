// Function to get which answer the authedUser has choosen
/**
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
 * @param {string} option - "optionOne" or "optionTwo"
 * @param {object} question - Should be Object containing the question data
 * @returns - Score shape example "1/3"
 */
export function optionScore(option, question) {
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionVotes = question[option].votes.length;
  const votesPercent = parseInt((optionVotes / totalVotes) * 100);
  return `${optionVotes}/${totalVotes} - ${votesPercent}%`;
}

/**
 * Function to calculate user score
 * @param {object} user - User object containing answers,questions ids
 * @returns {string} userScore
 */
export function userScore(user) {
  const totalScore = Object.keys(user.answers).length + user.questions.length;
  return totalScore;
}
