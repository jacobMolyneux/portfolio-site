import React from "react";
import { ProjectCard } from "./projectCard";
import "./stylesheets/home.css";
import "./images/languages/bootstrap-social-logo.png";
import "./images/languages/CSSLogo.png";
import "./images/languages/django-logo.png";
import "./images/languages/HtmlLogo.png";
import "./images/languages/JSLogo.png";
import "./images/languages/nodelogo.png";
import "./images/languages/pythonLogo.png";
import "./images/languages/ReactLogo.png";
import "./images/languages/RLogo.png";

export default class HomePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="homepageContainer">
        <div id="greetingDiv">
          <h1 id="greeting">
            Hello World! <br />
            Welcome to my Portfolio
          </h1>
          <button id="learnMoreButton">Learn More</button>
        </div>

        <div id="aboutSection">
          <h1>About me</h1>
          <div id="aboutMeDetails">
            <div id="introduction">
              <p id="introPara">
                I am 22 years old and a self-taught web-developer working
                towards being a full stack developer. I graduated from Western
                University with a double major in Economics and Political
                Science in July 2021.
                <br />
                <br />I enjoy learning and building new things and programming
                has allowed me to do that. Here you can take a look at some of
                the things that I've built and projects I'm proud of.
              </p>
            </div>

            <div id="techStack">
              <h2>Technologies I Know</h2>
              <ul id="techStackList">
                <li>
                  <div>
                    <img
                      className="ListImage"
                      src="./images/languages/JSLogo.png"
                      alt="javascript Logo"
                    />
                    Javascript
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="listImage"
                      src="./images/languages/pythonLogo.png"
                      alt="Python Logo"
                    />
                    Python
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="ListImage"
                      src="./images/languages/bootstrap-social-logo.png"
                      alt="Bootstrap Logo"
                    />
                    Bootstrap
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="ListImage"
                      src="./images/languages/ReactLogo.png"
                      alt="React Logo"
                    />
                    React
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="ListImage"
                      src="./images/languages/nodelogo.png"
                      alt="Node.js Logo"
                    />
                    Node.js
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="ListImage"
                      src="./images/languages/django-logo.png"
                      alt="Django Logo"
                    />
                    Django
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="ListImage"
                      src="./images/languages/RLogo.png"
                      alt="R Logo"
                    />
                    R
                  </div>
                </li>
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
