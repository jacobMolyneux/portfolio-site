import React from "react";
import { ProjectCard } from "./projectCard";
import "./stylesheets/home.css";

export default class HomePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="homepageContainer">
        <div id="greetingDiv">
          <h1>Hello welcome to my page!</h1>
        </div>
        <div id="aboutSection">
          <h1>About me</h1>
          <div id="aboutMeDetails">
            <div id="introduction">
              <p>
                I am 22 years old and a self-taugh web-developer working towards
                being a full stack developer. I graduated from Western
                University with a double major in Economics and Political
                Science in july 2021.{" "}
              </p>
            </div>
            <div id="techStack">
              <h2>Technologies I Know</h2>
              <ul id="techStackList">
                <li>Javascript</li>
                <li>Python</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Django</li>
                <li>R</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="contentsDiv">
          <ProjectCard
            className="projectCard"
            projectName="Twitter Clone"
            description="this is a replication of twitter made with React, CSS and hosted on firebase"
          />
          <ProjectCard
            className="projectCard"
            projectName="TicTacToe"
            description="A TicTacToe application made with vanilla Js"
          />
          <ProjectCard
            className="projectCard"
            projectName="Weather App"
            decription="A weather app that shows you the current weather and a three day forecast made with data from an API. I made this with vanilla JS and CSS"
          />
        </div>
      </div>
    );
  }
}
