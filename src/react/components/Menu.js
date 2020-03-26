import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import logo from "../../images/logo60H.png";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <img src={logo} alt="logo" className="logoImage" />
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messages">Message Center</Link>
            <Link to="/profiles/:username">Profile</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
        {!this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/register">Register</Link>
            <Link to="/">Login</Link>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error
  }),
  { logout }
)(Menu);
