import React from "react";
import AnsList from "./AnsList";
import NotAnsList from "./NotAnsList";

class Home extends React.Component {
  state = { active: "NotAnsList" };
  //   Switch active between NotAnsList/AnsList when buttons clicked
  render() {
    return (
      <div className="container">
        <nav className="nav"></nav>
        <div className="container">
          <div className="center">
            <button className="btn active">Unanswered</button>
            <button className="btn">Answered</button>
            <div className="bordered-container">
              {this.state.active === "NotAnsList" ? (
                <NotAnsList />
              ) : (
                <AnsList />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
