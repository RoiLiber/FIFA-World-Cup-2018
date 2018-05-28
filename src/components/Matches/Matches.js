import React, { Component } from "react";

// Components
import Group from "../Group/Group";

// styles
import "./Matches.css";

const MatchGame = ({groups, teams, stadiums}) => {
  return (
    <div className="Match">
      <p className="Group__Playing"></p>
      <div className="Teams__Playing">
        <div className="Teams__Playing">
          <img src='' alt="team.flag" /> <span></span>
        </div>
        <div className="Teams__Playing">
          <img src='' alt="team.flag" /> <span></span>
        </div>
      </div>
      <div className="Game__Info">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}; 


class Matches extends Component {



  render() {
    const { groups, teams, stadiums, isLoading } = this.props;

    if (isLoading) {
      return <span>Loading...</span>;
    }

    return (
      <div className="Matches">
        
      </div>
    );
  }
}

export default Matches;