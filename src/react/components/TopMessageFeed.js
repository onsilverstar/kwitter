import React from "react";
import { connect } from "react-redux";
import { topmessagefeed, mymessagefeed, newmessagefeed } from "../../redux";
import "./Messages.css";
import ToggleLike from "./ToggleLike";
import DeleteLike from "./DeleteLike";

class TopMessageFeed extends React.Component {
  state = { topMessagesArray: {} };

  populateMessageFeed = () => {
    this.props.topmessagefeed();
  };

  shouldReload = () => {
    setTimeout(() => {
      this.props.topmessagefeed();
      this.props.newmessagefeed();
      this.props.mymessagefeed();
    }, 200);
  };

  displayTop = props => {
    let fullFeed = this.props.result.messages;
    fullFeed = fullFeed.slice().sort(function(a, b) {
      return b.likes.length - a.likes.length;
    });

    const isReady = props.isReady;
    if (isReady) {
      return fullFeed.map(message => (
        <div key={message.id}>
          <div className="messageFeedMessage">
            <h2>{message.username}</h2>
            <p>{message.text}</p>
            <div>
              {this.likeOrUnlike(message.id, message.likes)} |{" "}
              <span className="likesCount">{message.likes.length}</span>
            </div>
          </div>
        </div>
      ));
    }
    return;
  };

  componentDidMount() {
    this.populateMessageFeed();
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
        <div className="topMessageFeedWrapper">
          {result && <this.displayTop isReady={true} />}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.topmessagefeed.result,
    loading: state.messages.topmessagefeed.loading,
    error: state.messages.topmessagefeed.error,
    username: state.auth.login.result.username
  }),
  { topmessagefeed, newmessagefeed, mymessagefeed }
)(TopMessageFeed);
