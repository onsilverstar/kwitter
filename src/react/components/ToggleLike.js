import React from "react";
import { connect } from "react-redux";
import { togglelike } from "../../redux";
import Button from "react-bootstrap/Button";
import "./ToggleLike.css";

class ToggleLike extends React.Component {
  state = { messageId: this.props.messageId };

  toggleLike = (e, messageId) => {
    e.preventDefault();
    this.props.togglelike(this.state);
    this.props.reloadParent();
  };

  render() {
    return (
      <Button
        className="likeButton"
        variant="danger"
        onClick={e => this.toggleLike(e, this.props.messageId)}
      >
        Like
      </Button>
    );
  }
}

export default connect(
  state => ({
    result: state.likes.togglelike.result,
    loading: state.likes.togglelike.loading,
    error: state.likes.togglelike.error
  }),
  { togglelike }
)(ToggleLike);
