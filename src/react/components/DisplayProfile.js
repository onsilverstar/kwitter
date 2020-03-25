import React from "react";
import { connect } from "react-redux";
import { displayprofile } from "../../redux";
import "./Profile.css";
import { Card, Button } from "semantic-ui-react";
class DisplayProfile extends React.Component {
  //state = { username: "" };

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
                  <Button>ADD PROFILE IMAGE</Button>
                  <br />
                </div>
              ) : (
                <img
                  src={`https://kwitter-api.herokuapp.com/users/${this.props.result.user.username}/picture`}
                  alt="User Profile"
                  className="profileImage"
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
