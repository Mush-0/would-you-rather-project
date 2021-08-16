import React from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { withRouter } from "react-router";

class AddQuestion extends React.Component {
  state = { textOne: "", textTwo: "" };
  dispatch = this.props.dispatch;
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(
      handleAddQuestion(
        this.state.textOne,
        this.state.textTwo,
        this.props.authedUser
      )
    );
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1 className="center">Add new question</h1>
        <div className="container bordered">
          <h3 className="center">Would you rather?...</h3>
          <form
            onSubmit={(e) => {
              this.onSubmit(e);
            }}
            className="center"
          >
            <input
              onChange={(e) => this.onChange(e)}
              name="textOne"
              value={this.state.textOne}
              required={true}
              placeholder="Option one"
            ></input>
            <br />
            <input
              onChange={(e) => this.onChange(e)}
              name="textTwo"
              required={true}
              placeholder="Option two"
              value={this.state.textTwo}
            ></input>
            <br />
            <button className="btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authedUser: state.authedUser };
}
export default connect(mapStateToProps)(withRouter(AddQuestion));
