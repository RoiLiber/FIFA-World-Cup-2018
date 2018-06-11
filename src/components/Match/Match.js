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
    
    constructor(props) {
        super(props)

        this.setHomeScore = this.setHomeScore.bind(this);
        this.setAwayScore = this.setAwayScore.bind(this);

        this.state = {
            isHidden: true,
            homeTeamScore: props.match.home_result,
            awayTeamScore: props.match.away_result
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.home_result !== this.props.match.home_result || nextProps.match.away_result !== this.props.match.away_result) {
            this.setState({
                homeTeamScore: nextProps.match.home_result,
                awayTeamScore: nextProps.match.home_result
            })
        }
    }

    setHomeScore(e) {
        this.setState({
            homeTeamScore: e.target.value
        });
    }

    setAwayScore(e) {
        this.setState({
            awayTeamScore: e.target.value
        });
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
  
    render() {
    const { date, hours, stadium, hometeam, awayteam, match, day } = this.props;

    return (
        <div className="MatchWrapper">
            <div className="Match">
                <div className="Match__Teams">
                <div className="Team__Score">
                    <img src={hometeam.flag} alt="team.name"/> 
                    <span>{hometeam.name}</span>
                    <span>Score:{this.state.homeTeamScore}</span>
                    <input type="number" id="coure" ref="soure" min="0" max="9" onChange={this.setHomeScore} />
                </div> 
                <div className="Team__Score">
                    <img src={awayteam.flag} alt="team.name"/>
                    <span>{awayteam.name}</span>
                    <span>Score:{this.state.awayTeamScore}</span>
                    <input type="number" id="coure" ref="soure" min="0" max="9" onChange={this.setAwayScore} /> 
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
