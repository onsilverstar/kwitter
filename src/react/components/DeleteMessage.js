import React from "react";
import { connect } from "react-redux";
import { deletemessage } from "../../redux";
import Button from "react-bootstrap/Button";
import "./Messages.css";

class DeleteMessage extends React.Component {
  deleteMessage = (e, messageId) => {
    e.preventDefault();
    this.props.deletemessage(messageId);
    this.props.reloadParent();
  };

  render() {
    //const { result } = this.props;

    return (
      <Button
        className="deleteMessageButton"
        variant="danger"
        onClick={e => this.deleteMessage(e, this.props.messageId)}
      >
        Delete
      </Button>
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
