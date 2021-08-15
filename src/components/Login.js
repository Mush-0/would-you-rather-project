import React from "react";
import { connect } from "react-redux";
import { handleInitialReceive } from "../actions/shared";

function Login({ dispatch }) {
  function handleLogin(e) {
    e.preventDefault();
    const authedUser = e.target[0].value;
    e.target[0].value === "none"
      ? alert("Must choose user to continue!")
      : dispatch(handleInitialReceive(authedUser));
  }
  return (
    <div className="fit-container bordered-container">
      <h3 className="center">Please Login to continue</h3>
      <form
        className="center"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <select defaultValue="none">
          <option value="none" disabled hidden>
            Please Choose a user
          </option>
          <option>tylermcginnis</option>
          <option>sarahedo</option>
          <option>johndoe</option>
        </select>
        <button type="submit">login</button>
      </form>
    </div>
  );
}
function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Login);
