import React, { Component } from "react";

// Components
import Group from "../Group/Group";

// styles
import "./GroupStageMatches.css";

const Match = ({ teams , date, stadium, city }) => {
  return (
    <div className="Match">
      <div className="Team__Score">
        <img src={teams[0].flag} alt="team.name" /> <span>{teams[0].name}</span> <input type="number" min="0" max="9" placeholder="0" />
      </div>
       -VS- 
      <div className="Team__Score Team__Score2">
        <input type="number" min="0" max="9" placeholder="0" /> <span>{teams[1].name}</span> <img src={teams[1].flag} alt="team.name" /> 
      </div>
      <div className="Match__Details">
        <span>{date}</span>
        <span>{stadium.name}</span>
        <span>{stadium.city}</span>    
      </div>
    </div>
    
  );
};

class GroupStageMatches extends Component {
  render() {
    const { groups, teams, stadiums, isLoading } = this.props;

    if (isLoading) {
      return <span>Loading...</span>;
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