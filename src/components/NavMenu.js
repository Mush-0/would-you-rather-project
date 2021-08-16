import React from "react";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";
import { NavLink } from "react-router-dom";
function NavMenu({ dispatch, userName }) {
  function logOut() {
    const x = window.confirm("Are you sure you want to log out ?");
    x && dispatch(handleLogout());
  }
  return (
    <nav className="nav bordered ">
      <ul className="fit-container">
        <NavLink exact to="/" activeClassName="active">
          <li>Home</li>
        </NavLink>
        <NavLink to="/add" activeClassName="active">
          <li>Add Question</li>
        </NavLink>
        <NavLink to="/leaderboard" activeClassName="active">
          <li>LeaderBoard</li>
        </NavLink>
      </ul>
      <ul className="fit-container" data-role="login/logout">
        <li>UserName: {userName}</li>
        <li className="logout" onClick={(e) => logOut()}>
          logout
        </li>
      </ul>
    </nav>
  );
}
function mapStateToProps(state) {
  return { userName: state.users[state.authedUser].name };
}
export default connect(mapStateToProps)(NavMenu);
