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
        <button id="seeMoreButton">See More</button>
      </div>
    </div>
  );
};
export { ProjectCard };
