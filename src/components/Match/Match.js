import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//actions
import { chengHomeTeamResult, chengAwayTeamResult } from "../../actions/actions-match-result";

//styles
import "./Match.css";
import Matches from "../Matches/Matches";


class StadiumImg extends Component {
  render() {
    const { stadium } = this.props;
    return (
        <div className="StadiumImg">
            <img src={stadium.image} alt="stadiumImg"/>
        </div>
    );
  }
}

class Match extends Component {
    
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
  
    render() {
    const { date, hours, stadium, hometeam, awayteam, match, day } = this.props;

    if(!this.props.matchTeamResult == null) {
        return (<div>0</div>);
    }

    
    // const awayteamscore = this.refs.awayTeam;
    // const hometeamscore = this.refs.homeTeam;
    console.log(match);
    return (
        <div className="MatchWrapper">
            <div className="Match">
                <div className="Match__Teams">
                <div className="Team__Score">
                    <img src={hometeam.flag} alt="team.name"/> 
                    <span>{hometeam.name}</span>
                    <span className="team__matchScore"></span>
                    <span>score: {this.props.matchTeamResult}</span>
                    <input type="number" id="homeTeam" ref="homeTeam" min="0" max="9" onChange={this.props.chengHomeTeamResult}/>
                </div> 
                <div className="Team__Score">
                    <img src={awayteam.flag} alt="team.name"/>
                    <span>{awayteam.name}</span>
                    <span className="team__matchScore"></span>
                    <span>score: {this.props.matchTeamResult}</span>
                    <input type="number" id="awayTeam" ref="awayTeam" min="0" max="9" onChange={this.props.chengAwayTeamResult}/> 
                </div>      
                </div>
                <div className="Match__Details">
                <span className="date">
                    <span className="day">{day},</span>
                    <span>{date}</span>
                    <span>{hours}</span>
                </span>
                <span className="stadiumCity">{stadium.city}</span>
                <span className="stadiumName" onClick={this.toggleHidden.bind(this)}>{stadium.name}</span>  
                </div>
            </div>
            {!this.state.isHidden && <StadiumImg key={stadium.name} stadium={stadium}/>}
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        stadiums: state.stadiums,
        teams: state.teams,
        groups: state.groups,
        knockout: state.knockout,
        matchTeamResult: state.activeMatchResult
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
        {
            chengHomeTeamResult: chengHomeTeamResult, 
            chengAwayTeamResult: chengAwayTeamResult
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);
