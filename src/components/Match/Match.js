import React, { Component } from "react";

//styles
import "./Match.css";

class Match extends Component {
  render() {

    const {teams, date, stadium, city} = this.props;

    return (
        <div className="MatchWrapper">
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
            <div className="StadiumImg">
                <img src={stadium.image} alt="stadiumImg"/>
            </div>
        </div>
    );
  }
}

export default Match;
