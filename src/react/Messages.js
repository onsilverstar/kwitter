import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import "./components/NewMessageFeed.css";
import NewMessageFeed from "./components/NewMessageFeed";

class Messages extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Messages</h2>
        <div className="messagesWrapper">
          <div className="messageColumn">
            <h3>New Message</h3>
          </div>
          <div className="messageColumn">
            <h3>My Messages</h3>
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
