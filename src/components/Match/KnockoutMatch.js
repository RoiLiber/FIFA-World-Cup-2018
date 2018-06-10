import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    const { date, hours, stadium, knockouthometeam, knockoutawayteam, day } = this.props;
    return (
        <div className="MatchWrapper">
            <div className="Match">
                <div className="Match__Teams">
                <div className="Team__Score">
                    {/* <img src={team[0].flag} alt="team.name"/>  */}
                    <span>{knockouthometeam}</span>
                    <span className="team__matchScore"></span>
                    <input type="number" min="0" max="9"/>
                </div> 
                <div className="Team__Score">
                    {/* <img src={team[1].flag} alt="team.name"/> */}
                    <span>{knockoutawayteam}</span>
                    <span className="team__matchScore"></span>
                    <input type="number" min="0" max="9"/> 
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


