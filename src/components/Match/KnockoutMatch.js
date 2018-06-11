import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//styles
import "./Match.css";

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

class KnockoutMatch extends Component {

    constructor(props) {
        super(props)

        this.setHomeScore = this.setHomeScore.bind(this);
        this.setAwayScore = this.setAwayScore.bind(this);

        this.state = {
            isHidden: true,
            isShow_home: false,
            isShow_away: false,
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
            homeTeamScore: e.target.value,
            isShow_home: this.state.isHidden
        });
    }

    setAwayScore(e) {
        this.setState({
            awayTeamScore: e.target.value,
            isShow_away: this.state.isHidden
        });
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
    const { date, hours, stadium, knockouthometeam, knockoutawayteam, day, match } = this.props;
    
    return (
        <div className="MatchWrapper">
            <div className="Match">
                <div className="Match__Teams">
                <div className="Team__Score">
                    {/* <img src={team[0].flag} alt="team.name"/>  */}
                    <span>{knockouthometeam}</span>
                    <span className="Scored">Score:<span>{this.state.homeTeamScore}</span></span>
                    {!this.state.isShow_home &&
                    <input 
                        type="number" 
                        id="coure" 
                        ref="soure" 
                        min="0" 
                        max="9" 
                        value={this.state.homeTeamScore} 
                        onChange={this.setHomeScore}
                    />}
                </div> 
                <div className="Team__Score">
                    {/* <img src={team[1].flag} alt="team.name"/> */}
                    <span>{knockoutawayteam}</span>
                    <span className="Scored">Score:<span>{this.state.awayTeamScore}</span></span>
                    {!this.state.isShow_away &&
                    <input 
                        type="number" 
                        id="coure" 
                        ref="soure" 
                        min="0" 
                        max="9" 
                        value={this.state.awayTeamScore} 
                        onChange={this.setAwayScore}
                    />} 
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
        knockout: state.knockout
    };
}

export default connect(mapStateToProps)(KnockoutMatch);


