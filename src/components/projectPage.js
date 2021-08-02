import React from "react";
import { ProjectCard } from "./projectCard";
import weatherAppPhoto from "./images/projectImages/weatherApp.png";
import PomadoroAppPhoto from "./images/projectImages/PomadoroApp.png";
import twitterClonePhoto from "./images/projectImages/TwitterClone.png";
import ticTacToePhoto from "./images/projectImages/tictactoe.png";
import "./stylesheets/projectspage.css";

const ProjectsPage = () => {
  return (
    <div id="Container">
      <h1>My Projects</h1>
      <div id="projectsContainer">
        <ProjectCard
          className="projectCard"
          image={twitterClonePhoto}
          projectName="Twitter Clone"
          link="https://github.com/jacobMolyneux/twitterClone"
          description="this is a replication of twitter made with React, CSS and hosted on firebase"
        />
        <ProjectCard
          className="projectCard"
          projectName="Pomadoro App"
          image={PomadoroAppPhoto}
          link="https://github.com/jacobMolyneux/ToDoApp"
          description="A Pomadoro Study app that allows you study with a timer and also has a to do list built into it."
        />
        <ProjectCard
          className="projectCard"
          projectName="Weather App"
          image={weatherAppPhoto}
          link="https://github.com/jacobMolyneux/WeatherApp"
          description="A weather app that shows you the current weather and a three day forecast made with data from an API. I made this with vanilla JS and CSS"
        />
        <ProjectCard
          className="projectCard"
          projectName="TicTacToe"
          image={ticTacToePhoto}
          link="https://github.com/jacobMolyneux/TicTacToe"
          description="A Tic-Tac-Toe application. This was one of the first applications that I ever made. I created this with JavaScript and CSS"
        />
        <ProjectCard
          className="projectCard"
          projectName="Crypto Store"
          image=""
          description="This is an example of a store where it searches different crypto currenct sites for the prices of coins and allows users find the best possible price. I made this with React and CSS"
        />
      </div>
    </div>
  );
};

export { ProjectsPage };
