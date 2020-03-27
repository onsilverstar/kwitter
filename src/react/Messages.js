import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import "./components/Messages.css";
import NewMessageFeed from "./components/NewMessageFeed";
import MyMessageFeed from "./components/MyMessageFeed";
import PostMessage from "./components/PostMessage";
import TopMessageFeed from "./components/TopMessageFeed";
import { Header2 } from "./components/Header2";
import { Footer } from "./components/Footer";
import "./Messages.css";

class Messages extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="mainContentWrapperMessages">
          <h2 id="messagesHeader">Message Center</h2>
          <div className="messagesWrapper">
            <div className="firstMessageColumn">
              <div className="postMessageColumn">
                <h3>Post Message</h3>
                <PostMessage />
              </div>
              <br />
              <div className="postMessageColumn">
                <h3>Top Trending</h3>
                <TopMessageFeed />
              </div>
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
        </div>
        <Footer />
      </>
    );
  }
}

export default userIsAuthenticated(Messages);
