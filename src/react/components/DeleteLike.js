import React from "react";
import { connect } from "react-redux";
import { deletelike } from "../../redux";
import Button from "react-bootstrap/Button";

class DeleteLike extends React.Component {
  deleteLike = e => {
    e.preventDefault();
    this.props.deletelike(this.props.likesId);
    this.props.reloadParent();
  };

  render() {
    return (
      <Button
        variant="danger"
        onClick={e => this.deleteLike(e, this.props.likeId)}
      >
        Unlike
      </Button>
    );
  }
}

export default connect(
  state => ({
    result: state.likes.deletelike.result,
    loading: state.likes.deletelike.loading,
    error: state.likes.deletelike.error,
    username: state.auth.login.result.username
  }),
  { deletelike }
)(DeleteLike);
