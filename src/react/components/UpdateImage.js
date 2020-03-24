import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { updateimage } from "../../redux";
import Button from "react-bootstrap/Button";
import "./Profile.css";

class UpdateImage extends React.Component {
  state = { picture: null };

  handleUpdateImage = e => {
    e.preventDefault();
    this.props.updateimage(this.state);
    document.getElementById("updateImage").value = "";
  };

  handleChange = e => {
    let imageObjectFile = e.target.files[0];
    console.log(imageObjectFile);

    this.setState({ picture: imageObjectFile });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="updateimage-form" onSubmit={this.handleUpdateImage}>
          <input
            type="file"
            name="updateImage"
            id="updateImage"
            width="100%"
            accept="image/*"
            required
            onChange={this.handleChange}
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
  { updateimage }
)(UpdateImage);
