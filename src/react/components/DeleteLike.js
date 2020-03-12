import React from "react";
import { connect } from "react-redux";
import { deletelike } from "../../redux";

class DeleteLike extends React.Component {
  //state = { messageId: this.props.messageId };

  deleteLike = (e, likeId) => {
    e.preventDefault();
    console.log(likeId);
    this.props.deletelike(likeId);
    console.log("after reducer called");
  };

  render() {
    //const { result } = this.props;

    return (
      <button onClick={e => this.deleteLike(e, this.props.likeId)}>
        Unlike
      </button>
    );
  }
}

export default connect(
  state => ({
    result: state.likes.deletelike.result,
    loading: state.likes.deletelike.loading,
    error: state.likes.deletelike.error
  }),
  { deletelike }
)(DeleteLike);
