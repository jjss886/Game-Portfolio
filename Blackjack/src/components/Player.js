import React, { Component } from "react";
import { connect } from "react-redux";

const Player = ({ player }) => (
  <div className="playerDiv">
    <span>{player.Name}</span>
    <span>{player.ID}</span>
    <span>{player.Points}</span>
    <span>{player.Hand}</span>
  </div>
);

export default Player;

// class Player extends Component {
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

// const mapState = state => {
//   return {};
// };

// const mapDispatch = dispatch => {
//   return {};
// };

// export default connect(mapState, mapDispatch)(Player);
