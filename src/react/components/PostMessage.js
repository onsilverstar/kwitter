import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { postmessage, mymessagefeed, newmessagefeed } from "../../redux";
import Button from "react-bootstrap/Button";
import "./Messages.css";

class PostMessage extends React.Component {
  state = { text: "" };

  handlePostMessage = e => {
    e.preventDefault();
    this.props.postmessage(this.state);
    document.getElementById("postMessage").value = "";
    setTimeout(() => {
      this.props.mymessagefeed();
      this.props.newmessagefeed();
    }, 200);
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="postmessage-form" onSubmit={this.handlePostMessage}>
          <textarea
            type="text"
            name="postMessage"
            id="postMessage"
            placeholder="new message here"
            rows="8"
            columns="28"
            width="100%"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button variant="danger" type="submit">
            Submit Post
          </Button>
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
  { postmessage, mymessagefeed, newmessagefeed }
)(PostMessage);
