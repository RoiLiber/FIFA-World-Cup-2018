import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//styles
import "./Group.css";

class Group extends Component {
  render() {
    return (
      <section className="Group">
        <div className="Group_title">{this.props.name}</div>
        {this.props.children}
      </section>
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

export default connect(mapStateToProps)(Group);