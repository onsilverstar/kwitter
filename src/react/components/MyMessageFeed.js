import React from "react";
import { connect } from "react-redux";
import { mymessagefeed, newmessagefeed, topmessagefeed } from "../../redux";
import "./Messages.css";
import DeleteMessage from "../components/DeleteMessage";
import ToggleLike from "./ToggleLike";
import DeleteLike from "./DeleteLike";

class MyMessageFeed extends React.Component {
  state = { username: "" };

  populateMessageFeed = () => {
    this.props.mymessagefeed();
  };

  shouldReload = () => {
    setTimeout(() => {
      this.props.mymessagefeed();
      this.props.newmessagefeed();
      this.props.topmessagefeed();
    }, 200);
  };

  componentDidMount() {
    this.populateMessageFeed();
    document.body.scrollTop = 0;
  }

  likeOrUnlike = (messageId, likesArray) => {
    let filteredMessageLikes = likesArray.filter(
      like => like.username === this.props.username
    );
    if (filteredMessageLikes.length > 0) {
      return (
        <DeleteLike
          likesId={filteredMessageLikes[0].id}
          reloadParent={this.shouldReload.bind(this)}
        />
      );
    } else {
      return (
        <ToggleLike
          messageId={messageId}
          reloadParent={this.shouldReload.bind(this)}
        />
      );
    }
  };

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
                    {this.likeOrUnlike(message.id, message.likes)} |{" "}
                    <span className="likesCount">{message.likes.length}</span> |{" "}
                    <DeleteMessage
                      messageId={message.id}
                      reloadParent={this.shouldReload.bind(this)}
                    />
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
  { mymessagefeed, newmessagefeed, topmessagefeed }
)(MyMessageFeed);
