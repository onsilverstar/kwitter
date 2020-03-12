import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import "./components/Messages.css";
import NewMessageFeed from "./components/NewMessageFeed";
import MyMessageFeed from "./components/MyMessageFeed";
import PostMessage from "./components/PostMessage";

class Messages extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Messages</h2>
        <div className="messagesWrapper">
          <div className="postMessageColumn">
            <h3>Post Message</h3>
            <PostMessage />
          </div>
          <div className="messageColumn">
            <h3>My Messages</h3>
            <MyMessageFeed />
          </div>
          <div className="messageColumn">
            <h3>Latest Messages</h3>
            <NewMessageFeed />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Messages);
