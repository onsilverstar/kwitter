import React from "react";
import { Menu } from "./components";
import "./components/Profile.css";
import { userIsAuthenticated } from "./HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <div className="profileWrapper">
          <div className="profileColumn">
            <h3>User Profile</h3>
            <p>User Profile Component</p>
          </div>
          <div className="profileColumn">
            <h3>Update Profile</h3>
            <p>Update User Component</p>
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
