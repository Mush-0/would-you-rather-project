import React from "react";
import { connect } from "react-redux";
import { handleInitialReceive } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import { Switch, Route, Redirect } from "react-router-dom";
// Importing components
import Home from "./Home";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NavMenu from "./NavMenu";
import PageNotFound from "./PageNotFound";
import CheckQuestion from "./CheckQuestion";

class App extends React.Component {
  componentDidMount() {
    // Grab authedUser from session storage
    const user = window.sessionStorage.getItem("AuthedUser") || "";
    this.props.dispatch(handleInitialReceive(user));
  }
  render() {
    return (
      <div>
        {this.props.logged &&
          window.sessionStorage.setItem("AuthedUser", this.props.authedUser)}
        <div className="pages">
          <LoadingBar />
          {this.props.logged && this.props.loadedUsers && <NavMenu />}
          <Switch>
            {!this.props.logged && <Login />}
            {!this.props.loadedUsers && <LoadingBar />}
            <Route path="/leaderboard">
              <LeaderBoard />
            </Route>
            <Route path="/add">
              <AddQuestion />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/questions/:id" component={CheckQuestion} />
            <Route path="/pagenotfound">
              <PageNotFound />
            </Route>
            <Route path="*">
              <Redirect to="/pagenotfound" />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const authedUser = state.authedUser;
  const loadedUsers = Object.keys(state.users).length !== 0;
  const logged = state.authedUser !== "" ? true : false;
  return { logged, authedUser, loadedUsers };
}
export default connect(mapStateToProps)(App);
