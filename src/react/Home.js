import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <div className="mainContentWrapperHome" id="yourAnchorTag">
          <h2>The Online Message Support System for Quitters.</h2>
          <LoginForm />
        </div>
        <Footer />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
