import React from "react";
import { Menu } from "./components";
import "./components/Profile.css";
import { userIsAuthenticated } from "./HOCs";
import { EditUser } from "./components";
import DisplayProfile from "./components/DisplayProfile";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Member Profile</h2>
        <div className="profileWrapper">
          <div className="profileColumn">
            <DisplayProfile />
          </div>
          <div className="profileColumn">
            <h3>Update Profile</h3>
            <EditUser />
            <br />

            <h3>Update Profile Image</h3>
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
