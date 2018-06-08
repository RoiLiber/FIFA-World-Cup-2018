import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
                    hometeam={teams[match.home_team - 1]}
                    awayteam={teams[match.away_team - 1]}
                    day={match.day}
                    date = {
                      new Date(match.date).getDate() + '/' +
                      (new Date(match.date).getMonth() + 1)
                    }
                    hours = {
                      new Date(match.date).getHours() + ':00'
                    }
                    stadium= {stadiums[match.stadium - 1]}
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

function mapStateToProps(state) {
  return {
    stadiums: state.stadiums,
    teams: state.teams,
    groups: state.groups,
    knockout: state.knockout
  };
}

export default connect(mapStateToProps)(GroupStageMatches);