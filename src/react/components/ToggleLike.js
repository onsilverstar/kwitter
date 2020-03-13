import React from "react";
import { connect } from "react-redux";
import { togglelike } from "../../redux";

class ToggleLike extends React.Component {
  state = { messageId: this.props.messageId };

  toggleLike = (e, messageId) => {
    e.preventDefault();
    this.props.togglelike(this.state);
    console.log("after reducer called");
  };

  render() {
    //const { result } = this.props;

    return (
      <button onClick={e => this.toggleLike(e, this.props.messageId)}>
        Like
      </button>
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
