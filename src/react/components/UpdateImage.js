import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { updateimage, displayprofile } from "../../redux";
import Button from "react-bootstrap/Button";
import "./Profile.css";

class UpdateImage extends React.Component {
  handleUpdateImage = e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    this.props.updateimage(formData);
    //document.getElementById("updateImage").value = "";
    setTimeout(() => {
      this.props.displayprofile();
    }, 200);
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="updateimage-form" onSubmit={this.handleUpdateImage}>
          <input
            type="file"
            name="picture"
            id="picture"
            width="100%"
            accept="image/*"
            required
          />
          <br />
          <br />
          <Button type="submit">Submit</Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.users.updateimage.result,
    loading: state.users.updateimage.loading,
    error: state.users.updateimage.error
  }),
  { updateimage, displayprofile }
)(UpdateImage);
