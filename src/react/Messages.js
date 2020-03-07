import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";

class Messages extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Messages</h2>
      </>
    );
  }
}

export default userIsAuthenticated(Messages);
