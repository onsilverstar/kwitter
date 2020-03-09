import React from "react";
import { connect } from "react-redux";
import { mymessagefeed } from "../../redux";
import "./Messages.css";

class MyMessageFeed extends React.Component {
  populateMessageFeed = () => {
    this.props.mymessagefeed();
  };

  componentDidMount() {
    this.populateMessageFeed();
  }

  render() {
    const { result } = this.props;

    return (
      <React.Fragment>
        <div className="messageFeedWrapper">
          {result &&
            result.messages.map(message => (
              <>
                <div className="messageFeedMessage" key={message.id}>
                  <h2>{message.username}</h2>
                  <p>{message.text}</p>
                  <div>
                    <button>Like</button> | {message.likes.length} |{" "}
                    <button>Delete</button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.mymessagefeed.result,
    loading: state.messages.mymessagefeed.loading,
    error: state.messages.mymessagefeed.error,
    username: state.auth.login.result.username
  }),
  { mymessagefeed }
)(MyMessageFeed);
