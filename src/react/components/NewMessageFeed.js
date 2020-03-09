import React from "react";
import { connect } from "react-redux";
import { newmessagefeed } from "../../redux";
import "./Messages.css";

class NewMessageFeed extends React.Component {
  populateMessageFeed = () => {
    this.props.newmessagefeed();
  };

  componentDidMount() {
    this.populateMessageFeed();
  }

  render() {
    const { result } = this.props;
    //return result;
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
                    <button>Like</button> | {message.likes.length} |
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
    result: state.messages.newmessagefeed.result,
    loading: state.messages.newmessagefeed.loading,
    error: state.messages.newmessagefeed.error
  }),
  { newmessagefeed }
)(NewMessageFeed);
