import React, { Component } from "react";

//styles
import "./NotFound.css";

//img
import NotFoundImg from "./404.jpg";

class NotFound extends Component {
  render() {
    return <div className="NotFound"><img src={NotFoundImg} alt="notFound"/></div>;
  }
}

export default NotFound;