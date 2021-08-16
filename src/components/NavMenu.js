import React from "react";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";
import { NavLink } from "react-router-dom";
function NavMenu({ dispatch, userName }) {
  function logOut() {
    dispatch(handleLogout());
  }
  return (
    <div className="bordered-container">
      <div className="nav">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/add" activeClassName="active">
          Add Question
        </NavLink>
        <NavLink to="/leaderboard" activeClassName="active">
          LeaderBoard
        </NavLink>
      </div>
      <div className="nav" data-role="login/logout">
        <div>UserName: {userName}</div>
        <div onClick={(e) => logOut()}>logout</div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return { userName: state.users[state.authedUser].name };
}
export default connect(mapStateToProps)(NavMenu);
