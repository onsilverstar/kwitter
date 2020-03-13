import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { edituser } from "../../redux";
import { Link } from "react-router-dom";

class EditUser extends React.Component {
  state = { password: "", about: "", displayName: "" };

  handleEdit = e => {
    e.preventDefault();
    this.props.edituser(this.state);
    document.getElementById("password").value = "";
    document.getElementById("about").value = "";
    document.getElementById("displayName").value = "";
  };

  handlechange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error, result } = this.props;
    return (
      <React.Fragment>
        <form id="edit" onSubmit={this.handleEdit}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            autoFocus
            required
            onChange={this.handlechange}
          />
          <label htmlFor="about">About: </label>
          <input
            type="text"
            name="about"
            id="about"
            required
            onChange={this.handlechange}
          />
          <label htmlFor="displayName">Display name: </label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            required
            onChange={this.handlechange}
          />
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        {result && (
          <React.Fragment>
            <p>Changes made.</p>
            <br />
            <Link to="/">
              <button id="editButton">Edit user</button>
            </Link>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.users.edituser.result,
    loading: state.users.edituser.loading,
    error: state.users.edituser.error
  }),
  { edituser }
)(EditUser);
