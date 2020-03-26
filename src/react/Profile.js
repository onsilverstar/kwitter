import React from "react";
import { Menu } from "./components";
import "./components/Profile.css";
import { userIsAuthenticated } from "./HOCs";
import { EditUser } from "./components";
import DisplayProfile from "./components/DisplayProfile";
import UpdateImage from "./components/UpdateImage";
import { Header2 } from "./components/Header2";
import { Footer } from "./components/Footer";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="mainContentWrapper">
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
              <p>*Please select an image that is 200kb or less.</p>
              <UpdateImage />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
