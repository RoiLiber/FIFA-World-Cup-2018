import React, { Component } from "react";

//Components
import Group from "../Group/Group";
import Match from "../Match/Match";

//styles
import "./Standings.css";


const TeamRow = ({ team, teamPoints }) => {
  return (
    <tr>
      <td>
        <img src={team.flag} alt="team.flag"/><span>{team.name}</span>
      </td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td><input type="number" min="0" max="12" placeholder="0" /></td>
    </tr>
  );
};

class Standings extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  mapTeamsInGroup(group) {
    // get teams id and create teams in group array
    const teamsInGroup = this.props.groups[group].matches.map(
      match => match.home_team
    );
    // Sort and filter duplicates
    return teamsInGroup
      .sort((a, b) => a - b)
      .filter((item, index, array) => array.indexOf(item) === index);
  }

  render() {
    const { groups, teams, stadiums, isLoading } = this.props;
    
    if (isLoading) {
      return <span className="Loading">Loading . . .</span>;
    }

    return (
      <div className="Standings">
        <div className="Groups">
          {Object.keys(groups).map((group, index) => {
            const groupTeams = this.mapTeamsInGroup(group);

            return (
              <Group key={index} name={groups[group].name}>
                <table className="Group__table">
                  <thead className="Group__table-head">
                    <tr>
                      <th>Team</th>
                      <th>
                        <abbr title="Matches Played">MP</abbr>
                      </th>
                      <th>
                        <abbr title="Wins">W</abbr>
                      </th>
                      <th>
                        <abbr title="Draws">D</abbr>
                      </th>
                      <th>
                        <abbr title="Lost">L</abbr>
                      </th>
                      <th>
                        <abbr title="Goals">GF</abbr>
                      </th>
                      <th>
                        <abbr title="Goals">GA</abbr>
                      </th>
                      <th>
                        <abbr title="Goal difference">GD</abbr>
                      </th>
                      <th>
                        <abbr title="Points">Pts</abbr>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="Group__table-body">
                    {groupTeams.map((teamId) => (
                      <TeamRow key={teamId} team={teams[teamId - 1]} />
                    ))}
                  </tbody>
                </table>
                {/* Group stage matches div  */}
                <div className="Matches">
                  <div className="Groups">
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
                  </div>
                </div>
              </Group>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Standings;