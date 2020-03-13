import React from "react";
import { connect } from "react-redux";
import { deletelike } from "../../redux";

class DeleteLike extends React.Component {
  deleteLike = (e, likeId) => {
    e.preventDefault();
    this.props.deletelike(likeId);
  };

  render() {
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
