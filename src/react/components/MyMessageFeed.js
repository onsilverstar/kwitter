import React from "react";
import { connect } from "react-redux";
import { mymessagefeed } from "../../redux";
import "./NewMessageFeed.css";

class MyMessageFeed extends React.Component {
  populateMessageFeed = () => {
    this.props.mymessagefeed();
  };

  componentDidMount() {
    this.populateMessageFeed();
  }

  render() {
    //const { result } = this.props;
    //return result;
    return <p>Got my messages</p>;
  }
}

export default connect(
  state => ({
    result: state.messages.mymessagefeed.result,
    loading: state.messages.mymessagefeed.loading,
    error: state.messages.mymessagefeed.error
  }),
  { mymessagefeed }
)(MyMessageFeed);
