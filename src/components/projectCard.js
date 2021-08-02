import React from "react";
import "./stylesheets/projectcard.css";
const ProjectCard = (props) => {
  return (
    <div className="projectCardContainer">
      <div id="imageHolder">
        <img
          src={props.image}
          alt="projectPhoto"
          className="projectPhoto"
        ></img>
      </div>
      <div id="detailsDiv">
        <div id="projectNameDiv">
          <h2>{props.projectName}</h2>
        </div>
        <div id="descriptionDiv">
          <p>{props.description}</p>
        </div>
        <div id="seeMoreButton">
          <a id="githubLink" href={props.link}>
            See More{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export { ProjectCard };
