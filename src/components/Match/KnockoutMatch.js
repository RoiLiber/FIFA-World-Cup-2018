import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//components
import ScoreInput from "../ScoreInput/ScoreInput";

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

class KnockoutMatch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isHidden: true,
            teamResult: null
        }
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
                    <ScoreInput teamResult={this.state.teamResult}/>
                </div> 
                <div className="Team__Score">
                    {/* <img src={team[1].flag} alt="team.name"/> */}
                    <span>{knockoutawayteam}</span>
                    <ScoreInput teamResult={this.state.teamResult}/> 
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


