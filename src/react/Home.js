import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>The Online Message Support System for Quitters.</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
