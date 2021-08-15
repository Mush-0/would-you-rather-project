import React from "react";
import { connect } from "react-redux";
import { handleInitialReceive } from "../actions/shared";
import LoadingBar from "react-redux-loading";
// Importing components
import Home from "./Home";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";

class App extends React.Component {
  componentDidMount() {
    // todo: grab authed
    const users = ["tylermcginnis", "johndoe", "sarahedo"];
    const hardAuthedUser = users[0] || "";
    // todo: remove hard coded authed user
    this.props.dispatch(handleInitialReceive(hardAuthedUser));
  }
  render() {
    return !this.props.logged ? (
      <div>
        <LoadingBar />
        <h1>NOT LOGGED, please login</h1>
      </div>
    ) : (
      <div>
        <LoadingBar />
        <LeaderBoard />
        <AddQuestion />
        <Home />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const logged = state.authedUser !== "" ? true : false;
  return { logged };
}
export default connect(mapStateToProps)(App);
