import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { edituser } from "../../redux";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap/";
import { Button } from "react-bootstrap";

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
        <Form onSubmit={this.handleEdit}>
          <Form.Group controlId="about">
            <Form.Label>About- *required</Form.Label>
            <Form.Control
              type="text"
              placeholder="About me"
              name="about"
              onChange={this.handlechange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="displayName">
            <Form.Label>Display Name- *required</Form.Label>
            <Form.Control
              type="text"
              name="displayName"
              placeholder="Display Name"
              onChange={this.handlechange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password- *required</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handlechange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        {result && (
          <React.Fragment>
            <p>Changes made.</p>
            <br />
            <Link to="/">
              <Button id="editButton">Edit user</Button>
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
    error: state.users.edituser.error,
    displayprofile: state.users.displayprofile
  }),
  { edituser }
)(EditUser);
