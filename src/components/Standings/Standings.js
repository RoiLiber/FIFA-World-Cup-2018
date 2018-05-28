import React, { Component } from "react";

//Components
import Group from "../Group/Group";

//styles
import "./Standings.css";

const TeamRow = ({ team }) => {
  return (
    <tr>
      <td>
        <img src={team.flag} alt="team.flag" /> <span>{team.name}</span>
      </td>
      <td><input type="number" min="0" max="3" placeholder="0" /></td>
      <td><input type="number" min="0" max="3" placeholder="0" />-<input type="number" min="0" max="3" placeholder="0" />-<input type="number" min="0" max="3" placeholder="0" /></td>
      <td><input type="number" placeholder="0" /> - <input type="number" placeholder="0" /></td>
      <td><input type="number" placeholder="0" /></td>
      <td><input type="number" min="0" max="12" placeholder="0" /></td>
    </tr>
  );
};

class Standings extends Component {

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
    const { groups, teams, isLoading } = this.props;
    
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
                        <abbr title="Played">Pld</abbr>
                      </th>
                      <th>
                        <abbr title="Wins - Draws - Lost">W-D-L</abbr>
                      </th>
                      <th>
                        <abbr title="Goals">G</abbr>
                      </th>
                      <th>
                        <abbr title="Goal difference">GD</abbr>
                      </th>
                      <th>
                        <abbr title="Points">Pts</abbr>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupTeams.map(teamId => (
                      <TeamRow key={teamId} team={teams[teamId - 1]} />
                    ))}
                  </tbody>
                </table>
              </Group>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Standings;