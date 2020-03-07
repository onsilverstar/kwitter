import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { messageFeed } from "../../redux";
import "./Messages.css";

class MessageFeed extends React.Component {
  state = { messageFeed: "" };

  //   handleRegistration = e => {
  //     e.preventDefault();
  //     this.props.register(this.state);
  //     document.getElementById("username").value = "";
  //     document.getElementById("displayName").value = "";
  //     document.getElementById("password").value = "";
  //   };

  //   handleChange = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  render() {
    const { loading, error, result } = this.props;
    return (
      <React.Fragment>
        {result && <p>Message Feed Here</p>}
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.messageFeed.result,
    loading: state.messages.messageFeed.loading,
    error: state.messages.messageFeed.error,
    messageFeed: state.messages.messageFeed.result
  }),
  { messageFeed }
)(MessageFeed);
