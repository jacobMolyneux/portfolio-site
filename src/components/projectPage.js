import React from "react";
import { ProjectCard } from "./projectCard";
import weatherAppPhoto from "./images/projectImages/weatherApp.png";
import PomadoroAppPhoto from "./images/projectImages/PomadoroApp.png";
import twitterClonePhoto from "./images/projectImages/TwitterClone.png";
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
          description="this is a replication of twitter made with React, CSS and hosted on firebase"
        />
        <ProjectCard
          className="projectCard"
          projectName="Pomadoro App"
          image={PomadoroAppPhoto}
          description="A Pomadoro Study app that allows you study with a timer and also has a to do list built into it."
        />
        <ProjectCard
          className="projectCard"
          projectName="Weather App"
          image={weatherAppPhoto}
          description="A weather app that shows you the current weather and a three day forecast made with data from an API. I made this with vanilla JS and CSS"
        />
        <ProjectCard
          className="projectCard"
          projectName="TicTacToe"
          image=""
          description="A Tic-Tac-Toe application. This was one of the first applications that I ever made. I created this with JavaScript and CSS"
        />
        <ProjectCard
          className="projectCard"
          projectName="Crypto Store"
          image=""
          description="This is an example of a store where it searches different crypto currenct sites for the prices of coins and allows users find the best possible price. I made this with React and CSS"
        />
        <ProjectCard
          className="ProjectCard"
          projectName="Iphone Store"
          image=""
          description="This is a fake store that sells an Iphone and people can add them to their cart I made this with HTML, CSS and Javascript"
        />
      </div>
    </div>
  );
};

export { ProjectsPage };
