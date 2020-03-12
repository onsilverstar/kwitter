import React from "react";
import { connect } from "react-redux";
import { mymessagefeed, store } from "../../redux";
import "./Messages.css";
import DeleteMessage from "../components/DeleteMessage";
import ToggleLike from "./ToggleLike";

class MyMessageFeed extends React.Component {
  populateMessageFeed = () => {
    this.props.mymessagefeed();
  };

  componentDidMount() {
    this.populateMessageFeed();
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const { result } = this.props;

    return (
      <div>
        <div className="messageFeedWrapper">
          {result &&
            result.messages.map(message => (
              <div key={message.id}>
                <div className="messageFeedMessage">
                  <h2>{message.username}</h2>
                  <p>{message.text}</p>
                  <div>
                    <ToggleLike
                      messageId={message.id}
                      messageLikesArray={message.likes}
                    />{" "}
                    | {message.likes.length} |{" "}
                    <DeleteMessage messageId={message.id} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
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
