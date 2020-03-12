import React from "react";
import { connect } from "react-redux";
import { deletemessage } from "../../redux";
import "./Messages.css";

class DeleteMessage extends React.Component {
  deleteMessage = (e, messageId) => {
    e.preventDefault();
    console.log(messageId);
    this.props.deletemessage(messageId);
    console.log("after reducer called");
  };

  render() {
    //const { result } = this.props;

    return (
      <button onClick={e => this.deleteMessage(e, this.props.messageId)}>
        Delete
      </button>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.deletemessage.result,
    loading: state.messages.deletemessage.loading,
    error: state.messages.deletemessage.error
  }),
  { deletemessage }
)(DeleteMessage);
