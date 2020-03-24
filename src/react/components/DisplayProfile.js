import React from "react";
import { connect } from "react-redux";
import { displayprofile } from "../../redux";
import "./Profile.css";
import { Card } from "semantic-ui-react";
import defaultImage from "../../../src/images/defaultProfile.png";

class DisplayProfile extends React.Component {
  populateDisplayProfile = () => {
    this.props.displayprofile();
  };

  componentDidMount() {
    this.populateDisplayProfile();
  }

  render() {
    const { result } = this.props;

    return (
      <Card>
        <div>
          {result && (
            <div>
              <h3>{result.user.displayName}</h3>
              {result.user.pictureLocation === null ? (
                <div>
                  <br />
                  <img
                    src={defaultImage}
                    alt="Default"
                    className="defaultImage"
                  />
                  <br />
                </div>
              ) : (
                <img
                  src={`https://kwitter-api.herokuapp.com/users/${this.props.result.user.username}/picture`}
                  alt="User Profile"
                />
              )}
              <br />
              <br />
              <h4>About: {result.user.about}</h4>
            </div>
          )}
        </div>
      </Card>
    );
  }
}

export default connect(
  state => ({
    result: state.users.displayprofile.result,
    loading: state.users.displayprofile.loading,
    error: state.users.displayprofile.error
  }),
  { displayprofile }
)(DisplayProfile);
