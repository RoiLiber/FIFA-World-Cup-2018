import React, { Component } from "react";

// Components
import Group from "../Group/Group";
import Match from "../Match/Match";

// styles
import "./Matches.css";


class Matches extends Component {

  mapMatchesInGroup(group) {
    // get matches name and create matches in group array
    
    return this.props.groups[group].matches.map(
      match => match
    );
  }

  mapMatchesInRound(round) {
    // get matches name and create matches in group array

    return this.props.knockout[round].matches.map(
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
  
  render() {
    const { groups, teams, stadiums, knockout, isLoading } = this.props;
    const matchesObj = !isLoading && this.getAllMatchesByGroup();
    console.log(matchesObj)
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
                          teams={[teams[match.home_team - 1],
                                  teams[match.away_team - 1]]
                                }
                          date={
                          new Date(match.date).getDate() + '/' +
                          new Date(match.date).getMonth() + ' ' +  
                          new Date(match.date).getHours() + ':00'
                          }
                          stadium={stadiums[match.stadium - 1]}
                        />
                      )
                    })
                  }
                </Group>
              )
            })}
        </div>
        <div className="Groups">
          {Object.keys(knockout).map((round, index) => {
            // console.log(knockout)
            // debugger
              return(
                <Group key={index} name={`Knockout Stage - MatchDay - ${round}`}>
                 
                </Group>
              )
            })}
        </div>
      </div>
    );
  }
}

export default Matches;