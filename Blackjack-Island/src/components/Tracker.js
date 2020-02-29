import React, { Component } from "react";
import { connect } from "react-redux";

class Tracker extends Component {
  render() {
    const { players, mode } = this.props;

    return (
      <div className="trackerFullDiv">
        <hr className="trackerHR" />

        <h3>Money Tracker!</h3>

        <hr className="trackerHR" />

        {players.length ? (
          players.map((player, idx) => (
            <span key={idx} className="trackPlayer">
              <strong>{player.Name}</strong>: {!isNaN(player.Cash) ? "$" : null}
              {player.Cash}
            </span>
          ))
        ) : (
          <span className="trackPlayer">No Players</span>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    players: state.players,
    mode: state.mode
  };
};

export default connect(mapState)(Tracker);
