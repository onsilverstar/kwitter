import React from "react";
import { connect } from "react-redux";
import { displayprofile } from "../../redux";
import "./Messages.css";

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
      <div>
        {result && (
          <div className="profileDisplayWrapper">
            <h3>{result.user.displayName}</h3>
            <div>{result.user.pictureLocation}</div>
            <div>About: {result.user.about}</div>
          </div>
        )}
      </div>
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
