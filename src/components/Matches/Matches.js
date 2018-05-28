import React, { Component } from "react";

// Components
import Group from "../Group/Group";

// styles
import "./Matches.css";


const Match = ({ teams , date, stadium, city }) => {
  return (
    <div className="Match">
      <div className="Match__Teams">
        <div className="Team__Score">
          <img src={teams[0].flag} alt="team.name"/> 
          <span>{teams[0].name}</span> 
          <input type="number" min="0" max="9" placeholder="0"/>
        </div> 
        <div className="Team__Score">
           <img src={teams[1].flag} alt="team.name"/>
          <span>{teams[1].name}</span> 
          <input type="number" min="0" max="9" placeholder="0"/> 
        </div>      
      </div>
      <div className="Match__Details">
        <span>{date}</span>
        <span>{stadium.name}</span>
        <span>{stadium.city}</span>    
      </div>
    </div>
  );
};


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

  render() {
    const { groups, teams, stadiums, isLoading } = this.props;
    const matchesObj = !isLoading && this.getAllMatchesByGroup();
    // console.log(matchesObj)
    if (isLoading) {
      return <span className="Loading">Loading . . .</span>;
    }

    return (
      <div className="Matches">
        <div className="Groups">
          {
            Object.keys(matchesObj).map((matchday, index) => {
              return(
                <Group key={index} name={`Group Stage - MatchDay ${matchday} of 3`}>
                  {
                    matchesObj[matchday].map(match => {
                      return (
                        <Match key={match.name} teams={
                          [
                            teams[match.home_team - 1],
                            teams[match.away_team - 1]
                          ]
                        }
                        date={
                          new Date(match.date).getDate() + '/' +
                          new Date(match.date).getMonth() + ' ' +
                          new Date(match.date).getHours() + ':00'
                        }
                        stadium={stadiums[match.stadium - 1]}/>
                      )
                    })
                  }
                </Group>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Matches;