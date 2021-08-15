import React from "react";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";

function NavMenu({ dispatch, userName }) {
  function logOut() {
    dispatch(handleLogout());
  }
  return (
    <div className="bordered-container">
      <div className="nav">
        <div>Home</div>
        <div>Add Question</div>
        <div>LeaderBoard</div>
      </div>
      <div className="nav" data-role="login/logout">
        <div>UserName:{userName}</div>
        <div onClick={(e) => logOut()}>logout</div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return { userName: state.users[state.authedUser].name };
}
export default connect(mapStateToProps)(NavMenu);
