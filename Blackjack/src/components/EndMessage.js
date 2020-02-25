import React, { Component } from "react";
import { connect } from "react-redux";

class EndMessage extends Component {
  render() {
    const { houseDone } = this.props;

    return houseDone ? (
      <div className="endMsgFullDiv">
        <div className="endMsgInside">Message</div>
      </div>
    ) : null;
  }
}

const mapState = state => {
  return { house: state.house, houseDone: state.houseDone };
};

export default connect(mapState)(EndMessage);
