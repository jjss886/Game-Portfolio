import React, { Component } from "react";
import { connect } from "react-redux";
import { setHouseDone, newRound } from "../store";

class EndMessage extends Component {
  closeMsg = () => {
    this.props.setHouseDone();
  };

  nextRound = () => {
    const { newRound, players } = this.props;
    newRound(players);
  };

  render() {
    const { houseDone, players } = this.props;

    return houseDone ? (
      <div className="endMsgFullDiv">
        <div className="endMsgInside">
          <div className="msgTextDiv">
            <h3 className="msgTextHeader">End of Round!</h3>

            {players.map((player, idx) => (
              <MsgText key={idx} player={player} />
            ))}
          </div>

          <div className="engMsgBtnDiv">
            <button type="button" className="endMsgBtn" onClick={this.closeMsg}>
              View Results
            </button>

            <button
              type="button"
              className="endMsgBtn"
              onClick={this.nextRound}
            >
              Next Game
            </button>
          </div>
        </div>
      </div>
    ) : null;
  }
}

const mapState = state => {
  return {
    house: state.house,
    houseDone: state.houseDone,
    players: state.players
  };
};

const mapDispatch = dispatch => {
  return {
    setHouseDone: () => dispatch(setHouseDone()),
    newRound: players => dispatch(newRound(players))
  };
};

export default connect(mapState, mapDispatch)(EndMessage);

// ---------------------- Message Text ---------------------- //

const MsgText = ({ player }) => {
  const { Name, Status } = player,
    msgObj = {
      Busted: "busted! HA (-$10)",
      Blackjack: "hit the Jackpot! NICE (+$15)",
      Won: "beat the House! (+$10)",
      Lost: "crumbled by the House! (-$10)",
      Out: "is broke! BYE"
    };

  return (
    <span className="msgText">
      {Name} {msgObj[Status]}
    </span>
  );
};
