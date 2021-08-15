import React from "react";
import AnsList from "./AnsList";
import NotAnsList from "./NotAnsList";

class Home extends React.Component {
  state = { active: "NotAnsList" };
  //   Switch active between NotAnsList/AnsList when buttons clicked
  toggleActiveBtn() {
    document.querySelector("#not-ans-btn").classList.toggle("active");
    document.querySelector("#ans-btn").classList.toggle("active");
  }
  showUnAnsList(e) {
    if (!e.target.classList.value.includes("active")) {
      this.toggleActiveBtn();
      this.setState({ active: "NotAnsList" });
    }
  }
  showAnsList(e) {
    if (!e.target.classList.value.includes("active")) {
      this.toggleActiveBtn();
      this.setState({ active: "AnsList" });
    }
  }
  render() {
    return (
      <div className="container">
        <nav className="nav"></nav>
        <div className="container">
          <div className="center">
            <button
              id="not-ans-btn"
              onClick={(e) => {
                this.showUnAnsList(e);
              }}
              className="btn active"
            >
              Unanswered
            </button>
            <button
              id="ans-btn"
              onClick={(e) => {
                this.showAnsList(e);
              }}
              className="btn"
            >
              Answered
            </button>
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
