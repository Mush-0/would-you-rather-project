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
    // todo: grab authed
    const users = ["tylermcginnis", "johndoe", "sarahedo"];
    const hardAuthedUser = users[5] || "";
    // todo: remove hard coded authed user
    this.props.dispatch(handleInitialReceive(hardAuthedUser));
  }
  render() {
    return (
      <div>
        <div className="pages">
          <LoadingBar />
          {this.props.logged && <NavMenu />}
          <Switch>
            {!this.props.logged && <Login />}
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
            {/* todo: remove the ! */}
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
  const logged = state.authedUser !== "" ? true : false;
  return { logged };
}
export default connect(mapStateToProps)(App);
