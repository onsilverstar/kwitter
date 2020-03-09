import React from "react";
import { connect } from "react-redux";
import { newmessagefeed } from "../../redux";
import "./NewMessageFeed.css";

class NewMessageFeed extends React.Component {
  populateMessageFeed = () => {
    this.props.newmessagefeed();
  };

  componentDidMount() {
    this.populateMessageFeed();
  }

  render() {
    //const { result } = this.props;
    //return result;
    return <p>Got messages</p>;
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
