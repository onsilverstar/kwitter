import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { postmessage } from "../../redux";
import "./RegistrationForm.css";

class PostMessage extends React.Component {
  state = { text: "" };

  handlePostMessage = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.postmessage(this.state);
    document.getElementById("postMessage").value = "";
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="postmessage-form" onSubmit={this.handlePostMessage}>
          <input
            type="textarea"
            name="postMessage"
            id="postMessage"
            placeholder="new message here"
            rows="10"
            columns="50"
            autoFocus
            required
            onChange={this.handleChange}
          />

          <button type="submit">Submit Post</button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.postmessage.result,
    loading: state.messages.postmessage.loading,
    error: state.messages.postmessage.error
  }),
  { postmessage }
)(PostMessage);
