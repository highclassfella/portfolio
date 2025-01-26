import React, { Component } from 'react'
import "../playerStats/playerStats.css";
import github from "../assets/icon_github.png"
import linkedin from "../assets/icon_linkedin.png"
import xing from "../assets/icon_xing.png"
import medium from "../assets/icon_medium.png"

const PlayerStats = () => {
    return (
      <div id="playerStats">
        <h1>YARMINA ANNA MESZAROS LEVEL 34</h1>
        <div id="playerStats__lines">
          <span id="playerStats__lines__thick"></span>
          <span id="playerStats__lines__thin"></span>
        </div>
        <h2>Fullstack Developer</h2>
        <div id="playerStats__icons">
          <img class="icon" src={github} width="50px" />
          <img class="icon" src={linkedin}  />
          <img class="icon" src={xing}  />
          <img class="icon" src={medium}  />
        </div>
      </div>
    );
  };
  
  export default PlayerStats;