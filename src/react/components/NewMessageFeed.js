import React from "react";
import { connect } from "react-redux";
import { newmessagefeed } from "../../redux";
import "./Messages.css";
import ToggleLike from "./ToggleLike";
import DeleteLike from "./DeleteLike";

class NewMessageFeed extends React.Component {
  populateMessageFeed = () => {
    this.props.newmessagefeed();
  };

  componentDidMount() {
    this.populateMessageFeed();
  }

  likeOrUnlike = (messageId, likesArray) => {
    let filteredMessageLikes = likesArray.filter(
      like => like.username === this.props.username
    );
    if (filteredMessageLikes.length > 0) {
      return <DeleteLike likesId={filteredMessageLikes[0].id} />;
    } else {
      return <ToggleLike messageId={messageId} />;
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
                    {message.likes.length}
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
    result: state.messages.newmessagefeed.result,
    loading: state.messages.newmessagefeed.loading,
    error: state.messages.newmessagefeed.error,
    username: state.auth.login.result.username
  }),
  { newmessagefeed }
)(NewMessageFeed);
