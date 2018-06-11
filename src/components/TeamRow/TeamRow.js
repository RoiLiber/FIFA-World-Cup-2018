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
  //get the team matches and return arr of the matches played 
  teamPlayedMatches(teamMatchesArr) {
    const mp = [];

    Object.keys(teamMatchesArr).map((match, index) => {
        if (teamMatchesArr[index].home_result !== null) {
        mp.push(teamMatchesArr[index]);
      }
    })
    return mp;
  }

  teamWins(team, teamPlayedMatchesArr) {
    const wins = [];

    Object.keys(teamPlayedMatchesArr).map((match, index) => {
        if (teamPlayedMatchesArr[index].home_team == team.id) {
            if(teamPlayedMatchesArr[index].home_result > teamPlayedMatchesArr[index].away_result) {
                wins.push(teamPlayedMatchesArr[index])
            }
        }
        if (teamPlayedMatchesArr[index].away_team == team.id) {
            if (teamPlayedMatchesArr[index].away_result > teamPlayedMatchesArr[index].home_result) {
                wins.push(teamPlayedMatchesArr[index])
            }
        }
    })
    return wins;
  }

  teamLosts(team, teamPlayedMatchesArr) {
    const lost = [];

    Object.keys(teamPlayedMatchesArr).map((match, index) => {
        if (teamPlayedMatchesArr[index].home_team == team.id) {
            if(teamPlayedMatchesArr[index].home_result < teamPlayedMatchesArr[index].away_result) {
                lost.push(teamPlayedMatchesArr[index])
            }
        }
        if (teamPlayedMatchesArr[index].away_team == team.id) {
            if (teamPlayedMatchesArr[index].away_result < teamPlayedMatchesArr[index].home_result) {
                lost.push(teamPlayedMatchesArr[index])
            }
        }
    })
    return lost;
  }

  teamDraws(team, teamPlayedMatchesArr) {
    const draw = [];

    Object.keys(teamPlayedMatchesArr).map((match, index) => {
        if (teamPlayedMatchesArr[index].home_result == teamPlayedMatchesArr[index].away_result) {
            draw.push(teamPlayedMatchesArr[index])
        }
    })
    return draw;
  }

  teamGF(team, teamPlayedMatchesArr) {
    let gf = 0;

    Object.keys(teamPlayedMatchesArr).map((match, index) => {
        if (teamPlayedMatchesArr[index].home_team == team.id) {
            gf += teamPlayedMatchesArr[index].home_result;
        }
        if (teamPlayedMatchesArr[index].away_team == team.id) {
            gf += teamPlayedMatchesArr[index].away_result;
        }
    })
    return gf;
  }

  teamGA(team, teamPlayedMatchesArr) {
    let ga = 0;

    Object.keys(teamPlayedMatchesArr).map((match, index) => {
        if (teamPlayedMatchesArr[index].home_team == team.id) {
            ga -= teamPlayedMatchesArr[index].away_result;
        }
        if (teamPlayedMatchesArr[index].away_team == team.id) {
            ga -= teamPlayedMatchesArr[index].home_result;
        }
    })
    return Math.abs(ga);
  }

  teamPts(teamWinsArr, teamDrawsArr) {
    let Pts = 0;
    const winsPts = teamWinsArr.length * 3;
    const drawPts = teamDrawsArr.length * 1;

    if(winsPts > 0 || drawPts > 0) {
        Pts += winsPts + drawPts;
    }

    return Pts;
  }


  render() {
    const { team, groupMatches, groupTeams } = this.props;

    const teamMatchesArr = this.mapTeamMatchesFromGroupMatches(team, groupMatches);
    const teamPlayedMatchesArr = this.teamPlayedMatches(teamMatchesArr);
    const teamWinsArr = this.teamWins(team, teamPlayedMatchesArr);
    const teamLostsArr = this.teamLosts(team, teamPlayedMatchesArr);
    const teamDrawsArr = this.teamDraws(team, teamPlayedMatchesArr);
    const teamGF = this.teamGF(team, teamPlayedMatchesArr);
    const teamGA = this.teamGA(team, teamPlayedMatchesArr);
    const teamGD = teamGF - teamGA;
    const teamPts = this.teamPts(teamWinsArr, teamDrawsArr);

    return (
        <tr>
        <td>
            <img src={team.flag} alt="team.flag"/><span>{team.name}</span>
        </td>
        <td>{teamPlayedMatchesArr.length}</td>
        <td>{teamWinsArr.length}</td>
        <td>{teamDrawsArr.length}</td>
        <td>{teamLostsArr.length}</td>
        <td>{teamGF}</td>
        <td>{teamGA}</td>
        <td>{teamGD}</td>
        <td>{teamPts}</td>
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