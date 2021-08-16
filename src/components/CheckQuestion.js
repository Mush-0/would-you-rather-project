import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AnsQuestion from "./AnsQuestion";
import NotAnsQuestion from "./NotAnsQuestion";

function CheckQuestion({ valid, answered, history, qid }) {
  if (!valid) {
    return (
      <div className="center">
        <h1>This question doesn't reside in the data base!</h1>
        <h3>
          Please back to <Link to="/">home page</Link>
        </h3>
      </div>
    );
  }
  if (answered) {
    return <AnsQuestion id={qid} />;
  }
  return <NotAnsQuestion id={qid} />;
}

function mapStateToProps(state, ownProps) {
  const qid = ownProps.match.params.id;
  const validQuestion = Object.keys(state.questions).includes(qid);

  let answeredByUser;
  if (validQuestion && state.authedUser) {
    const userAnswers = state.users[state.authedUser].answers;
    answeredByUser = Object.keys(userAnswers).includes(qid);
  }

  console.log(validQuestion);

  return { valid: validQuestion, answered: answeredByUser, qid };
}
export default connect(mapStateToProps)(CheckQuestion);
