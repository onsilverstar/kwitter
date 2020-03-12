import React from "react";
import { connect } from "react-redux";
import { newmessagefeed } from "../../redux";
import "./Messages.css";
import ToggleLike from "./ToggleLike";

//still need to add deleteLike component if message is alreeady liked by user
// still need to force render when like button is clicked or message is deleted

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
      <div>
        <div className="messageFeedWrapper">
          {result &&
            result.messages.map(message => (
              <div key={message.id}>
                <div className="messageFeedMessage">
                  <h2>{message.username}</h2>
                  <p>{message.text}</p>
                  <div>
                    <ToggleLike messageId={message.id} /> |{" "}
                    {message.likes.length} |
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
    error: state.messages.newmessagefeed.error
  }),
  { newmessagefeed }
)(NewMessageFeed);
