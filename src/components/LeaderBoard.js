import React from "react";
import { connect } from "react-redux";
import { userScore } from "../helpers/helpers";
import LeaderBoardEntry from "./LeaderBoardEntry";

function LeaderBoard({ usersIds }) {
  return (
    <div>
      <h1 className="center">LeaderBoard</h1>
      <ul className="container bordered-container">
        {usersIds.map((id) => (
          <li key={id}>
            <LeaderBoardEntry id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  const usersIds = Object.keys(state.users).sort(
    (a, b) => userScore(state.users[b]) - userScore(state.users[a])
  );
  return { usersIds, users: state.users };
}
export default connect(mapStateToProps)(LeaderBoard);
