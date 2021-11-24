import React from "react";
import { ProjectCard } from "./projectCard";
import "./stylesheets/home.css";
import bootstrapLogo from "./images/languages/bootstrap-social-logo.png";
import cssLogo from "./images/languages/CSSLogo.png";
import djangoLogo from "./images/languages/django-logo.png";
import htmlLogo from "./images/languages/HtmlLogo.png";
import jsLogo from "./images/languages/JSLogo.png";
import nodeLogo from "./images/languages/nodelogo.png";
import pythonLogo from "./images/languages/pythonLogo.png";
import reactLogo from "./images/languages/ReactLogo.png";
import rLogo from "./images/languages/RLogo.png";
import weatherAppPhoto from "./images/projectImages/weatherApp.png";
import cryptoTracker from "./images/projectImages/cryptotracker.png";
import twitterClonePhoto from "./images/projectImages/TwitterClone.png";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <Container>
      <Row className="d-flex-column justify-content-center">
        <h1 id="greeting">
          Hello World! My name is Jacob <br />
          Welcome to my Portfolio
        </h1>
        <Button
          href="https://github.com/jacobMolyneux"
          style={{ width: "10rem" }}
        >
          My GitHub
        </Button>
      </Row>

      <Row>
        <h1>About me</h1>

        <Col>
          <Row>
            <p id="introPara">
              I am 22 years old and a self-taught web-developer working towards
              being a full stack developer. I graduated from Western University
              with a double major in Economics and Political Science in July
              2021.
              <br />
              <br />I enjoy learning and building new things and programming has
              allowed me to do that. Here you can take a look at some of the
              things that I've built and projects I'm proud of.
            </p>
          </Row>
          <Row>
            <h1>Contact Me</h1>
            <p id="introPara">
              Email: Jacobmolyneux2@gmail.com
              <br />{" "}
              <a href="https://github.com/jacobMolyneux">
                Github: https://github.com/jacobMolyneux
              </a>
              <br />
              Phone Number: 647-298-6455
            </p>
          </Row>
        </Col>
        <Col>
          <h2>Technologies I Know</h2>
          <ListGroup>
            <ListGroup.Item>
              <Image
                style={{ width: "1rem", height: "auto" }}
                src={jsLogo}
              ></Image>
              JavaScript
            </ListGroup.Item>
            <ListGroup.Item>
              <Image
                style={{ width: "1rem", height: "auto" }}
                src={pythonLogo}
                alt="Python Logo"
              />
              Python
            </ListGroup.Item>
            <ListGroup.Item>
              <Image
                style={{ width: "1rem", height: "auto" }}
                src={bootstrapLogo}
                alt="Bootstrap Logo"
              />
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item>
              <Image
                style={{ width: "1rem", height: "auto" }}
                src={reactLogo}
                alt="React Logo"
              />
              React
            </ListGroup.Item>
            <ListGroup.Item>
              <Image
                style={{ width: "1rem", height: "auto" }}
                src={nodeLogo}
                alt="Node.js Logo"
              />
              Node.js
            </ListGroup.Item>
            <ListGroup.Item>
              <Image
                style={{ width: "1rem", height: "auto" }}
                src={djangoLogo}
                alt="Django Logo"
              />
              Django
            </ListGroup.Item>
            <ListGroup.Item>
              <Image
                style={{ width: "1rem", height: "auto" }}
                src={rLogo}
                alt="R Logo"
              />
              R
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div id="contentsDiv">
        <ProjectCard
          className="projectCard"
          image={twitterClonePhoto}
          projectName="Twitter Clone (In Progress)"
          description="this is a replication of Twitter made with React, CSS and hosted on firebase"
        />
        <ProjectCard
          className="projectCard"
          projectName="Crypto Tracker"
          image={cryptoTracker}
          link="https://jacobmolyneux.github.io/cryptosite/dist/index"
          description="A web app that allows you to see crypto currency prices, and historical prices. Visualizes historical prices and uses the AphaVantage Api. Made with React and graph.js"
        />
        <ProjectCard
          className="projectCard"
          projectName="Weather App"
          image={weatherAppPhoto}
          link="https://jacobmolyneux.github.io/WeatherApp/dist/index"
          description="A weather app that shows you the current weather and a three day forecast made with data from an API. I made this with vanilla JS and CSS"
        />
      </div>
    </Container>
  );
};

export { HomePage };
