import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//styles
import "./TeamRow.css";

class TeamRow extends Component {

  // map the group matches and return 3 matches for each team
  mapTeamMatchesFromGroupMatches(team, groupMatches) {
    const teamMatches = [];
    

    groupMatches.map((Match, index) => {
      if (groupMatches[index].home_team == team.id) {
        teamMatches.push(groupMatches[index]); 
      }
      if (groupMatches[index].away_team == team.id) {
        teamMatches.push(groupMatches[index]);
      }
    })

    return teamMatches;
  }
  //get the team matches and return arr of the played 
  teamPlayedMatches(teamMatchesArr) {
    const mp = [];

    Object.keys(teamMatchesArr).map((match, index) => {
      if (teamMatchesArr[index].home_result !== null) {
        mp.push(teamMatchesArr[index]);
      }
    })
    console.log(mp)
    return mp.length;
  }


  render() {
    const { team, groupMatches } = this.props;
    const teamMatchesArr = this.mapTeamMatchesFromGroupMatches(team, groupMatches);
    const teamPlayedMatchesArr = this.teamPlayedMatches(teamMatchesArr);

    return (
    <tr>
      <td>
        <img src={team.flag} alt="team.flag"/><span>{team.name}</span>
      </td>
      <td>{teamPlayedMatchesArr}</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  );

  }
}

function mapStateToProps(state) {
    return {
        stadiums: state.stadiums,
        teams: state.teams,
        groups: state.groups,
        knockout: state.knockout
    };
}

export default connect(mapStateToProps)(TeamRow);