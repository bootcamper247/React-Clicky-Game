import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <nav class="navbar">
      <span>Clicky Game</span>
      <span>Score:  {props.score}</span>
      <span>Top Score: {props.topScore}</span>
    </nav>

  );
}

export default Navbar;
