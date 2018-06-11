import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ScoreInput extends Component {
    
    constructor(props) {
        super(props)

        this.setScore = this.setScore.bind(this);
        this.state = {
            isHidden: true,
            score: props.teamResult
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.teamResult !== this.props.teamResult) {
            this.setState({
                score: nextProps.teamResult
            })
        }
    }

    setScore(e) {
        this.setState({
            score: e.target.value
        });
    }
  
    render() {
    const { teamResult } = this.props;

    return (
        <div>
            <span>Score:{this.state.score}</span>
            <input type="number" id="coure" ref="soure" min="0" max="9" onChange={this.setScore} />
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

export default connect(mapStateToProps)(ScoreInput);