import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import Group from "../../components/Group/Group";
import Match from "../../components/Match/Match";
import KnockoutMatch from "../../components/Match/KnockoutMatch";

// styles
import "./Matches.css";


class Matches extends Component {

  mapMatchesInGroup(group) {
    // get matches name and create matches in group array
    
    return this.props.groups[group].matches.map(
      match => match
    );
  }

  getAllMatchesByGroup() {
    const matches = [];

    const groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    Object.keys(this.props.groups).map((group, index) => {
      const groupMatches = this.mapMatchesInGroup(group);
      matches.push(...groupMatches);
    })

    matches.sort((a, b) => a.name - b.name);

    return groupBy(matches, 'matchday');
  }

  // get matches name and create matches in group array
  mapMatchesInRound(round) {
    return this.props.knockout[round].matches.map(
      match => match
    );
  }

  // get matches name and create matches in group array
  mapMatchesInRound(round) {
    const a = this.props.knockout[round].matches.map(
      match => match
    );
    console.log(a)
    return a
  }

  winner(home, groups, knockout) {

    let groupsArr = [];
    let homeStr = home;
    let roundsArr = [];
    let round16 = {};
    let round8 = {};
    let round4 = {};

    Object.keys(groups).map( (index => {
      groupsArr.push(groups[index]);
    }))

    Object.keys(knockout).map( (index => {
      roundsArr.push(knockout[index]);
    }))

    round16 = roundsArr[0].matches
    round8 = roundsArr[1].matches
    round4 = roundsArr[2].matches
    
    switch (homeStr) {
      case "winner_a":
        homeStr = 'Winner A:' + ' ' + groupsArr[0].winner;
        break;
      case "winner_c":
        homeStr = 'Winner C:' + ' ' + groupsArr[2].winner;
        break;
      case "winner_b":
        homeStr = 'Winner B:' + ' ' + groupsArr[1].winner;
        break;
      case "winner_d":
        homeStr = 'Winner D:' + ' ' + groupsArr[3].winner;
        break;
      case "winner_e":
        homeStr = 'Winner E:' + ' ' + groupsArr[4].winner;
        break;
      case "winner_g":
        homeStr = 'Winner G:' + ' ' + groupsArr[6].winner;
        break;
      case "winner_f":
        homeStr = 'Winner F:' + ' ' + groupsArr[5].winner;
        break;
      case "winner_h":
        homeStr = 'Winner H:' + ' ' + groupsArr[7].winner;
        break;
      case 49:
        homeStr = 'Match 49 Winner:' + ' ' + round16[0].winner;
        break;
      case 53:
        homeStr = 'Match 53 Winner:' + ' ' + round16[4].winner;
        break;
      case 51:
        homeStr = 'Match 51 Winner:' + ' ' + round16[2].winner;
        break;
      case 55:
        homeStr = 'Match 55 Winner:' + ' ' + round16[6].winner;
        break;
      case 57:
        homeStr = 'Match 57 Winner:' + ' ' + round8[0].winner;
        break;
      case 59:
        homeStr = 'Match 59 Winner:' + ' ' + round8[2].winner;
        break;
      
      default: "Winner";
    }

    

    return homeStr;
  }

  runner(away, groups, knockout) {

    let groupsArr = [];
    let awayStr = away;
    let roundsArr = [];
    let round16 = {};
    let round8 = {};
    let round4 = {};

    Object.keys(groups).map((index => {
      groupsArr.push(groups[index]);
    }))

    Object.keys(knockout).map((index => {
      roundsArr.push(knockout[index]);
    }))

    round16 = roundsArr[0].matches
    round8 = roundsArr[1].matches
    round4 = roundsArr[2].matches

    switch (awayStr) {
      case "runner_b":
        awayStr = 'Runner b:' + ' ' + groupsArr[1].winner;
        break;
      case "runner_d":
        awayStr = 'Runner D:' + ' ' + groupsArr[3].winner;
        break;
      case "runner_a":
        awayStr = 'Runner A:' + ' ' + groupsArr[0].winner;
        break;
      case "runner_c":
        awayStr = 'Runner C:' + ' ' + groupsArr[2].winner;
        break;
      case "runner_f":
        awayStr = 'Runner F:' + ' ' + groupsArr[5].winner;
        break;
      case "runner_h":
        awayStr = 'Runner H:' + ' ' + groupsArr[7].winner;
        break;
      case "runner_e":
        awayStr = 'Runner E:' + ' ' + groupsArr[4].winner;
        break;
      case "runner_g":
        awayStr = 'Runner G:' + ' ' + groupsArr[6].winner;
        break;
      case 50:
        awayStr = 'Match 50 Winner:' + ' ' + round16[1].winner;
        break;
      case 54:
        awayStr = 'Match 54 Winner:' + ' ' + round16[5].winner;
        break;
      case 52:
        awayStr = 'Match 52 Winner:' + ' ' + round16[3].winner;
        break;
      case 56:
        awayStr = 'Match 56 Winner:' + ' ' + round16[7].winner;
        break;
      case 58:
        awayStr = 'Match 58 Winner:' + ' ' + round8[1].winner;
        break;
      case 60:
        awayStr = 'Match 60 Winner:' + ' ' + round8[3].winner;
        break;

      default:
        "Runner";
    }
    return awayStr;
  }
  
  render() {
    const { groups, teams, stadiums, knockout, isLoading } = this.props;
    const matchesObj = !isLoading && this.getAllMatchesByGroup();
    // console.log(matchesObj)
    if (isLoading) {
      return <span className="Loading">Loading . . .</span>;
    }
    return (
      <div className="Matches">
        <div className="Groups">
          {Object.keys(matchesObj).map((matchday, index) => {
            return(
              <Group key={index} name={`Group Stage - MatchDay ${matchday} of 3`}>
                {matchesObj[matchday].map(match => {
                  return (
                    <Match key={match.name}
                      match={match}
                      homeTeamScore={match.home_result}
                      awayTeamScore={match.away_result}
                      hometeam={teams[match.home_team - 1]}
                      awayteam={teams[match.away_team - 1]}
                      day={match.day} 
                      date={
                        new Date(match.date).getDate() + '/' +
                        (new Date(match.date).getMonth() + 1)
                      }
                      hours = {
                        new Date(match.date).getHours() + ':00'
                      }
                      stadium={stadiums[match.stadium - 1]}
                    />
                  )
                })}
              </Group>
            )
          })}
        </div>
        <div className="Groups">
          {Object.keys(knockout).map((round, index) => {
              return(
                <Group key={index} name={`Knockout Stage - MatchDay ${knockout[round].matchday} - ${knockout[round].name}`}>
                  {knockout[round].matches.map(match => {
                    return (
                      <KnockoutMatch key={match.name}
                      match={match}
                      homeTeamScore={match.home_result}
                      awayTeamScore={match.away_result}
                      knockouthometeam = {this.winner(match.home_team, groups, knockout)}
                      knockoutawayteam = {this.runner(match.away_team, groups, knockout)}
                      day={match.day}
                      date={
                          new Date(match.date).getDate() + '/' +
                          (new Date(match.date).getMonth()+1)
                      }
                      hours={
                          new Date(match.date).getHours() + ':00'
                      }
                      stadium={stadiums[match.stadium - 1]}
                      />
                    )  
                  })} 
                </Group>
              )
            })}
        </div>
      </div>
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



export default connect(mapStateToProps)(Matches);