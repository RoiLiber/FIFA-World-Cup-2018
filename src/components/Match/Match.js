import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//styles
import "./Match.css";
import Matches from "../Matches/Matches";

class Match extends Component {

  constructor(props) {
    super(props);
    this.setScoreForHomeTeam = this.setScoreForHomeTeam.bind(this);
    this.setScoreForAwayTeam = this.setScoreForAwayTeam.bind(this);
    
    this.state = {
        draws: false,
        wins: null,
        lost: null,
        homeTeamScore: '',
        awayTeamScore: '' 
    };
  }



  setScoreForHomeTeam(e) {
      this.setState({
        homeTeamScore: e.target.value,
    });
    console.log(this.state);
  }

  setScoreForAwayTeam(e) {
      this.setState({
        homeTeamScore: e.target.value,
    });
    console.log(this.state);
  }
  

  render() {
    const {teams, date, stadium } = this.props;
    return (
        <div className="MatchWrapper">
            <div className="Match">
                <div className="Match__Teams">
                <div className="Team__Score">
                    <img src={teams[0].flag} alt="team.name"/> 
                    <span>{teams[0].name}</span>
                    <span className="team__matchScore">{this.state.homeTeamScore}</span>
                    <input type="number" min="0" max="9" value={this.state.homeTeamScore} onChange={this.setScoreForHomeTeam}/>
                </div> 
                <div className="Team__Score">
                    <img src={teams[1].flag} alt="team.name"/>
                    <span>{teams[1].name}</span>
                    <span className="team__matchScore">{this.state.awayTeamScore}</span>
                    <input type="number" min="0" max="9" value={this.state.awayTeamScore} onChange={this.setScoreForAwayTeam}/> 
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

function mapStateToProps(state) {
    return {
        stadiums: state.stadiums,
        teams: state.teams,
        groups: state.groups,
        knockout: state.knockout
    };
}

export default connect(mapStateToProps)(Match);
