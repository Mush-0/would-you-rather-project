import React from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
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
  }
  render() {
    return (
      <div>
        <h1 className="center">Add new question</h1>
        <div className="container bordered-container">
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
            <input
              onChange={(e) => this.onChange(e)}
              name="textTwo"
              required={true}
              placeholder="Option two"
              value={this.state.textTwo}
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authedUser: state.authedUser };
}
export default connect(mapStateToProps)(AddQuestion);
