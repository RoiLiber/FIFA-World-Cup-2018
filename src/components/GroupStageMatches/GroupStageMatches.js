import React, { Component } from "react";

// Components
import Group from "../Group/Group";
import Match from "../Match/Match";

// styles
import "./GroupStageMatches.css";


class GroupStageMatches extends Component {
  render() {
    const { groups, teams, stadiums, isLoading } = this.props;

    if (isLoading) {
      return <span className="Loading">Loading . . .</span>;
    }

    return (
      <div className="Matches">
        <div className="Groups">
          {Object.keys(groups).map((group, index) => {
            return (
              <Group key={index} name={groups[group].name}>
                {groups[group].matches.map(match => (
                  <Match
                    key={match.name}
                    teams={[
                      teams[match.home_team - 1],
                      teams[match.away_team - 1]
                    ]}
                    date = {
                        new Date(match.date).getDate() + '/' +
                        new Date(match.date).getMonth() + ' ' + 
                        new Date(match.date).getHours() + ':00'   
                    }
                    stadium= {stadiums[match.stadium - 1]}
                    city= {stadiums[match.stadium - 1]}
                  />
                ))}
              </Group>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GroupStageMatches;