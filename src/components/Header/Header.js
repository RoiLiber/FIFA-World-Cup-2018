import React from "react";
import { NavLink } from "react-router-dom";

// styles
import "./Header.css";

// img
import logo from './worldcup-logo.png';
import boll from './ball.png';

const Header = () => (
  <header className="Header">
    <div className="Header_Top">
        <img className="Logo" src={logo} alt="logo" />
        <span className="Header_Title">FIFA World Cup 2018 - Russia</span>
        <img className="Boll Boll1" src={boll} alt="ball" />
        <img className="Boll Boll2" src={boll} alt="ball" />
        {/* <img className="Boll Boll3" src={boll} alt="ball" /> */}
        {/* <img className="Boll Boll4" src={boll} alt="ball" /> */}
    </div>
    <div className="Header_Nav">
        <NavLink exact to="/">Matches</NavLink>
        <NavLink to="/Standings">Standings</NavLink>  
        <NavLink to="/GroupStageMatches">Group Stage Matches</NavLink>
    </div>
  </header>
);

export default Header;