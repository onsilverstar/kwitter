import React from "react";
import { Menu, MessageFeed } from "./components";
import { userIsAuthenticated } from "./HOCs";

class Messages extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Messages</h2>
        <div id="messagesWrapper">
          <div className="messageSection">
            <h3>Post Message</h3>
            <MessageFeed />
          </div>
          <div className="messageSection">
            <h3>My Messages</h3>
            <MessageFeed />
          </div>
          <div className="messageSection">
            <h3>Latest Messages</h3>
            <MessageFeed />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Messages);
