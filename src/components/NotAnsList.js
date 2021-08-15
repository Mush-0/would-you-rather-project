import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
function NotAnsList(props) {
  const { questionsIds } = props;
  return (
    <div className="container">
      <ul>
        {questionsIds.map((id) => (
          <li key={id}>
            <Question id={id} answered={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  const questionsIds = Object.keys(state.questions).sort(
    (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
  );
  return { questionsIds };
}
export default connect(mapStateToProps)(NotAnsList);
