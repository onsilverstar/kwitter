import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Header />
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}

export default NotFound;
