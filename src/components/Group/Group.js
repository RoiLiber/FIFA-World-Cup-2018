import React, { Component } from "react";

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

export default Group;